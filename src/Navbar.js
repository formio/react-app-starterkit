import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          React DEMO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavDropdown title="Components" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            <Link to={"/components/renderer"}>Form Renderer</Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
            <Link to={"/components/builder"}>Form Builder</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Nav>
  );
};

export default Navbar;
