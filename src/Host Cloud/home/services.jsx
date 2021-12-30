import React, { useRef } from "react";
import { homeServicesData, homeServicesDataList } from "../data";
import servicesDatabase from "../images/home-services-database.svg";

const Services = () => {
    const logoHolder = useRef(null);
    
    function mouseDown(event) {
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);

        const prevX = event.clientX;

        const logoHolderLeft = logoHolder.current.style.left;
        const holderLeft = logoHolderLeft.substring(0, logoHolderLeft.length - 2);

        function mouseMove(event) {
            const newX = prevX - event.clientX;
            logoHolder.current.style.left = holderLeft - newX + "px";
        }

        function mouseUp() {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);

            if(holderLeft > 600) {
                const max = 500;
                const min = 350;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                logoHolder.current.style.transition = "300ms";
                logoHolder.current.style.left = randomRange + "px";

                setTimeout(() => {
                    logoHolder.current.style.transition = "0ms";
                }, 300);
            }

            if(holderLeft < -600) {
                const max = -500;
                const min = -350;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                logoHolder.current.style.transition = "300ms";
                logoHolder.current.style.left = randomRange + "px";

                setTimeout(() => {
                    logoHolder.current.style.transition = "0ms";
                }, 300);
            }
        }
    }

    function touchStart(event) {
        window.addEventListener("touchmove", touchMove);
        window.addEventListener("touchend", touchEnd);

        const prevTouches = event.targetTouches[0];
        
        const logoHolderLeft = logoHolder.current.style.left;
        const holderLeft = logoHolderLeft.substring(0, logoHolderLeft.length - 2);
        
        function touchMove(event) {
            const touchLocation = event.targetTouches[0];
            const newTouch = prevTouches.clientX - touchLocation.clientX;
            
            logoHolder.current.style.left = holderLeft - newTouch + "px";
        }

        function touchEnd() {
            window.removeEventListener("touchmove", touchMove);
            window.removeEventListener("touchend", touchEnd);

            if(holderLeft > 600) {
                const max = 500;
                const min = 350;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                logoHolder.current.style.transition = "300ms";
                logoHolder.current.style.left = randomRange + "px";

                setTimeout(() => {
                    logoHolder.current.style.transition = "0ms";
                }, 300);
            }

            if(holderLeft < -600) {
                const max = -500;
                const min = -350;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                logoHolder.current.style.transition = "300ms";
                logoHolder.current.style.left = randomRange + "px";

                setTimeout(() => {
                    logoHolder.current.style.transition = "0ms";
                }, 300);
            }
        }
    }

    return(
        <div className="services">
            <h2>trusted by 1,250+ happy customers worldwide</h2>

            <div className="logo-holder">
                <div
                    className="logo"
                    ref={logoHolder}
                    onMouseDown={mouseDown}
                    onTouchStart={touchStart}
                >
                    {homeServicesData.map((logo, index) => {
                        return <img key={index} src={logo} alt="logo" />
                    })}
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 services-info">
                        <p id="subtitle-p">hosting services</p>
                        <h3>services we provide</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rem sint perspiciatis accusamus suscipit laudantium fugiat eaque quis incidunt dolores.</p>
                    </div>

                    {homeServicesDataList.map((service) => {
                        return <Service
                            key={service.id}
                            {...service}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

const Service = (props) => {
    const { title, text } = props;
    
    return(
        <div className="col-md-4 service">
            <div className="img-holder">
                <img src={servicesDatabase} alt="database" />
            </div>

            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    );
}

export default Services;