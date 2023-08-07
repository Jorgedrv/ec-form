
import { hasJWT } from "../../shared/JwtUtil";
import { Container } from "react-bootstrap";

const Error = () => {
    setTimeout(() => {
        if (hasJWT()) {
            localStorage.removeItem("token");
        }
        window.location.href = '/'
    }, 2000);

    return (
        <Container>
            <div className="error-page text-center">
                <h3 className="oops">Oops!</h3>
                <h4 className="message">Something went wrong...</h4>
            </div>
        </Container>
    );
}

export default Error;