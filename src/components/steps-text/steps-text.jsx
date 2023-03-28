import React from "react";
import "./steps-text.scss";

const StepsText = function ({ image, heading, description }) {
    return (
        <div className="steps-text">
            <img src={image} alt="" />
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    )
}

export default StepsText;