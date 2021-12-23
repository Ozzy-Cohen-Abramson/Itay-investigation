import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Practice from "./Components/Pages/Practice/Practice";
import English from "./Components/Pages/English/English";
import FooterPage from "./Components/Footer/Footer";
import ContactModal from "./Components/ContactModal/ContactModal";

// import { Switch } from "react-router";

// https://www.tiram.co.il/contactus
// https://wyinv.com/contact/

import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import "./App.css";

function App() {
  return (
    <div className='App' dir='rtl'>
      <NavbarComponent />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Practice />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/english' element={<English />} />
      </Routes>
      <ContactModal />
      <FooterPage />
    </div>
  );
}

export default App;
