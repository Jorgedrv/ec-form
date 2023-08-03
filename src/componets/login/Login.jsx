import { useState } from "react";
import "./Login.css";
import axios from "../../axios";
import { Alert } from "react-bootstrap";
import { authenticateUrl } from "../../common/endpoints";

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
          username: username,
          password: password
        }
        await axios.post(authenticateUrl, body)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    window.location.href = "/visit-form-records"   
                }
            })
            .catch(err => {
                setError(err);
            });
    };

    return (
        <form>
            <div className="auth-form-content">
                { error ? <Alert variant="danger">Username or password are incorrect</Alert> : <></> }
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="email" className="form-control mt-1" placeholder="Enter email"/>
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)}  type="password" className="form-control mt-1" placeholder="Enter password"/>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;