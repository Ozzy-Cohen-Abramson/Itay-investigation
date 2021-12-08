import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./contactModal.css";

export default function ContactModal() {
  return (
    <div>
      <a href='#popup1' className='popup-btn'>
        צור קשר
      </a>
      <div id='popup1' className='popup'>
        <a href='#' className='close'>
          &times;
        </a>
        <h2>צור קשר</h2>
        <ContactForm />
      </div>
      <a href='#' className='close-popup'></a>
    </div>
  );
}
