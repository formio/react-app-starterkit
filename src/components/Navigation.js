import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import logo from '../Light-Background.png';

function Navigation() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">
          <Image src={logo} style={{height: '2.2rem'}}></Image> React Demo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/components/renderer">Components</Nav.Link>
              <Nav.Link href="/examples">Examples</Nav.Link>
              <Nav.Link href="https://github.com/formio/react"><i className="fa fa-book"></i> Docs</Nav.Link>
              <Nav.Link href="https://github.com/formio/react">Star</Nav.Link>
              <Nav.Link href="https://github.com/formio/react/fork">Fork</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default Navigation;