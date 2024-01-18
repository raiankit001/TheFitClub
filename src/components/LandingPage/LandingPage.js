import React from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import ModelImg from "../../assets/hero_image.png";
import ModelImgBack from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'

const LandingPage = () => {
  return (
    <>
      <div className="landingPage" id="landingPage">
        <div className="blur landing-blur"></div>
        <div className="left-LandingPage">
          <Header />

          {/* The best ad */}
          <div className="the-best-ad">
            <span></span>
            <div>THE BEST FITNESS CLUB IN THE TOWN</div>
          </div>

          {/* LandingPage Heading */}
          <div className="LandinPage-heading">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>

            <div>
              <span>Ideal Body </span>
            </div>

            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>

          {/* reach */}
          <div className="reaches">
            <div>
              <span>
                <NumberCounter start={100} end={140} preFix="+" delay="4"/>
              </span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>
              <NumberCounter start={850} end={965} preFix="+" delay="6"/>

              </span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>
              <NumberCounter start={40} end={50} preFix="+" delay="2"/>
                
              </span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>

          {/* LandingPage Buttons */}
          <div className="landingPage-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-LandingPage">
          <button className="btn">Join Now</button>

          <div className="heart-rate">
            <img src={Heart} />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

          <img src={ModelImg} className="model-img" />
          <img src={ModelImgBack} className="model-img-back" />

          <div className="calories">
            <img src={Calories} />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
