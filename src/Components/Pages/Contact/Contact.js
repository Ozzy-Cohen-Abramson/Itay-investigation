import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import Fade from "react-reveal/Fade";
import { SocialIcon } from "react-social-icons";

import email from "../../../img/contact/email-svgrepo-com.svg";
import phone from "../../../img/contact/phone-svgrepo-com.svg";

import "./contact.css";

export default function Contact() {
  const tech =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/headres%2Ftech-min.jpg?alt=media&token=3dcea81f-5c24-4d49-8b2e-5b497a4862a8";

  const contactArr = [
    "לקבלת ייעוץ ראשוני מידי ודיסקרטי ללא עלות, התקשרו לנייד בכל שעה: 053-7865001.",
    'דוא"ל: office@cohenin.com   ',
  ];

  return (
    <div className='contact-container section-container'>
      <Fade bottom>
        <img className='about-img' src={tech}></img>
      </Fade>
      <a href='#container'>
        <div className='arrow'></div>
      </a>
      <div id='container'></div>
      <Fade bottom>
        <h4 className='second-title'>פרטי התקשרות</h4>
        <ul className='invest-list'>
          {contactArr.map((item, i) => {
            return (
              <li key={i}>
                <h5 className='list-item'> {item} </h5>
              </li>
            );
          })}
        </ul>
      </Fade>
      <Fade bottom>
        <h4 className='second-title'>שעות פעילות</h4>
        <ul className='invest-list'>
          <li>
            <h5 className='list-item'>שבעה ימים בשבוע 24 שעות ביממה. </h5>
          </li>
        </ul>
      </Fade>
      <Fade bottom>
        <h4 className='second-title'>אפשר ליצור קשר גם דרך:</h4>
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
      </Fade>
      <Fade bottom>
        <div className='form-title-container'>
          <h3 className='contact-title'>מה תרצו לדעת?</h3>
          <ContactForm />
        </div>
      </Fade>
    </div>
  );
}
