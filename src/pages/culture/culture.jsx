import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.scss";
import "./culture.scss";

const Culture = function () {
    return (
        <div className="culture-wrap page-padding-top">
            <h1 className="text-center">Culture</h1>
            <div className="culture sec-padding">
                <Container>
                    <Row>
                        <Col md={4}>4</Col>
                        <Col md={8}>8</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Culture;