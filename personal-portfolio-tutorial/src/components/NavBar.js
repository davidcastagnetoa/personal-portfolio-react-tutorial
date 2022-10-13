// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Container } from "react-bootstrap";

export const navBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#">
                    <img src={''} alt="" />
                    <img src={''} alt="" />
                    <img src={''} alt="" />
                </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')} ></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}