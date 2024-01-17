import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3hoy62h",
        "template_949lpzd",
        e.target,
        "user_7QScxtplHbHBVPI4rrHHj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact">
      <form onSubmit={sendMail}>
        <div className="inputs">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            id=""
            cols="30"
            rows="8"
            name="message"
            placeholder="Write the message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Contact;
