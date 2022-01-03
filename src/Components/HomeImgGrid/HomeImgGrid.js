import React from "react";
import "./homeImgGrid.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// images
import cameras from "../../img/home-grid/cameras.webp";
import glass from "../../img/home-grid/glass.webp";
import suit from "../../img/home-grid/suit.webp";
import tech from "../../img/home-grid/tech.webp";
import towers from "../../img/home-grid/towers.webp";

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
            <h4 className='grid-title'> הלקוח </h4>
            <p className='grid-text'>
              לקוחות המשרד מקבלים שירות מקצועי ויחס אישי סביב לשעון.
            </p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={cameras}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> שטח פעילות </h4>
            <p className='grid-text'>
              אנו ערוכים בפריסה ארצית ליציאה מהירה לפעילות בכל הארץ וגם לפעילות
              בחו&quot;ל.
            </p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={towers}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> שירות </h4>
            <p className='grid-text'>
              עם לקוחותינו נמנים גופים מסחריים שונים, חברות מובילות בתחומן,
              משרדי עורכי דין, רואי חשבון ולקוחות פרטיים.
            </p>
          </div>
        </Fade>
        <Zoom>
          <div className='box'>
            <img className='grid-img' src={tech}></img>
          </div>
        </Zoom>
        <Fade>
          <div className='box-text'>
            <h4 className='grid-title'> החוקרים </h4>
            <p className='grid-text'>
              שירותינו ניתן על ידי צוות חוקרים מיומן בעל כישורים במגוון תחומי
              פעולה.
            </p>
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
