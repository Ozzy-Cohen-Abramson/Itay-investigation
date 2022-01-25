import React from "react";
import { SocialIcon } from "react-social-icons";

import "./social.css";

export default function Social() {
  return (
    <div className='social'>
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
