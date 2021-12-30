import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "../header";
import Main from "../main-heading";
import Info from "./info";
import Team from "./team";
import Reviews from "../home/reviews";
import Footer from "../footer";

const About = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>drb0r1s - Host Cloud - About Us</title>
            </Helmet>
            
            <div className="about">
                <Header />
                <Main
                    title="about us"
                    parentLoc="home"
                    childLoc="about us"
                />
                <Info />
                <Team />
                <Reviews />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default About;