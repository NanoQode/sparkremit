import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from "react-bootstrap";
import "../../App.scss";
import "./step-form.scss";
import Step1 from "../../components/step-1/step-1";
import Step2 from "../../components/step-2/step-2";
import Step3 from "../../components/step-3/step-3";
import Step4 from "../../components/step-4/step-4";
import Step5 from "../../components/step-5/step-5";
import Step6 from "../../components/step-6/step-6";
import Step7 from "../../components/step-7/step-7";
import Step8 from "../../components/step-8/step-8";
import Step9 from "../../components/step-9/step-9";
import Step10 from "../../components/step-10/step-10";
import StepsText from "../../components/steps-text/steps-text";
import eWallet from "../../images/e-wallet.svg";
import mailBox from "../../images/mailbox.svg";
import moneyIncome from "../../images/money-income.svg";
import messenger from "../../images/messenger.svg";
import plainCreditCard from "../../images/plain-credit-card.svg";
import sendGift from "../../images/send-gift.svg";
import idCard from "../../images/id-card.svg";
import profileData from "../../images/profile-data.svg";
import profileInterface from "../../images/profile-interface.svg";
import employeeMonth from "../../images/employee-of-the-month.svg";
import { BsCheckCircleFill } from "react-icons/bs";
import { TfiPencil } from "react-icons/tfi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";

const StepForm = function () {
    const [show, setShow] = useState(false);
    const handleStatusClose = () => setShow(false);
    const handleStatusShow = () => setShow(true);
    return (
        <div className="step-form-wrap sec-padding">
            <Container>
                <div className="step-form-container">
                    <div className="step-wrap step-1-wrap active">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={eWallet} heading="Add recipient’s bank account in Pakistan" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                    <a href="javascript:void(0);" className="link"><BsCheckCircleFill />View Rates First</a>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step1 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-2-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={mailBox} heading="Select how to deliver
money in Pakistan" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step2 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-3-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={moneyIncome} heading="Add your bank account
issued in Canada" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step3 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-4-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={plainCreditCard} heading="Add Your Bank 
Card" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step4 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-5-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <div class="steps-text">
                                        <img src={employeeMonth} alt="" />
                                        <h3>Romeen Khan</h3>
                                        <h2>147.46 CAD 30 000.00 PKR</h2>
                                        <div className="status">
                                            <BsCheckCircleFill /> Sent
                                        </div>
                                        <a href="javascript:void(0);" className="link" onClick={handleStatusShow}>View Status Details</a>
                                        <p>Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step5 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-6-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={sendGift} heading="How to deliver money to recipeint" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step6 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-7-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={messenger} heading="My Payees" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step7 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-8-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={idCard} heading="Personal Information" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step8 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-9-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={profileData} heading="Linked Accounts" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step9 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="step-wrap step-10-wrap">
                        <Row>
                            <Col md={5}>
                                <div className="s-f-left">
                                    <StepsText image={profileInterface} heading="Profile" description="Lorem Ipsum is simply dummy text of the printing and industryu Ipsum has been the industry's " />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="s-f-right">
                                    <Step10 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <Modal show={show} onHide={handleStatusClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Number<span>235457000</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="s-d-content">
                        <ul className="l-s-none">
                            <li><a href="javascript:void(0);"><TfiPencil />Rename Transaction</a></li>
                            <li><a href="javascript:void(0);"><IoDocumentTextOutline />Get Receipt</a></li>
                            <li><a href="javascript:void(0);"><SlSupport />Support</a></li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default StepForm;
