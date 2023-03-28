import React from "react";
import "./heading-with-icon.scss";

const HeadingWithIcon = function ({ icon, subTitle, title }) {
    return (
        <div className="heading-with-icon">
            <div className="h-w-i-icon">
                <img src={icon} alt="" />
            </div>
            <div className="h-w-i-text">
                <h6>{subTitle}</h6>
                <h2>{title}</h2>
            </div>
        </div >
    )
}

export default HeadingWithIcon;