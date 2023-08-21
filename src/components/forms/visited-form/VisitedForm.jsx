import React, { useState } from "react";
import { Form, Row, Col, Container, Alert } from "react-bootstrap";
import states from "../../../backoffice/states.json";
import hereas from "../../../backoffice/hereas.json";
import information from "../../../backoffice/information.json";
import readyto from "../../../backoffice/readyto.json";
import axios from "../../../axios";
import { createUrl } from "../../../common/endpoints";
import SpinnerButton from "../../spinner/SpinnerButton";

const VisitedForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [birthday, setBirthday] = useState("");
    const [spouseName, setSpouseName] = useState("");
    const [spouseWithMe, setSpouseWithMe] = useState(0);
    const [hereAs, setHereAs] = useState("");
    const [info, setInfo] = useState("");
    const [readyTo, setReadyTo] = useState("");
    const [comments, setComments] = useState("");
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
            name: name,
            lastName: lastName,
            email: email,
            mobilePhone: phone,
            street: street,
            city: city,
            state: state,
            postalCode: postalCode,
            birthday: birthday,
            spouseName: spouseName,
            spouseWithMe: spouseWithMe,
            hereAs: hereAs,
            moreInformation: info,
            readyTo: readyTo,
            comments: comments
        };
        await axios.post(createUrl, body)
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
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setStreet("");
        setCity("");
        setState("");
        setPostalCode("");
        setBirthday("");
        setSpouseName("");
        setSpouseWithMe("");
        setHereAs("");
        setInfo("");
        setReadyTo("");
        setComments("");
    }

    return (
        <Container fluid>
            <div className="text-center"><h1 className="display-4 centered">Visited Form</h1></div>
            <Form id="create-visit-form" noValidate validated={validated} onSubmit={onSubmitForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridMobilePhone">
                    <Form.Label>Mobile Phone</Form.Label>
                    <Form.Control required placeholder="931999999" value={phone} onChange={e => setPhone(e.target.value)} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control required placeholder="1480 Main Street" value={street} onChange={e => setStreet(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required placeholder="New York" value={city} onChange={e => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select required defaultValue={""} value={state} onChange={e => setState(e.target.value)} >
                            <option value={""}>Choose...</option>
                            {states.map(state => <option key={state.value} value={state.value}>{state.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control required type="number" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSpouseName">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control required type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSpouseName">
                        <Form.Label>Spouse Name</Form.Label>
                        <Form.Control placeholder="Enter name" value={spouseName} onChange={e => setSpouseName(e.target.value)} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Spouse with me" value={spouseWithMe} onChange={e => setSpouseWithMe(e.target.checked ? 1 : 0)} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>I"m here as a:</Form.Label>
                        <Form.Select value={hereAs} onChange={e => setHereAs(e.target.value)}>
                            <option>Choose...</option>
                            {hereas.map(here => <option key={here.value} value={here.value} label={here.value} />)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>I"d like more information about:</Form.Label>
                        <Form.Select value={info} onChange={e => setInfo(e.target.value)}>
                            <option>Choose...</option>
                            {information.map(info => <option key={info.value} value={info.value} label={info.value} />)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Have someone contact me, I"m ready to:</Form.Label>
                        <Form.Select value={readyTo} onChange={e => setReadyTo(e.target.value)}>
                            <option>Choose...</option>
                            {readyto.map(ready => <option key={ready.value} value={ready.value} label={ready.value} />)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Prayer requests, comments, or other updates</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter request, comment or updates"
                            value={comments} onChange={e => setComments(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <SpinnerButton spinner={spinner}>Submit</SpinnerButton>
                {
                    sent ? <Alert key="success" variant="success">Form was sent correctly</Alert> : <></>
                }
            </Form>
        </Container>
    );
}

export default VisitedForm;