import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "../header";
import Main from "../main-heading";
import Info from "./info";
import Reviews from "../home/reviews";
import Footer from "../footer";

const Services = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>drb0r1s - Host Cloud - Our Services</title>
            </Helmet>
            
            <div className="services">
                <Header />
                <Main
                    title="our services"
                    parentLoc="home"
                    childLoc="our services"
                />
                <Info />
                <Reviews />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default Services;