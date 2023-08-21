import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="social-container">
                <a href="https://www.youtube.com/@esperanzachurch5240" target="_blank" rel="noopener noreferrer" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/EsperanzaChurchSpringHill" target="_blank" rel="noopener noreferrer" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/esperanza_church" target="_blank" rel="noopener noreferrer" className="instragam social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div className="text-black text-center p-4" style={{ backgroundColor: "white" }}>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a className="text-reset fw-bold" href="/">
                    Esperanza Church
                </a>
            </div>
        </footer>
    );
}

export default Footer;