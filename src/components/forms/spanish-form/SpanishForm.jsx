import { Container } from "react-bootstrap";

const EnglishForm = () => {
    return (
        <Container fluid>
            <div className="text-center">
                <h1 className="display-4 centered">Clases de Español</h1>
            </div>
            <div className="text-center">
                <img width={980} height={520} src="/images/under-construction.jpg" alt="under" className="mx-auto d-block img-fluid" />
                <p className="display-6 centered">Under Construction...</p>
            </div>
        </Container>
    );
}

export default EnglishForm;