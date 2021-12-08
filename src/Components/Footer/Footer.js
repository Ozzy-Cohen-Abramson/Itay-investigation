import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form } from "react-bootstrap";
import "./footer.css";

const FooterPage = () => {
  return (
    <MDBFooter className='pt-4 mt-4 footer'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='3' className='footer-collumn'>
            <h3 className='title'>צור קשר</h3>
            <Form>
              <Form.Group
                className='mb-3 form-text'
                controlId='exampleForm.ControlInput1'>
                <Form.Control type='text' placeholder='שם מלא' />
              </Form.Group>
              <Form.Group
                className='mb-3 form-text'
                controlId='exampleForm.ControlInput1'>
                <Form.Control type='email' placeholder='דוא"ל' />
              </Form.Group>
              <Form.Group
                className='mb-3 form-text'
                controlId='exampleForm.ControlInput1'>
                <Form.Control type='text' placeholder='טלפון' />
              </Form.Group>
              <Form.Group
                className='mb-3 form-text'
                controlId='exampleForm.ControlTextarea1'>
                <Form.Control as='textarea' rows={3} placeholder='הערות' />
              </Form.Group>
            </Form>
          </MDBCol>

          <MDBCol md='3' className='footer-collumn'>
            <h3 className='title'>מיקומנו</h3>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.2790430759437!2d48.06101978490139!3d29.332816882146876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d93c5b816b1%3A0x53be187ef044034f!2sSalmiya%20Indian%20SALOON.%20JISAN!5e0!3m2!1siw!2sil!4v1638962537605!5m2!1siw!2sil'
              width='300'
              height='300'
              loading='lazy'></iframe>
          </MDBCol>
          <MDBCol md='3' className='footer-collumn'>
            <h3 className='title'>פרטים נוספים</h3>
            <ul className='footer-list'>
              <li>טלפון: 052-786-5145</li>
            </ul>
            <h4 className='small-title'>שעות פעילות</h4>
            <ul className='footer-list'>
              <li>שבעה ימים בשבוע 24 שעות ביממה</li>
            </ul>
          </MDBCol>
          <MDBCol md='3' className='footer-collumn'>
            <h3 className='title '>מפת האתר</h3>
            <ul className='footer-list'>
              <li>
                <a href='/'>דף הבית</a>
              </li>
              <li className='list-unstyled'>
                <a href='/about'>אודות</a>
              </li>
              <li className='list-unstyled'>
                <a href='/services'>תחומי עיסוק</a>
              </li>
              <li className='list-unstyled'>
                <a href='/contact'>צרו קשר</a>
              </li>
            </ul>
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
