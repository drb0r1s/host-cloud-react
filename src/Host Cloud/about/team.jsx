import React from "react";
import { aboutTeamData } from "../data";


const Team = () => {
    return(
        <div className="team">
            <p id="subtitle-p">our team</p>
            <h2>meet the greatest people</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates!</p>
        
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {aboutTeamData.map((member) => {
                        return <Member
                            key={member.id}
                            {...member}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

const Member = (props) => {
    const {image, name, title} = props;
    
    return(
        <div className="col-md-4 member">
            <img src={image} alt="MEMBER" />

            <strong>{name}</strong>
            <p>{title}</p>
        </div>
    );
}

export default Team;