import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "../header";
import Main from "../main-heading";
import Form from "./form";
import Map from "./map";
import Reviews from "../home/reviews";
import Footer from "../footer";

const Contact = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>drb0r1s - Host Cloud - Contact Us</title>
            </Helmet>
            
            <div className="contact">
                <Header />
                <Main
                    title="contact us"
                    parentLoc="home"
                    childLoc="contact us"
                />
                <Form />
                <Map />
                <Reviews />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default Contact;