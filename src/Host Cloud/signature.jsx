import React from "react";
import borisLogo from "./images/boris-logo.png";

const Signature = () => {
    return(
        <div className="signature">
            <a href="https://boris.ml">
                <img src={borisLogo} alt="B O R I S" />
            </a>
            <strong>&copy;2021 - drb0r1s</strong>
        </div>
    );
}

export default Signature;