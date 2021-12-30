import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import Home from "./home/home";
import About from "./about/about";
import Services from "./services/services";
import Contact from "./contact/contact";
import Error from "./error";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        window.addEventListener("load", cancelLoading);

        return () => { window.removeEventListener("load", cancelLoading); }
    }, []);

    function cancelLoading() {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }
    
    if(isLoading) return <Loading />;
    
    return(
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

const Loading = () => {
    return(
        <div className="loading">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
        </div>
    );
}

export default Main;