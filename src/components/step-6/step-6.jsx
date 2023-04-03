import React, { useState } from "react";
import "./step-6.scss";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactFlagsSelect from "react-flags-select";

const Step6 = function () {
    const [selected, setSelected] = useState("");
    return (
        <div className="step-6">
            <div className="money-deliver-options">
                <div className="m-d-option">
                    <AiOutlineCreditCard />
                    <h3>To bank card</h3>
                    <p>Faster transfer directly to receiver’s master card or other bank details</p>
                </div>
                <div className="m-d-option">
                    <BsGlobe />
                    <h3>Swift Wire Transfer</h3>
                    <p>Transfer to recipient's bank account or other account info.</p>
                </div>
                <Form>
                    <Form.Label>More options by destinations</Form.Label>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        placeholder="Search other countries"
                    />
                </Form>
            </div>
            <div className="button-group">
                <Button type="button" className="main-button m-b-dark m-b-grey">Back</Button>
                <Button type="button" className="main-button m-b-dark">Next Step</Button>
            </div>
        </div>
    )
}

export default Step6;