import React from "react";
import { Link } from "react-router-dom";

const MainHeading = (props) => {
    const { title, parentLoc, childLoc } = props;
    
    return(
        <div className="main-heading">
            <h1>{title}</h1>
            <Location parentLoc={parentLoc} childLoc={childLoc}/>
        </div>
    );
}

const Location = (props) => {
    const { parentLoc, childLoc } = props;
    
    return(
        <div className="location">
            <Link to="/" className="location-link">{parentLoc}</Link> /
            <span>{childLoc}</span>
        </div>
    );
}

export default MainHeading;