import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Wasim Mohammad ~ Junior Dev</Navbar.Brand>
          <Nav className="me-auto">
          <Link className="text-dark" to="/">
              <Nav.Link href='Home'>Home</Nav.Link>
            </Link>
            <Link className="text-dark" to="/Portfolio">
              <Nav.Link href='Portfolio'>Portfolio</Nav.Link>
            </Link>
            <Link className="text-dark" to="/ContactMe">
              <Nav.Link href='ContactMe'>ContactMe</Nav.Link>
            </Link>
            <Link className="text-dark" to="/Resume">
              <Nav.Link href='Resume'>Resume</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    // <ul>
    //     <li>
    //         <Link to='/'>
    //             Home
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='/aboutme'>
    //           AboutMe
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='/contact'>
    //            contact
    //         </Link>
    //     </li>
    // </ul>
  )
}
