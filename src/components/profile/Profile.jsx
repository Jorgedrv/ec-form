import Dropdown from "react-bootstrap/Dropdown";

const Profile = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/"
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Profile;