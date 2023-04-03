import React from "react";
import "./step-8.scss";
import { MdEdit } from "react-icons/md";

const Step8 = function () {
    return (
        <div className="step-8">
            <div className="personal-info">
                <div className="p-i-hdr">
                    <h3>Personal Info.</h3>
                </div>
                <div className="p-i-bdy">
                    <ul className="l-s-none">
                        <li>
                            <div className="p-i-label">Full Name</div>
                            <div className="p-i-text"><h4>Ali Arslan Zaidi</h4></div>
                        </li>
                        <li>
                            <div className="p-i-label">Date of Birth</div>
                            <div className="p-i-text"><h4>03 - 04 -1985</h4></div>
                        </li>
                        <li>
                            <div className="p-i-label">Mobile Number</div>
                            <div className="p-i-text"><h4>+92 313 2487213 <a href="javascript:void(0);"><MdEdit /></a></h4></div>
                        </li>
                        <li>
                            <div className="p-i-label">Email Address</div>
                            <div className="p-i-text"><h4>user@yourmail.com <a href="javascript:void(0);"><MdEdit /></a></h4></div>
                        </li>
                        <li>
                            <div className="p-i-label">Residence address</div>
                            <div className="p-i-text"><h4>45 Street. House No. 2 model town</h4></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Step8;