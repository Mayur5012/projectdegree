import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzieh0m",
        "template_5k0xgqj",
        form.current,
        "q-N7J31rwe3JmZD0J"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span> 
          <span style={{fontSize:"1rem"}}>&#128231; connect@projectdegree.in</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} netlify>
          <input type="text" name="from_name" className="user"  placeholder="Name"/>
          <input type="email" name="from_email" className="user" placeholder="Email"/>
          <textarea cols={4} name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button" id="contactbutton"/>
          <span>{done && "Thanks for contacting us!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
