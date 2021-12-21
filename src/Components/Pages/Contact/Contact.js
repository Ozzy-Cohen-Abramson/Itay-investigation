import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import "./contact.css";

export default function Contact() {
  return (
    <div className='contact-container section-container'>
      <h3 className='contact-title'>?מה תרצו לדעת</h3>
      <ContactForm />
    </div>
  );
}
