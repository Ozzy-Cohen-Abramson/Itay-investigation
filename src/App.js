import React from "react";
import NavbarComponent from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Practice from "./Components/Pages/Practice/Practice";
import English from "./Components/Pages/English/English";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
// import { Switch } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Practice />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/english' element={<English />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
