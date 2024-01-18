import React, { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const nextT = () => {
    if(selected===tLength-1){
      setSelected(0)
    }
    else{
      setSelected((prev)=> prev+1)
    }
  }

  const prevT = () =>{
    if(selected===0){
      setSelected(tLength-1)
    }else{
      setSelected(prev=>prev-1)
    }
  }


  return (
    <>
      <div className="testimonials" id="testimonials">
        <div className="testimonials-left">
          <span>TESTIMONIALS</span>
          <span className="stroke-text">WHAT THEY</span>
          <span>SAY ABOUT US</span>
          <span>{testimonialsData[selected].review}</span>
          <span>
            <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>
            <span> - {testimonialsData[selected].status}</span>
          </span>
        </div>

        <div className="testimonials-right">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} />
            <div className="arrows">
              <img onClick={prevT} src={leftArrow} />
              <img onClick={nextT} src={rightArrow} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
