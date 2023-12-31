import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Form, Button, Container, Image, Dropdown } from "react-bootstrap";
import "./Navigation.css";
import { hasJWT } from "../../shared/JwtUtil";
import Profile from "../profile/Profile";
import ModalComponent from "../modal/ModalComponent";
import Login from "../login/Login";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  }

  return (
    <header>
      <Navbar className="nav" collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/logo-menu.png"
              width="90"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="ml-auto" id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link eventKey={1} as={Link} to="/">Home</Nav.Link>
              {hasJWT() ?
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                    Forms
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Nav.Link eventKey={2} as={Link} to="visited-form-records">Visited form records</Nav.Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                : <></>
              }
            </Nav>
            <Form className="d-flex">
              {
                hasJWT() ? <Profile /> : <Button variant="outline-warning" onClick={handleModal}>Login</Button>
              }
            </Form>
            <ModalComponent size="md" title="Sing In" show={show} handleModal={handleModal} >
              <Login />
            </ModalComponent>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </header>
  )
};

export default Navigation;