import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import Fade from "react-reveal/Fade";

import "./contact.css";

export default function Contact() {
  const contactArr = [
    "לקבלת ייעוץ מידי ודיסקרטי, התקשרו למשרד בכל שעה: 053-7865001.",
    'דוא"ל: Itay@cohenin.com',
  ];

  return (
    <div className='contact-container section-container'>
      <Fade bottom>
        <h4 className='second-title'>פרטי התקשרות</h4>
        <ul className='invest-list'>
          {contactArr.map((item) => {
            return (
              <li>
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
        <div className='form-title-container'>
          <h3 className='contact-title'>מה תרצו לדעת?</h3>
          <ContactForm />
        </div>
      </Fade>
    </div>
  );
}
