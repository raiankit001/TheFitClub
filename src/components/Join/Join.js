import React,{useRef, useState} from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()


    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('raiankit001', 'raiankit001', form.current, 'yag-nKifsMr3Zvc35')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="join">

        
        <div className="left-join">
          <hr />
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US?</span>
          </div>
        </div>


        <div className="right-join">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email"  name="user_email" placeholder="Enter your Email Address here..." />
                <button className="btn" >Join now</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Join;
