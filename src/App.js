import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Practice from "./Components/Pages/Practice/Practice";
import English from "./Components/Pages/English/English";
import FooterPage from "./Components/Footer/Footer";
import ContactModal from "./Components/ContactModal/ContactModal";
import Social from "./Components/Social/Social";

import ScrollToTop from "react-scroll-to-top";

// https://www.tiram.co.il/contactus
// https://wyinv.com/contact/

import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import "./App.css";
import "./scrollArrow.css";

function App() {
  const { pathname } = useLocation();

  const [socialVisible, setSocialVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const { inViewport, enterCount, leaveCount } = useInViewport(footerRef);

  useEffect(() => {
    // console.log(document.body.scrollHeight);
  });

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
      {socialVisible && <Social />}
      <FooterPage setSocialVisible={setSocialVisible} />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
