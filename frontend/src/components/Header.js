import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' expand="lg" variant='dark' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">BlipKart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>&nbsp;</i>Cart</Nav.Link>
                    <Nav.Link href="/signIn"><i className='fas fa-user'>&nbsp;</i>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header