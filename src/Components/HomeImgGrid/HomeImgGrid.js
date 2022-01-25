import React from "react";
import "./homeImgGrid.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// images
// import cameras from "../../img/home-grid/cameras.webp";
// import glass from "../../img/home-grid/glass.webp";
// import suit from "../../img/home-grid/suit.webp";
// import tech from "../../img/home-grid/tech.webp";
// import towers from "../../img/home-grid/towers.webp";

export default function HomeImgGrid() {
  const cameras =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/homeGrid%2Fcameras.webp?alt=media&token=f8d853a7-9bc6-418c-9cac-119fcd43d754";
  const glass =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/homeGrid%2Fglass.webp?alt=media&token=03d5e7f1-1743-4576-a6dc-0220a5e09d83";
  const suit =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/homeGrid%2Fsuit.webp?alt=media&token=d5634dfb-2fe1-4369-97d5-ae7f50fef2b2";
  const tech =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/homeGrid%2Ftech.webp?alt=media&token=cd8a9710-56a6-49d8-b484-aec3631b941f";
  const towers =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/homeGrid%2Ftowers.webp?alt=media&token=569643fb-4360-4bba-8d2c-c41dd13c500e";

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
            {/* <h4 className='grid-title'> הלקוח </h4> */}
            <p className='grid-text'>
              לקוחות המשרד מקבלים שירות מקצועי, דיסקרטי ויחס אישי סביב לשעון.
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
            {/* <h4 className='grid-title'> שטח פעילות </h4> */}
            <p className='grid-text'>
              אנו ערוכים ועובדים בפריסה ארצית ליציאה מהירה לפעילות בכל הארץ וגם
              לפעילות בחו"ל.
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
            {/* <h4 className='grid-title'> שירות </h4> */}
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
            {/* <h4 className='grid-title'> החוקרים </h4> */}
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
