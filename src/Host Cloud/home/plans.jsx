import React from "react";
import { homePlansData } from "../data";

const Plans = () => {
    return(
        <div className="plans">
            <h2>cloud hosting plans</h2>
            <p id="plans-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos libero optio maxime obcaecati voluptate perspiciatis accusantium consequatur asperiores non dicta sequi inventore modi ullam, qui voluptas! Nemo voluptate excepturi temporibus!</p>
        
            <div className="plan-holder">
                <div className="container">
                    <div className="row all-plans">
                        {homePlansData.map((plan) => {
                            return <Plan
                                key={plan.id}
                                {...plan}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Plan = (props) => {
    const { name, price, description, plans, button } = props;
    
    return(
        <div className="col-md-4 plan">
            <strong>{name}</strong>
            
            <div
                className="price-info"
                id={price === 30 ? "special-info" : ""}
            >
                <p>${price}</p>
                <span>monthly</span>
            </div>

            <p>{description}</p>

            <div className="single-plan">
                {plans.map((plan, index) => {
                    return <p key={index}><span>&#10003;</span>&nbsp;{plan}</p>
                })}
            </div>

            <button id={price === 30 ? "special-info" : ""}>{button}</button>
        </div>
    );
}

export default Plans;