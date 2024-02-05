import React from "react";
import { SocialIcon } from "react-social-icons";
import phoneIcon from "../../img/phone-icon.svg";

import "./social.css";

export default function Social() {
  return (
    <div className='social'>
      <a id='phone-button' href='tel:0723975711'>
        <img src={phoneIcon} />
      </a>
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
  );
}
