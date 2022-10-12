import { Container, Nav, Navbar } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import logo from '../Light-Background.png';

function Navigation() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
        <Image src={logo} style={{height: '2.5rem', paddingRight: '.8rem'}}></Image>
        <Navbar.Brand href="/react-app-starterkit/">
           React Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="components">Components</Nav.Link>
            <Nav.Link href="examples">Examples</Nav.Link>
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