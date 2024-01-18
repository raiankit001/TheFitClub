import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkdIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>

        <hr />

        <div className="footer">

          <div className="social-links">
            <a href="https://github.com/raiankit001" target="_blank"><img src={github}  /></a>
            <a href="https://www.instagram.com/raiankit001/" target="_blank"><img src={instagram}  /></a>
            <a href="https://www.linkedin.com/in/raiankit001/" target="_blank"><img src={linkdIn}  /></a>
          </div>

          <img src={logo} />
         
        </div>
        
        

      </div>
    </>
  );
};

export default Footer;
