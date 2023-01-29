import React from "react";
import { Fade } from "react-reveal";

// import towers from "../../../img/headers/towers.webp";

export default function English() {
  const towers =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/headres%2Ftowers-min.jpg?alt=media&token=b4bcb331-2c9b-40b0-941a-96bd362e1dd7";

  return (
    <div className='section-container'>
      <Fade>
        <img className='about-img' src={towers}></img>
      </Fade>
      <a href='#container'>
        <div className='arrow'></div>
      </a>
      <div id='container'>This part is still under construction</div>
    </div>
  );
}
