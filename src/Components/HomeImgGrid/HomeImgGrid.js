import React from "react";
import "./homeImgGrid.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// images
import cameras from "../../img/home-grid/cameras.jpg";
import glass from "../../img/home-grid/glass.jpg";
import suit from "../../img/home-grid/suit.jpg";
import tech from "../../img/home-grid/tech.jpg";
import towers from "../../img/home-grid/towers.jpg";

export default function HomeImgGrid() {
  return (
    <div className='img-grid-container'>
      <div className='game-board'>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={suit}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> מי אני </h4>
            <p className='grid-text'>פסקה קצרה על העבר שלך כחוקר</p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={cameras}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> מי אני </h4>
            <p className='grid-text'>פסקה קצרה על העבר שלך כחוקר</p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={towers}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> מי אני </h4>
            <p className='grid-text'>פסקה קצרה על העבר שלך כחוקר</p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={tech}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> מי אני </h4>
            <p className='grid-text'>פסקה קצרה על העבר שלך כחוקר</p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={glass}></img>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
