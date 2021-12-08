import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, setHour] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const [btnDis, setBtnDis] = useState(false);

  const handleCheck = () => {
    if (name && email && phone.length == 10 && hour && text) {
      setBtnDis(true);
    } else {
      setBtnDis(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(hour);
    // console.log(text);
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='text'
            placeholder='שם מלא'
            onChange={(e) => {
              handleCheck();
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='email'
            placeholder='דוא"ל'
            onChange={(e) => {
              handleCheck();
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='text'
            placeholder='טלפון'
            onChange={(e) => {
              handleCheck();
              setPhone(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label='Default select example'
          className='mb-3 form-text'
          onChange={(e) => {
            handleCheck();
            setHour(e.target.value);
          }}>
          <option value='0'>שעת חזרה</option>
          <option value='9:00 - 12:00'>9:00 - 12:00</option>
          <option value='12:00 - 14:00'>12:00 - 14:00</option>
          <option value='14:00 - 17:00'>14:00 - 17:00</option>
          <option value='17:00 - 20:00'>17:00 - 20:00</option>
          {/* <option value='4'>15:00 - 17:00</option> */}
        </Form.Select>
        <Form.Group
          className='mb-3 form-text'
          controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='הערות'
            onChange={(e) => {
              handleCheck();
              setText(e.target.value);
            }}
          />
        </Form.Group>
        <Button disabled={!btnDis} type='submit'>
          שליחה
        </Button>
      </Form>
      {message && (
        <div className='message-to-user'>
          קיבלנו את ההודעה! נחזור אליך בהקדם
        </div>
      )}
    </>
  );
}
