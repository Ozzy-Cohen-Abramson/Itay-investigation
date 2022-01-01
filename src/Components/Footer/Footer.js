import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

import { Form } from "react-bootstrap";
import "./footer.css";

const FooterPage = () => {
  return (
    <MDBFooter className='pt-4 footer'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='4' className='footer-collumn'>
            <h3 className='title '>מפת האתר</h3>
            <ul className='footer-list'>
              <li>
                <a as={Link} href='/'>
                  דף הבית
                </a>
              </li>
              <li className='list-unstyled'>
                <a as={Link} href='/about'>
                  אודות
                </a>
              </li>
              <li className='list-unstyled'>
                <a as={Link} href='/services'>
                  תחומי עיסוק
                </a>
              </li>
              <li className='list-unstyled'>
                <a as={Link} href='/contact'>
                  צרו קשר
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='4' className='footer-collumn'>
            <h3 className='title'>פרטים נוספים</h3>
            <ul className='footer-list'>
              <li>טלפון: 053-7865001</li>
            </ul>
            <h4 className='small-title'>שעות פעילות</h4>
            <ul className='footer-list'>
              <li>שבעה ימים בשבוע 24 שעות ביממה.</li>
            </ul>
          </MDBCol>{" "}
          <MDBCol md='4' className='footer-collumn'>
            <h3 className='title'>צור קשר</h3>
            <ContactForm />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            href='https://ozzy-cohen-abramson.github.io/porfolio/'
            target='_blank'>
            Oz Cohen Abramson
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
