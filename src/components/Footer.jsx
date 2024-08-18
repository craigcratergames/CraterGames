import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mt-auto">
      <Container fluid>
        <Navbar.Brand className="ms-0">
          &copy; {currentYear} Crater Games
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="https://twitter.com" target="_blank"><FaTwitter /></Nav.Link>
          <Nav.Link href="https://facebook.com" target="_blank"><FaFacebook /></Nav.Link>
          <Nav.Link href="https://instagram.com" target="_blank"><FaInstagram /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
