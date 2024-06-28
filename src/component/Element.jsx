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
            <Nav className="mx-auto text-white">
              <Navbar.Brand as={Link} to="/">Ashutosh singh</Navbar.Brand>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/registration">registration</Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/todolist">Todolist</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Element;