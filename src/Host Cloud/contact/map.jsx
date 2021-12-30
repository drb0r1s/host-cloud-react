import React from "react";

const Map = () => {
    return(
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.4016193434!2d-43.393279!3d-23.010903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1640708431297!5m2!1sen!2sth" width="100%" height="600" style={{ border: "0" }} allowFullScreen="" loading="lazy"  title="google-map" />
        </div>
    );
}

export default Map;