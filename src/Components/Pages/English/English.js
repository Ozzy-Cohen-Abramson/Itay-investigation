import React from "react";
import { Fade } from "react-reveal";

import towers from "../../../img/headers/towers.webp";

export default function English() {
  return (
    <div className='section-container'>
      <Fade bottom>
        <img className='about-img' src={towers}></img>
      </Fade>
      <a href='#container'>
        <div class='arrow'></div>
      </a>
      <div id='container'></div>
      English
    </div>
  );
}
