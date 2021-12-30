import React from "react";
import { servicesInfoData } from "../data";

const Info = () => {
    return(
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 info-holder">
                        <p id="subtitle-p">about us</p>
                        <h2>best services we provide</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorum alias reprehenderit dolore placeat molestias officia, quaerat fugit atque omnis.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {servicesInfoData.map((option) => {
                        return <Option
                            key={option.id}
                            {...option}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

const Option = (props) => {
    const {  image, title, description } = props;
    
    return(
        <div className="col-md-4 option">
            <div className="img-holder">
                <img src={image} alt="" />
            </div>

            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    );
}

export default Info;