import React from "react";
import "./homeContact.css";
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../../img/logo.svg";

export default function HomeContact() {
  return (
    <div className='homeContact'>
      <img id='nav-logo' src={Logo}></img>

      <h3> צרו קשר עוד היום!</h3>
      <ContactForm />
    </div>
  );
}
