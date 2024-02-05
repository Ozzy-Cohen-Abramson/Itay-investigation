import React from "react";
import Fade from "react-reveal/Fade";
import ContactForm from "../../ContactForm/ContactForm";

import detective from "../../../img/detective-svgrepo-com.svg";

import "./about.css";

export default function About() {
  const glass =
    "https://firebasestorage.googleapis.com/v0/b/itay-investigation-new.appspot.com/o/headres%2Fglass-min.jpg?alt=media&token=30512176-6398-4e19-a98d-b85d71e91fd0";

  const decipherCases = [
    'שיתוף פעולה עם חוקרים מקצועיים יוצאי משטרה, צה"ל ויחידות מודיעין מובחרות, וכן עם אנשי מחשבים ותקשורת מהשורה הראשונה.',
    "שילוב שיטות חקירה מסורתיות, מורכבות עם טכנולוגיה מתקדמת.",
    ,
    'למשרדנו קשרים רבים ברחבי העולם ואנו עובדים בשיתוף פעולה עם משרדים מובילים בעולם, כגון בהונגריה, רומניה, ארה"ב, בריטניה וקנדה.',
  ];

  return (
    <div className='section-container'>
      <Fade>
        <img className='about-img' src={glass}></img>
      </Fade>
      <a href='#container'>
        <div className='arrow'></div>
      </a>
      <div id='container'></div>
      <Fade bottom>
        <h4 className='second-title'>
          מטרתנו העיקרית - <br />
          לספק ללקוחות מידע, סיוע והגנה תוך שמירה על דיסקרטיות מלאה, יושרה,
          מקצועיות, אמינות ונאמנות!
        </h4>
        <ul className='invest-list'>
          <li>
            <h5 className='list-item'>
              אנו עוסקים מזה עשור בביצוע חקירות כלכליות, חקירות אישות, מודיעין
              עסקי, בדיקות פוליגרף ועוד, לצד מתן ייעוץ, ליווי והדרכה בהתאם
              לצורכי הלקוח. עם לקוחותינו נמנים גופים מסחריים שונים, משרדי עורכי
              דין, רואי חשבון ואנשים פרטיים.
            </h5>
          </li>
        </ul>
      </Fade>
      <Fade bottom>
        <h4 className='second-title'>
          מה מאפשר לנו לפענח מקרים ולבצע משימות עם אחוזי הצלחה מהגבוהים בענף?
        </h4>
        <ul className='invest-list'>
          {decipherCases.map((item, i) => {
            return (
              <li key={i}>
                <h5 className='list-item'> {item} </h5>
              </li>
            );
          })}
        </ul>
      </Fade>
      <Fade bottom>
        <li className='img-detective'>
          <img src={detective} />
        </li>
        <h4 className='second-title'>החוקרים במשרד</h4>
        <ul className='invest-list'>
          <li>
            <h5 className='list-text'>
              צוות איתי חקירות מורכב מאנשי מקצוע ותיקים ומנוסים בתחומם. כגון:
              יוצאי משטרת ישראל, צה"ל ויחידות מודיעין מובחרות; חוקרים פרטיים
              מקצועיים מתחומי הבנקאות והכלכלה; ואנשי מחשבים ותקשורת.
            </h5>
            <br />
          </li>
          <li>
            <h5 className='list-text'>
              במשרד צוות שעוסק בחקירות פרטיות, לצד צוות המתמחה בביצוע חקירות
              בחו"ל – בדגש על אירופה, ארצות הברית ודרום אמריקה. כמו כן, אנו
              מקפידים להיעזר במידת הצורך במומחים וביועצים מהמעלה הראשונה במגוון
              רחב של תחומים.
            </h5>
            <br />
          </li>
        </ul>
      </Fade>
      <Fade bottom>
        <div className='form-title-container'>
          <h3 className='contact-title'>מה תרצו לדעת?</h3>
          <ContactForm />
        </div>
      </Fade>
    </div>
  );
}
