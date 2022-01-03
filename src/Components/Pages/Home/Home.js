import React from "react";
import HomeImgGrid from "../../HomeImgGrid/HomeImgGrid";
import pin from "../../../img/pin.png";
import Fade from "react-reveal/Fade";

import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

export default function Home() {
  return (
    <div className='section-container'>
      <div className='header'>
        <img src={pin}></img>
      </div>
      <a href='#container'>
        <div class='arrow'></div>
      </a>
      <div id='container'></div>

      <Fade bottom>
        <h3 className='section-title'>
          מידע וחקירות – אחוזי הצלחה מהגבוהים בענף
        </h3>
      </Fade>
      <div className='side-by-side'>
        <Fade bottom>
          <h4 className='second-title'> איתי כהן </h4>
          <p className='section-text'>
            &quot;איתי חקירות&quot; הינו משרד מוביל בתחומו, אשר במהלך השנים צבר
            מומחיות רבה בכל תחומי החקירות.
            <br />
            <br /> המשרד בניהולו של איתי כהן, חוקר פרטי וחבר בלשכת החוקרים
            הפרטיים בישראל. <br />
            <br />
            כל אחד מהחוקרים במשרד, מקצוען בתחומו, בעל רישיון לעסוק בחקירות מטעם
            משרד המשפטים ומחויב לדיסקרטיות מלאה כלפי הלקוח, תיק החקירה והמשרד.
            <br />
            המשרד משתף פעולה במידת הצורך עם חוקרים מקצועיים יוצאי משטרה,
            צה&quot;ל ויחידות מודיעין מובחרות, וכן עם אנשי מחשבים ותקשורת מהשורה
            הראשונה.
          </p>
        </Fade>
        {/* <Fade bottom>
          <h4 className='second-title'> מי אני </h4>
          <p className='section-text'>פסקה קצרה על העבר שלך כחוקר</p>
        </Fade> */}
      </div>

      {/* <Fade bottom>
        <h3 className='section-title'>אודותינו</h3>
      </Fade>
      <Fade bottom>
        <div className='text-and-image'>
          <p className='section-text'>
            מידע וחקירות הוא משרד לחקירות פרטיות, הפועל זה למעלה מ-35 שנה
            ברישיון משרד המשפטים ומשמש כחבר באיגוד הישראלי למשרדי חקירות פרטיות
            וארגוני חקירות בחו"ל. אנחנו מאמינים כי הדבר החשוב ביותר ללקוח הוא
            האינפורמציה המדויקת, ולכן אנו מספקים ללקוחותינו קו הגנה ראשוני ומידע
            חיוני. במטרה להגיע לפתרון הטוב ביותר במהירות וביעילות, עומדים
            לרשותנו: שיטות חקירה מקובלות, טכנולוגיות מתקדמות וקשרים שוטפים עם
            אנשי מפתח בארץ ובעולם.
          </p>
        </div>
      </Fade> */}
      <HomeImgGrid />
    </div>
  );
}
