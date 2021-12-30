import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "../header";
import Main from "./main";
import Services from "./services";
import Plans from "./plans";
import Features from "./features";
import Reviews from "./reviews";
import Footer from "../footer";

const Home = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta name="author" content="drb0r1s" />
                <meta name="description" content="Host Cloud developed in React." />
                <meta name="keywords" content="drb0r1s, React, React Functional Components, HTML CSS JS" />
                <title>drb0r1s - Host Cloud</title>
            </Helmet>
            
            <div className="home">
                <Header />
                <Main />
                <Services />
                <Plans />
                <Features />
                <Reviews />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default Home;