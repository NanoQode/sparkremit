import React from "react";
import "./step-8.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { TfiHome } from "react-icons/tfi";
import { TfiAngleDown } from "react-icons/tfi";
import flagPak from "../../images/flag-pak.svg";

const Step8 = function () {
    return (
        <div className="step-8">
            <div className="transfers-wrap">
                <div className="transfers-hdr">
                    <BsFillCheckCircleFill />
                    <h3>My Transfers</h3>
                </div>
                <div className="transfers-bdy">
                    <div className="transfer-container">
                        <h6>March</h6>
                        <ul className="l-s-none">
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Romeen Khan</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-30,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Ali Zaidi</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-65,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Jameel Khan</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-39,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="transfer-container">
                        <h6>February</h6>
                        <ul className="l-s-none">
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>John Doe</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-39.50 USD</span><BsFillCheckCircleFill /></div>
                            </li>
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Chris Myler</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-39.50 USD</span><BsFillCheckCircleFill /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="transfer-container">
                        <h6>January</h6>
                        <ul className="l-s-none">
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Ali Zaidi</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-65,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="transfer-container">
                        <h6>December</h6>
                        <ul className="l-s-none">
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Ali Zaidi</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-65,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                            <li>
                                <div className="transfered-to">
                                    <BsBank />
                                    <h4>Ali Zaidi</h4>
                                    <p>To Account -1921</p>
                                    <img src={flagPak} alt="" />
                                </div>
                                <div className="transfered-amount"><span>-65,000 PKR</span><BsFillCheckCircleFill /></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:void(0);" className="link">Show More <TfiAngleDown /></a>
            </div>
        </div>
    )
}

export default Step8;