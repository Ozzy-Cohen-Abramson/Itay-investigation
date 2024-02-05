import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";

import emailjs from "emailjs-com";

import "../ContactModal/contactModal.css";

export default function ContactForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, setHour] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const [btnDis, setBtnDis] = useState(false);

  const handleCheck = () => {
    const formName = form.current[0].value;
    const formEmail = form.current[1].value;
    const formPhone = form.current[2].value;
    if (formName && formEmail && formPhone.length == 10) {
      setBtnDis(true);
    } else {
      setBtnDis(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text == "OK") {
            setMessage(true);
            alert("תודה! נחזור אליכם בהקדם");
            setTimeout(() => {
              setMessage(false);
            }, 3000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} ref={form}>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='text'
            name='name'
            placeholder='שם מלא'
            onChange={(e) => {
              setName(e.target.value);
              handleCheck();
            }}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='email'
            name='email'
            placeholder='דוא"ל'
            onChange={(e) => {
              setEmail(e.target.value);
              handleCheck();
            }}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='text'
            placeholder='טלפון'
            name='phone'
            onChange={(e) => {
              setPhone(e.target.value);
              handleCheck();
            }}
          />
        </Form.Group>
        {/* <Form.Select
          aria-label='Default select example'
          className='mb-3 form-text'
          name='hour'
          onChange={(e) => {
            handleCheck();
            setHour(e.target.value);
          }}>
          <option value='0'>שעת חזרה</option>
          <option value='9:00 - 12:00'>9:00 - 12:00</option>
          <option value='12:00 - 14:00'>12:00 - 14:00</option>
          <option value='14:00 - 17:00'>14:00 - 17:00</option>
          <option value='17:00 - 20:00'>17:00 - 20:00</option>
        </Form.Select>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='הערות'
            name='text'
            onChange={(e) => {
              handleCheck();
              setText(e.target.value);
            }}
          />
        </Form.Group> */}
        <div className=' btn-container'>
          <Button disabled={!btnDis} type='submit' className='submit-btn'>
            שליחה
          </Button>
        </div>
      </Form>
      {message && (
        <div className='message-to-user'>
          קיבלנו את ההודעה! נחזור אליך בהקדם
        </div>
      )}
    </>
  );
}
