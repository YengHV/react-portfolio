import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavBarComp(){

return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Yeng Vang</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Repo">Repositories</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
)
};

export default NavBarComp;

