import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

class Navigationbar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src="../i-am-logo.png" height="50px" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#design">Design</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skill">Skill</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigationbar;
