import React from "react";
import "./step-2.scss";
import Button from 'react-bootstrap/Button';
import { BsBank } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdSendToMobile } from "react-icons/md";

const Step2 = function () {
    return (
        <div className="step-2">
            <a href="javascript:void(0);" className="main-button m-b-dark m-b-blue">Special Offer</a>
            <div className="way-to-send-money">
                <div className="w-s-m-hdr">
                    <BsBank />
                    <h3>To Bank Account</h3>
                </div>
                <div className="w-s-m-bdy">
                    <ul className="l-s-none">
                        <li><span>Limit</span> 35000 PKR</li>
                        <li><span>Fee</span> 0.00 CAD</li>
                        <li><span>Should Arrive</span> One Business Day</li>
                    </ul>
                </div>
            </div>
            <div className="way-to-send-money">
                <div className="w-s-m-hdr">
                    <AiOutlineCreditCard />
                    <h3>To Bank Account</h3>
                    <p>Directly to any master card or VISA</p>
                </div>
                <div className="w-s-m-bdy">
                    <ul className="l-s-none">
                        <li><span>Limit</span> 300 000 PKR</li>
                        <li><span>Fee</span> 3.00 CAD</li>
                        <li><span>Should Arrive</span> In a Few minutes</li>
                    </ul>
                </div>
            </div>
            <div className="way-to-send-money">
                <div className="w-s-m-hdr">
                    <MdSendToMobile />
                    <h3>To Digital Wallet</h3>
                    <p>Jazzcash, Sada pay or U-Paisa</p>
                </div>
                <div className="w-s-m-bdy">
                    <ul className="l-s-none">
                        <li><span>Limit</span> 350 000 PKR</li>
                        <li><span>Fee</span> 3.00 CAD</li>
                        <li><span>Should Arrive</span> In a Few minutesy</li>
                    </ul>
                </div>
            </div>
            <div className="button-group">
                <Button type="button" className="main-button m-b-dark m-b-grey">Back</Button>
                <Button type="button" className="main-button m-b-dark">Next Step</Button>
            </div>
        </div>
    )
}

export default Step2;