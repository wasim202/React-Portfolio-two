import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

export default function Navigation() {
  return (
  //   <Navbar bg="dark" variant="dark">
  //   <Container>
  //     <Navbar.Brand href="#home">Wasim Mohammad ~ Junior Dev</Navbar.Brand>
  //     <Nav className="me-auto">
  //       <Nav.Link href="home">Home</Nav.Link>
  //       <Nav.Link href="Portfolio">Portfolio</Nav.Link>
  //       <Nav.Link href="ContactMe">Contact Me</Nav.Link>
  //       <Nav.Link href="Resume">Resume</Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>
    //-----------------------------------------------------------------------------
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Wasim Mohammad ~ Junior Dev
      </Link>

      <div className=" navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Portfolio">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactMe">
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
//-----------------------------------------------------------------------------
    // <Navbar bg="dark" variant="dark" sticky="top" expand='lg'>
    //     <Container>
    //       <Navbar.Brand>Wasim Mohammad ~ Junior Dev</Navbar.Brand>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    //      <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className="me-auto">

    //       <Link className="text-dark" to="/">
    //           <Nav.Link href='Home' to='/'>Home</Nav.Link>
    //         </Link>
    //         <Link className="text-dark" to="/Portfolio">
    //           <Nav.Link href='Portfolio'>Portfolio</Nav.Link>
    //         </Link>
    //         <Link className="text-dark" to="/ContactMe">
    //           <Nav.Link href='ContactMe'>ContactMe</Nav.Link>
    //         </Link>
    //         <Link className="text-dark" to="/Resume">
    //           <Nav.Link href='Resume'>Resume</Nav.Link>
    //         </Link>
    //       </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
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
