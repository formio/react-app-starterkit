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
            <div class="formio-brand d-flex align-items-center">
              <Image
                src={logo}
                style={{ height: "2.2rem", marginRight: "5px" }}
              ></Image>
              <span style={{ marginRight: "5px" }}>+</span>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                style={{ height: "2.2rem" }}
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="components">Components</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="components">Examples</Link>
            </Nav.Link>
            <Nav.Link href="https://github.com/formio/react">
              <i className="fa fa-book me-1"></i>
              <span>Docs</span>
            </Nav.Link>
            <Nav.Link href="https://github.com/formio/react">Star</Nav.Link>
            <Nav.Link href="https://github.com/formio/react/fork">
              Fork
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
