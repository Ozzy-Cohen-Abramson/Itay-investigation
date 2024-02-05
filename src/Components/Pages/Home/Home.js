import React from "react";
import HomeImgGrid from "../../HomeImgGrid/HomeImgGrid";
import mainImg from "../../../img/headers/homeHeader.jpg";
import detectiveGroup from "../../../img/detectiveGroup.png";
import ContactForm from "../../ContactForm/ContactForm";

import Fade from "react-reveal/Fade";

import "./home.css";

export default function Home() {
  return (
    <div className='section-container'>
      <Fade cascade>
        <div className='header'>
          <img src={mainImg}></img>
        </div>
        {/* <div className='logo-main-container'>
          <img src={logo} />
        </div> */}
      </Fade>
      <a href='#container'>
        <div className='arrow'></div>
      </a>
      <div id='container'></div>

      <Fade bottom>
        <h3 className='section-title'>קצת עלינו - איתי כהן, משרד חקירות</h3>
      </Fade>
      <div className='side-by-side'>
        <Fade bottom>
          {/* <h4 className='second-title'> איתי כהן </h4> */}
          <p className='section-text'>
            "איתי כהן, משרד חקירות" הינו משרד מוביל בתחומו, אשר במהלך השנים צבר
            מומחיות רבה בכל תחומי החקירות.
            <br />
            <br /> המשרד בניהולו של איתי כהן, חוקר פרטי וחבר בלשכת החוקרים
            הפרטיים בישראל. <br />
            <br />
            כל אחד מהחוקרים במשרד, מקצוען בתחומו, בעל רישיון לעסוק בחקירות מטעם
            משרד המשפטים ומחויב לדיסקרטיות מלאה כלפי הלקוח, תיק החקירה והמשרד.
            <br />
            כל אחד מהחוקרים המועסקים במשרד וכן פרילנסרים המועסקים על ידי המשרד,
            מקצוען בתחומו, בעל רישיון לעסוק בחקירות מטעם משרד המשפטים ומחויב
            לדיסקרטיות מלאה כלפי המשרד, תיק החקירה וכמובן ללקוח.
          </p>
        </Fade>
        <Fade bottom>
          <div className='group-img'>
            {/* <h4 className='second-title'> מי אני </h4>
          <p className='section-text'>פסקה קצרה על העבר שלך כחוקר</p> */}
            <img src={detectiveGroup} />
          </div>
        </Fade>
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
      <Fade bottom>
        <div className='form-title-container'>
          <h3 className='contact-title'>מה תרצו לדעת?</h3>
          <ContactForm />
        </div>
      </Fade>
    </div>
  );
}
