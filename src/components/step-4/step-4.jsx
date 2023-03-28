import React from "react";
import "./step-4.scss";
import { AiOutlineCreditCard } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Step4 = function () {
    return (
        <div className="step-4">
            <div className="add-bank">
                <div className="add-bank-hdr">
                    <AiOutlineCreditCard />
                    <h3>Add Your Card Details</h3>
                </div>
                <div className="add-bank-bdy">
                    <Form>
                        <Form.Group className="mb-3 f-group" controlId="aCDCardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="aCDExpiryDate">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" placeholder="Should be visa or master card" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="button-group">
                <Button type="button" className="main-button m-b-dark m-b-grey">Back</Button>
                <Button type="button" className="main-button m-b-dark">Next Step</Button>
            </div>
        </div>
    )
}

export default Step4;