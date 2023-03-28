import React, { useState } from "react";
import "./step-1.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Step1 = function () {
    const [value, setValue] = useState();
    return (
        <div className="step-1">
            <Form>
                <Form.Group className="mb-3 f-group" controlId="formRelationshipToRecipient">
                    <Form.Select>
                        <option>Relationship to Recipient</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="bank">
                    <Form.Select>
                        <option>Bank</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="account">
                    <Form.Control type="text" placeholder="Account or IBAN" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="firstName">
                    <Form.Control type="text" placeholder="First Name (In Latin Characters)" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name (In Latin Characters)" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="tel">
                    {/* <Form.Control type="text" placeholder="Last Name (In Latin Characters)" /> */}
                    <PhoneInput className="form-control" defaultCountry="PK" value={value} onChange={setValue} />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="city">
                    <Form.Control type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="address">
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="address">
                    <Form.Control type="text" placeholder="Transfer Purpose" />
                </Form.Group>
                <Button className="main-button" type="button">
                    Next Step
                </Button>
            </Form>
        </div>
    )
}

export default Step1;