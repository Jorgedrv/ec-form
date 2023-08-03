import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalComponent from "../modal/ModalComponent";
import VisitForm from "./visit-form/VisitForm";
import "./Forms.css";

const Forms = () => {
    const [show, setShow] = useState(false);

    const handleModal = () => {
        setShow(!show);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Link style={{textDecoration: "none"}} onClick={handleModal}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Visit form</h5>
                                <p className="card-text">Send a form to know you better.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <ModalComponent size="lg" title="Visit Form" show={show} handleModal={handleModal}>
                <VisitForm handleModal={handleModal} />
            </ModalComponent>
        </Container>
    );
}

export default Forms;