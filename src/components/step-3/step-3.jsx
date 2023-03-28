import React from "react";
import "./step-3.scss";
import { BsBank } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Step3 = function () {
    return (
        <div className="step-3">
            <div className="add-bank">
                <div className="add-bank-hdr">
                    <BsBank />
                    <h3>Add Bank Issued in Canada</h3>
                </div>
                <div className="add-bank-bdy">
                    <Form>
                        <Form.Group className="mb-3 f-group" controlId="addBankAccountNumber">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="addBankInstitutionNumber">
                            <Form.Label>Institution Number</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" placeholder="3 Digits long" />
                        </Form.Group>
                        <Form.Group className="mb-3 f-group" controlId="addBankBranchNumber">
                            <Form.Label>Branch Number</Form.Label>
                            <Form.Control className="f-c-rounded" type="text" />
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

export default Step3;