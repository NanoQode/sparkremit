import React, { useState } from "react";
import "./step-10.scss";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdSpeed } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";

const Step10 = function () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="step-10">
            <div className="step-profile">
                <div className="step-profile-hdr">
                    <h3>Profile</h3>
                </div>
                <div className="step-profile-bdy">
                    <ul className="l-s-none">
                        <li className="bordered"><a href="javascript:void(0);"><BsGift />Paysend Bonus<span>0.00 CAD</span></a></li>
                        <li className="bordered"><a href="javascript:void(0);"><TbUsers />Invite Friends</a></li>
                        <li><a href="javascript:void(0);"><HiOutlineUserCircle />Personal Info</a></li>
                        <li><a href="javascript:void(0);"><AiOutlineCreditCard />Linked cards & accounts</a></li>
                        <li><a href="javascript:void(0);"><MdSpeed />Limits</a></li>
                        <li className="bordered"><a href="javascript:void(0);"><IoSettingsOutline />Settings</a></li>
                        <li><a href="javascript:void(0);"><SlSupport />Support</a></li>
                        <li><a href="javascript:void(0);"><AiOutlineQuestionCircle />Help Centre</a></li>
                        <li><a href="javascript:void(0);"><TiDocumentText />Legal</a></li>
                    </ul>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="choose-card-bank">
                        <a href="javascript:void(0);"><AiOutlineCreditCard /> Card</a>
                        <a href="javascript:void(0);"><BsBank /> Bank Account</a>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default Step10;