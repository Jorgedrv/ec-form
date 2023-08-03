import { Form, Row, Col } from "react-bootstrap";

const VisitFormRecordsDetail = ({ detailRecord }) => {
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Name</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Last name</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.lastName} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Email</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.email} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Phone number</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.mobilePhone} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Street</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.street} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">City</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.city} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">State</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.state} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Postal code</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.postalCode} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Birthday</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.birthday} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Spouse name</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.spouseName} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column md="6" sm="6">Spouse with me?</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.spouseWithMe === 1 ? "YES" : "NO"} />
                    </Col>
                </Form.Group>
                <Form.Group as={Col} />
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="12" sm="12">I"m here as</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.hereAs} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="12" sm="12">Need more information?</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.moreInformation} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="12" sm="12">I"m ready to</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.readyTo} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column md="12" sm="12">Requests or comments</Form.Label>
                    <Col sm="12">
                        <Form.Control plaintext readOnly value={detailRecord.comments} />
                    </Col>
                </Form.Group>
            </Row>
        </>
    );
}

export default VisitFormRecordsDetail;