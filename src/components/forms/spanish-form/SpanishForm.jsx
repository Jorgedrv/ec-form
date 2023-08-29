import React, { useState } from "react";
import { Form, Row, Col, Container, Alert } from "react-bootstrap";
import SpinnerButton from "../../spinner/SpinnerButton";
import { spanishFormCreateUrl } from "../../../common/endpoints";
import levels from "../../../backoffice/levels.json";
import axios from "../../../axios";

const EnglishForm = () => {
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [spanishLevel, setSpanishLevel] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [countryOfBirth, setCountryOfBirth] = useState("");
    const [validated, setValidated] = useState(false);
    const [sent, setSent] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setSent(false);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        } else {
            setValidated(false);
        }

        setSpinner(true);
        const body = {
            age: age,
            name: name,
            lastName: lastName,
            email: email,
            phone: phone,
            street: street,
            city: city,
            spanishLevel: spanishLevel,
            postalCode: postalCode,
            countryOfBirth: countryOfBirth
        };
        await axios.post(spanishFormCreateUrl, body)
            .then(response => {
                clearForm();
                setTimeout(() => {
                    setSpinner(false);
                    setSent(true);
                }, 1000);
            })
            .catch(error => console.log(error));
    }

    const clearForm = () => {
        setAge("");
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setStreet("");
        setCity("");
        setSpanishLevel("");
        setPostalCode("");
        setCountryOfBirth("");
    }

    return (
        <Container fluid>
            <div className="text-center"><h1 className="display-4 centered">Spanish Class</h1></div>
            <Form id="create-visit-form" noValidate validated={validated} onSubmit={onSubmitForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required placeholder="First Name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridStreet">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required placeholder="1480 Main Street" value={street} onChange={e => setStreet(e.target.value)} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required placeholder="New York" value={city} onChange={e => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control required type="number" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required placeholder="931999999" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCountryOfBirth">
                        <Form.Label>Birth Country</Form.Label>
                        <Form.Control required placeholder="United States" value={countryOfBirth} onChange={e => setCountryOfBirth(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control required value={age} onChange={e => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEnglishLevel">
                        <Form.Label>Spanish Level</Form.Label>
                        <Form.Select required defaultValue={""} value={spanishLevel} onChange={e => setSpanishLevel(e.target.value)} >
                            <option value={""}>Choose...</option>
                            {levels.map(state => <option key={state.value} value={state.value}>{state.value}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <SpinnerButton spinner={spinner}>Enviar</SpinnerButton>
                {
                     sent ? <Alert style={{marginTop: 15}} key="success" variant="success">Form was sent correctly</Alert> : <></>
                }
            </Form>
        </Container>
    );
}

export default EnglishForm;