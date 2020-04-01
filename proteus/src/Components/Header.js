import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Header() {
    return <Navbar bg="proteus" expand="lg" variant="proteus" sticky="top">
      <Navbar.Brand href="#home">PROTEUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">MOVIES</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search for a movie" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar.Collapse>
  </Navbar>
}

export default Header