import React from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../img/logo.svg";
import "./navbar.css";

export default function NavbarComponent() {
  return (
    <>
      <div className='header header-fixed'>
        <div className='navbar container'>
          <div className='logo'>
            <Navbar.Brand to='/' as={Link}>
              <img className='nav-logo' src={Logo}></img>
            </Navbar.Brand>
          </div>
          <input type='checkbox' id='navbar-toggle' />
          <label for='navbar-toggle'>
            <i></i>
          </label>
          <nav className='menu'>
            <ul>
              <li>
                <Nav.Link to='/' as={Link}>
                  דף הבית
                </Nav.Link>
              </li>
              <li>
                <Nav.Link to='/about' as={Link}>
                  אודות
                </Nav.Link>
              </li>
              <li>
                <Nav.Link to='/services' as={Link}>
                  תחומי עיסוק
                </Nav.Link>
              </li>
              <li>
                <Nav.Link to='/english' as={Link}>
                  English
                </Nav.Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
