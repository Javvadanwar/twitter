import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Twitter</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
