import React, { useRef, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

import { SocialIcon } from "react-social-icons";

import "./footer.css";

const FooterPage = (props) => {
  const footerRef = useRef(null);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      // console.log(document.body.offsetHeight);
      // console.log(footerRef.current.clientHeight);
      // console.log(document.body.scrollHeight);
      props.setSocialVisible(false);
    } else {
      props.setSocialVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // console.log(props.setSocialVisible());
  }, []);

  return (
    <div ref={footerRef}>
      <MDBFooter className='pt-4 footer'>
        <MDBContainer fluid className='text-center text-md-left'>
          <MDBRow>
            <MDBCol md='3' className='footer-collumn'>
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
            <MDBCol md='3' className='footer-collumn'>
              <h3 className='title'>פרטים נוספים</h3>
              <ul className='footer-list'>
                <li>טלפון: 053-7865001</li>
                <li>מייל: office@cohenin.com</li>
                <li>כתובת: האומן 10, חדרה</li>
              </ul>
              <h4 className='small-title'>שעות פעילות</h4>
              <ul className='footer-list'>
                <li>שבעה ימים בשבוע 24 שעות ביממה.</li>
              </ul>
              <div className='contact-social'>
                <SocialIcon
                  url='https://www.facebook.com/Coheninv'
                  target='_blank'
                  fgColor='white'
                />
                <SocialIcon
                  url='https://www.instagram.com/cohen.in/'
                  target='_blank'
                  fgColor='white'
                />
                <SocialIcon
                  network='whatsapp'
                  url='https://wa.me/972537865001'
                  target='_blank'
                  fgColor='white'
                />
              </div>
            </MDBCol>{" "}
            <MDBCol md='3' className='footer-collumn'>
              <h3 className='title'>מיקומנו</h3>

              <iframe
                className='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.7306997254888!2d34.91287220700689!3d32.44800113400547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d125dfef4c86b%3A0xf1222ee1af5edcbb!2sHaUman%20St%2010%2C%20Hadera%2C%20Israel!5e0!3m2!1sen!2snl!4v1651427864325!5m2!1sen!2snl'
                width='300'
                height='300'
                loading='lazy'></iframe>
            </MDBCol>
            <MDBCol md='3' className='footer-collumn'>
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
    </div>
  );
};

export default FooterPage;
