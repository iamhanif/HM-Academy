import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SideNave from '../SideNav/SideNave';

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">MH Academy </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Our Courses</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">About us</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNave />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;