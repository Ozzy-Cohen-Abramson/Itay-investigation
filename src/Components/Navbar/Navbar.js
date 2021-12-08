import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Brand href='/'>Cohen Investigations</Navbar.Brand>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='my-2 my-lg-0'
            style={{
              maxHeight: "100px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            navbarScroll>
            <Nav.Link href='/english'>English</Nav.Link>
            <NavDropdown title='תחומי עיסוק' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/services#1' className='text-end'>
                חקירות כלכליות
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#2' className='text-end'>
                חקירות אישיות
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#3' className='text-end'>
                איתורים
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#4' className='text-end'>
                בדיקת פוליגרף
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#5' className='text-end'>
                גילוי ובדיקת האזנות סתר
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#6' className='text-end'>
                ליווי ובניית מערך אבטחת מידע
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#7' className='text-end'>
                שירותי קב"ט
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#8' className='text-end'>
                בניית קו הגנה במקרים של הוצאת דיבה ופגיעה במוניטין
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#9' className='text-end'>
                תחרות לא הוגנת וריגול תעשייתי
              </NavDropdown.Item>
              <NavDropdown.Item href='/services#10' className='text-end'>
                התקנת ציוד טכני גלוי / סמוי
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/contact'>צור קשר</Nav.Link>
            <Nav.Link href='/about'>אודות</Nav.Link>
            <Nav.Link href='/'>דף הבית</Nav.Link>
          </Nav>
          <h4>052-786-5145</h4>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
