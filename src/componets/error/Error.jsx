import { hasJWT } from "../../shared/JwtUtil";

const Error = () => {
    setTimeout(() => {
        if (hasJWT()) {
            localStorage.removeItem("token");   
        }
        window.location.href = '/'
    }, 2000);

    return (
        <div className="error-page text-center">
            <h3 className="oops">Oops!</h3>
            <h4 className="message">Something went wrong...</h4>
        </div>
    );
}

export default Error;