import React from "react";
import "./step-5.scss";
import { IoRefreshCircle } from "react-icons/io5";

const Step5 = function () {
    return (
        <div className="step-5">
            <div className="transfer-status">
                <div className="t-s-hdr">
                    <IoRefreshCircle />
                    <h3>Repeat Transfer</h3>
                </div>
                <div className="t-s-bdy">
                    <ul className="l-s-none">
                        <li><span>Limit</span> 35000 PKR</li>
                        <li><span>Fee</span> 0.00 CAD</li>
                        <li><span>Rate</span> 1.00 CAD = 203.438 PKR</li>
                        <li><span>Recipient</span> Romeen Khan</li>
                        <li><span>Delivery</span> To Account -9501</li>
                        <li><span>Payment </span> From Card -2266</li>
                        <li><span>Number</span> 36324876643</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Step5;