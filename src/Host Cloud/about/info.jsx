import React, { useState } from "react";
import { aboutInfoData } from "../data";
import team from "../images/about-info-team.jpg";

const Info = () => {
    const [activeButton, setActiveButton] = useState(aboutInfoData[0]);
    
    return(
        <div className="info">
            <div className="container">
                <div className="row info-holder align-items-center justify-content-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src={team} alt="TEAM" />
                    </div>

                    <div className="col-md-6 team-holder">
                        <div className="team-info">
                            <p id="subtitle-p">about us</p>
                            <h2>background of our company</h2>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum minima amet neque cumque. Quae, totam. Ad consectetur maiores est minus assumenda a. Esse dolore at consequatur dicta, illum culpa!</p>
                        </div>

                        <div className="team-slider">
                            <div className="button-holder">
                                {aboutInfoData.map((team) => {
                                    return <button
                                        key={team.id}
                                        id={team.id === activeButton.id ? "about-active-button" : ""}
                                        onClick={() => setActiveButton(team)}
                                    >{team.title}</button>
                                })}
                            </div>

                            {activeButton && <p
                                dangerouslySetInnerHTML={{
                                    __html: activeButton.description
                                }}
                            ></p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;