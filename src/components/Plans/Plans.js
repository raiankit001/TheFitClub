import React from "react";
import "./Plans.css";
// import "../Programs/Programs.css";
import "../LandingPage/LandingPage.css";
import WhiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import RightArrow from "../../assets/rightArrow.png";

const Plans = () => {
  return (
    <>
      <div className="plans-container" id="plans">

        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>

        <div className="programs-header" style={{ gap: "2rem" }}>
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITHUS</span>
        </div>

        {/* plans card */}
        <div className="plans">
          {plansData.map((plans, i) => (
            <div className="plan" key={i}>
              {plans.icon}
              <span>{plans.name}</span>
              <span>$ {plans.price}</span>

              <div className="features">

                {plans.features.map((feature, i) => (
                  <div className="feature">
                    <img src={WhiteTick} />
                    <span key={i}>{feature}</span>
                  </div>
                ))}

                <div className="see-more">
                  <span>See more benefits</span>
                  <img src={RightArrow} />
                </div>

                <div className="btn">Join now</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plans;
