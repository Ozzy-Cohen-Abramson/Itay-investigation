import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

export default function NavbarComponent() {
  return (
    <>
      <div className='header header-fixed'>
        <div className='navbar container'>
          <div className='logo'>
            <Navbar.Brand href='/'>Cohen</Navbar.Brand>
          </div>
          <input type='checkbox' id='navbar-toggle' />
          <label for='navbar-toggle'>
            <i></i>
          </label>
          <nav className='menu'>
            <ul>
              <li>
                <Nav.Link href='/'>דף הבית</Nav.Link>
              </li>
              <li>
                <Nav.Link href='/about'>אודות</Nav.Link>
              </li>
              <li>
                <Nav.Link href='/services'>תחומי עיסוק</Nav.Link>
              </li>
              <li>
                <Nav.Link href='/english'>English</Nav.Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
