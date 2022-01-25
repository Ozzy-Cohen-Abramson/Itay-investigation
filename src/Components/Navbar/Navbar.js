import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../img/logo.svg";
import "./navbar.css";

export default function NavbarComponent() {
  const toggleNav = useRef();

  const closeNav = () => {
    toggleNav.current.checked = false;
  };

  return (
    <>
      <div className='header header-fixed'>
        <div className='navbar container'>
          <div className='logo'>
            <Navbar.Brand to='/' as={Link}>
              <img className='nav-logo' src={Logo}></img>
            </Navbar.Brand>
          </div>
          <input type='checkbox' id='navbar-toggle' ref={toggleNav} />
          <label htmlFor='navbar-toggle'>
            <i></i>
          </label>
          <nav className='menu'>
            <ul className='nav-links'>
              <li onClick={closeNav}>
                <Nav.Link to='/' as={Link}>
                  דף הבית
                </Nav.Link>
              </li>
              <li onClick={closeNav}>
                <Nav.Link to='/services' as={Link}>
                  תחומי עיסוק
                </Nav.Link>
              </li>
              <li onClick={closeNav}>
                <Nav.Link to='/about' as={Link}>
                  אודות
                </Nav.Link>
              </li>
              <li onClick={closeNav}>
                <Nav.Link to='/contact' as={Link}>
                  צרו קשר
                </Nav.Link>
              </li>

              <li onClick={closeNav}>
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
