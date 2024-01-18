import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <>
        <div className='programs' id='programs'>
            {/* header */}
            <div className='programs-header'>
              <span className='stroke-text'>EXPLORE OUR</span>
              <span>PROGRAMS</span>
              <span className='stroke-text'>TO SHAPE YOU</span>
            </div>

            {/* program cards -- from programData file */}
            <div className='program-categories'>
              {programsData.map((program,i)=>(
                  <div className='category' key={i}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                      <span>Join Now</span>
                      <img src={RightArrow}/>
                    </div>
                  </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default Programs