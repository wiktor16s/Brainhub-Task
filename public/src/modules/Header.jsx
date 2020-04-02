import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar variant="dark">
        <Navbar.Brand>Brainhub Task</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#some">Some</Nav.Link>
          <Nav.Link href="#buttons">Buttons</Nav.Link>
          <Nav.Link href="#for-show">For show</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
