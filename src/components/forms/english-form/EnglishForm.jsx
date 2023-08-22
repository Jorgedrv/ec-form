import React, { useState } from "react";
import { Form, Row, Col, Container, Alert } from "react-bootstrap";
import SpinnerButton from "../../spinner/SpinnerButton";
import { englishFormCreateUrl } from "../../../common/endpoints";
import axios from "../../../axios";
import englishLevels from "../../../backoffice/englishLevels.json";

const EnglishForm = () => {
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [englishLevel, setEnglishLevel] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [education, setEducation] = useState("");
    const [countryOfBirth, setCountryOfBirth] = useState("");
    const [validated, setValidated] = useState(false);
    const [sent, setSent] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
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
            englishLevel: englishLevel,
            postalCode: postalCode,
            education: education,
            countryOfBirth: countryOfBirth
        };
        await axios.post(englishFormCreateUrl, body)
            .then(response => {
                setSent(true);
                clearForm();
                setTimeout(() => {
                    setSpinner(false);
                    window.location.href = '/'
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
        setEnglishLevel("");
        setPostalCode("");
        setEducation("");
        setCountryOfBirth("");
    }

    return (
        <Container fluid>
            <div className="text-center"><h1 className="display-4 centered">Clases de Inglés</h1></div>
            <Form id="create-visit-form" noValidate validated={validated} onSubmit={onSubmitForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control required placeholder="Nombres" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control required placeholder="Apellidos" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridStreet">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control required placeholder="1480 Main Street" value={street} onChange={e => setStreet(e.target.value)} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control required placeholder="New York" value={city} onChange={e => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostalCode">
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control required type="number" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control required placeholder="931999999" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCountryOfBirth">
                        <Form.Label>Pais de Nacimiento</Form.Label>
                        <Form.Control required placeholder="United States" value={countryOfBirth} onChange={e => setCountryOfBirth(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEducation">
                        <Form.Label>Educación</Form.Label>
                        <Form.Control required placeholder="Bachelor" value={education} onChange={e => setEducation(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control required value={age} onChange={e => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEnglishLevel">
                        <Form.Label>English Level</Form.Label>
                        <Form.Select required defaultValue={""} value={englishLevel} onChange={e => setEnglishLevel(e.target.value)} >
                            <option value={""}>Choose...</option>
                            {englishLevels.map(state => <option key={state.value} value={state.value}>{state.value}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <SpinnerButton spinner={spinner}>Enviar</SpinnerButton>
                {
                    sent ? <Alert key="success" variant="success">Form was sent correctly</Alert> : <></>
                }
            </Form>
        </Container>
    );
}

export default EnglishForm;