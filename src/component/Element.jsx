import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Element() {
  return (
    <div>
      <Navbar expand="lg" className="mx-auto" bg='dark' data-bs-theme='dark'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container fluid className='px-0 d-flex justify-content-center'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand as={Link} to="/" className='ps-5'>Ashutosh Singh</Navbar.Brand>
            <Nav className="mx-auto text-white pe-5">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/todolist">Todo_list</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Element;