import React, { useState } from "react";
import "./step-9.scss";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsBank } from "react-icons/bs";

const Step9 = function () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="step-9">
            <div className="linked-acc">
                <div className="linked-acc-hdr">
                    <h3>Linked Cards & Accounts</h3>
                    <a href="javascript:void(0);" className="link" onClick={handleShow}>Add New account</a>
                </div>
                <div className="linked-acc-bdy">
                    <Form>
                        <Form.Group className="mb-3 f-group" controlId="lAcc-card-1">
                            <Form.Label>Linked cards</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" placeholder="Card -4321" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="lAcc-card-2">
                            <Form.Control className="f-c-rounded" type="text" placeholder="Card -4321" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="lAcc-card-2">
                            <Form.Control className="f-c-rounded" type="text" placeholder="Card -4321" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="lAcc-card-expiry-date">
                            <Form.Label>Linked bank Accounts</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" placeholder="Bank Account -2354" />
                        </Form.Group>
                    </Form>
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

export default Step9;