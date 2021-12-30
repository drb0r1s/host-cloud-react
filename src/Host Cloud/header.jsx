import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerData } from "./data";

const Header = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    
    const defineResponsive = window.matchMedia("(max-width: 1024px)").matches ? true : false;
    const [isResponsive, setIsResponsive] = useState(defineResponsive);
    
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", checkScroll);

        return () => { window.removeEventListener("scroll", checkScroll) }
    });

    useEffect(() => {
        window.addEventListener("resize", changeResponsive);

        return () => { window.removeEventListener("resize", changeResponsive) }
    });

    const responsiveHeader = useRef(null);
    const rMenu = useRef(null);
    const header = useRef(null);

    function checkScroll() {
        if(window.scrollY >= 100) setIsScrolling(true);
        else setIsScrolling(false);
    }

    const returnHome = useNavigate();
    
    function reloadHome() {
        returnHome("/");
        window.location.reload();
    }
    
    function changeResponsive() {
        const responsive = window.matchMedia("(max-width: 1024px)");
        
        if(responsive.matches) setIsResponsive(true);
        else setIsResponsive(false);
    }

    function openMenu() {
        if(isOpen) {
            responsiveHeader.current.id = "";

            rMenu.current.style.opacity = "0";
            
            setTimeout(() => {
                setIsOpen(false);
                header.current.style.height = "70px";
            }, 300);
        }

        else {
            responsiveHeader.current.id = "responsive-menu-on";
            
            header.current.style.height = "300px";

            setTimeout(() => {
                setIsOpen(true);

                setTimeout(() => {
                    rMenu.current.style.opacity = "1";
                }, 100);
            }, 300);
        }
    }
    
    return(
        <header id={isScrolling ? "white-header" : ""} ref={header}>
            <div className="container">
                <div className={isResponsive ? "row justify-content-between" : "row"}>
                    <div className="col-4 d-flex align-items-center">
                        <p onClick={reloadHome}>host <span>cloud</span></p>
                    </div>

                    <div
                        className={isResponsive ? "col-3 d-flex align-items-center justify-content-center" : "col-7 d-flex align-items-center justify-content-center"}
                    >
                        {isResponsive ? <ResponsiveHeader
                            openMenu={openMenu}
                            responsiveHeader={responsiveHeader}
                        /> : <NormalHeader />}
                    </div>
                </div>
            </div>

            {isOpen && <Menu
                rMenu={rMenu}
            />}
        </header>
    );
}

const NormalHeader = () => {
    const pageURL = window.location.pathname;
    
    return(
        <>
            <nav>
                {headerData.map((section, index) => {
                    const realSection = section.name.split(" ");
                    const i = index === 2 ? 1 : 0;
                    const sectionDivider = index === 0 ? "/" : "/" + realSection[i];
                                
                    return <Link
                        key={section.id}
                        id={sectionDivider === pageURL ? "header-active-button" : ""}
                        to={sectionDivider}
                    >{section.name}</Link>
                })}
            </nav>

            <div className="button-holder">
                <button className="normal-button">log in</button>
                <button className="normal-button">sign up</button>
            </div>
        </>
    );
}

const ResponsiveHeader = (props) => {
    const { openMenu, responsiveHeader } = props;
    
    return(
        <>
            <button
                className="responsive-button"
                onClick={openMenu}
                ref={responsiveHeader}
            ></button>
        </>
    );
}

const Menu = (props) => {
    const { rMenu } = props;
    
    const pageURL = window.location.pathname;
    
    return(
        <div className="menu" ref={rMenu}>
            <nav>
                {headerData.map((section, index) => {
                    const realSection = section.name.split(" ");
                    const i = index === 2 ? 1 : 0;
                    const sectionDivider = index === 0 ? "/" : "/" + realSection[i];
                                
                    return <Link
                        key={section.id}
                        id={sectionDivider === pageURL ? "header-active-button" : ""}
                        to={sectionDivider}
                    >{section.name}</Link>
                })}
            </nav>

            <div className="button-holder">
                <button className="normal-button">log in</button>
                <button className="normal-button">sign up</button>
            </div>
        </div>
    );
}

export default Header;