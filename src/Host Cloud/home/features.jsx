import React from "react";
import { homeFeaturesData } from "../data";
import featureIcon from "../images/home-features-icon.png";

const Features = () => {
    return(
        <div className="features">
            <p id="subtitle-p">best quality for you</p>
            <h2>cloud features</h2>

            <div className="container">
                <div className="row">
                    {homeFeaturesData.map((feature) => {
                        return <Feature
                            key={feature.id}
                            {...feature}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

const Feature = (props) => {
    const { title, description } = props;
    
    return(
        <div className="col-md-6 feature">
            <img src={featureIcon} alt="FEATURE" />

            <div className="feature-info">
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Features;