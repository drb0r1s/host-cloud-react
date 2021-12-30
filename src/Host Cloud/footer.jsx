import React from "react";
import { footerData } from "./data";
import Signature from "./signature";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row content-holder align-items-center justify-content-center">
                    {footerData.map((content) => {
                        return <Content
                            key={content.id}
                            {...content}
                        />
                    })}
                </div>
            </div>

            <Signature />
        </footer>
    );
}

const Content = (props) => {
    const {  title, content } = props;
    
    return(
        <div className="col-md-3 content">
            <h4>{title}</h4>
            {content.map((singleContent, index) => {
                switch(title) {
                    case "about us":
                        return <p key={index}>{singleContent}</p>;
                    case "hosting plans":
                        return <a key={index} href="#main">{singleContent}</a>;
                    case "useful links":
                        return <a key={index} href="#main">{singleContent}</a>;
                    case "more information":
                        return(
                            <div key={index} className="more-info">
                                <strong>{singleContent.name}:</strong>&nbsp;
                                <a href="#main">{singleContent.content}</a>
                            </div>
                        );
                    default: return <h4>no content</h4>;
                }
            })}
        </div>
    );
}

export default Footer;