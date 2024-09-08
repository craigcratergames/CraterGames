import React from 'react';
import { Container, Navbar, } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mt-auto">
      <Container fluid>
        <Navbar.Brand className="ms-0">
          &copy; {currentYear} Crater Games
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
