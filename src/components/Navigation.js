import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Light-Background.png";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="formio-brand">
              <Image src={logo} style={{ height: "2.2rem" }}></Image>
              <span>+</span>
              <svg
                height="2.2rem"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="react-logo"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="components" className="nav-link">
              Examples
            </Link>
            <Nav.Link href="https://github.com/formio/react">
              <i className="fa fa-book me-1"></i>
              <span>Docs</span>
            </Nav.Link>
            <Nav.Link href="https://github.com/formio/react">
              <i className="fa fa-star me-1"></i>
              <span>Star</span>
            </Nav.Link>
            <Nav.Link href="https://github.com/formio/react/fork">
              <i className="fa fa-code-fork me-1"></i>
              <span>Fork</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
