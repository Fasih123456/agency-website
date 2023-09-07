import "../index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../assets/logo.jpg";
import Logo2 from "../assets/logo2.png";

import React, { useState } from "react";

function Header() {
  const [logoSrc, setLogoSrc] = useState(Logo2);

  const handleNavbarHover = () => {
    setLogoSrc(Logo);
  };

  const handleNavbarLeave = () => {
    setLogoSrc(Logo2);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ zIndex: "1" }}
      onMouseEnter={handleNavbarHover}
      onMouseLeave={handleNavbarLeave}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoSrc}
            id="header-logo"
            width={100}
            style={{ transition: "all 1.75s ease-in-out" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
            <NavDropdown title="Work" id="collasible-nav-dropdown" className="nav-drop-down">
              <NavDropdown.Item href="#service1">Cases</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Portfolio</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Industries" id="collasible-nav-dropdown" className="nav-drop-down">
              <NavDropdown.Item href="#service1">Saas</NavDropdown.Item>
              <NavDropdown.Item href="#service2">eCommerce</NavDropdown.Item>
              <NavDropdown.Item href="#service3">PR & Outreach</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Startup</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Small Business</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Esports</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Mobile</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown" className="nav-drop-down">
              <NavDropdown.Item href="#service1">Social Media</NavDropdown.Item>
              <NavDropdown.Item href="#service2">SEO</NavDropdown.Item>
              <NavDropdown.Item href="#service3">PR & Outreach</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Video Production</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Video Marketing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="collasible-nav-dropdown" className="nav-drop-down">
              <NavDropdown.Item href="#service1">Why Us</NavDropdown.Item>
              <NavDropdown.Item href="#service2">About</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
