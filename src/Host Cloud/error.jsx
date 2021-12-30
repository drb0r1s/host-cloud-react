import React from "react";
import Header from "./header";
import Footer from "./footer";

const Error = () => {
    return(
        <div className="error">
            <Header />
            
            <div className="error-holder">
                <h1>error 404</h1>
                <strong>page not found</strong>
            </div>

            <Footer />
        </div>
    );
}

export default Error;