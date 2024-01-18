import React from 'react'
import "./ShopMini.css"
import {shopData} from '../../data/shopData'
import RightArrow from '../../assets/rightArrow.png'


const ShopMini = () => {
  
  let starArr=[];
  shopData.map((item,i)=>(
      starArr.push(Math.floor(item.rating))
    )
  )

const starPrint=()=>{
  starArr.map((n)=>{
    return(
      <i class="fa-solid fa-star"></i>
    )
  })
}


  return (
    <>
    <div className='ShopMini' id='ShopMini'>
            {/* header */}
            <div className='ShopMini-header'>
              <span className='stroke-text'>EXPLORE OUR</span>
              <span>SHOP</span>
              <span className='stroke-text'>TO SHAPE YOU</span>
            </div>

            <div className='shopLink'>

              <a  href="../Shop/Shop.js" >GoTo Our Shop <img src={RightArrow}/></a>
            </div>

            {/* program cards -- from programData file */}
            <div className='ShopMini-categories'>
              {shopData.map((item,i)=>(
                  <div className='category' key={i}>
                    <img className='productImg' src={item.img} alt="" />
                    <span>{(item.name)?(item.name.slice(0,26)+"..."):null}</span>
                    <span>{(item.discription)?(item.discription.slice(0,150)+"..."):null}</span>
                    <span>
                      {item.rating}
                      
                      {starArr[i]}

                      {starPrint(starArr[i])}
                     
                    </span>
                    <span>{item.price}</span>
                    <div className='check-now'>
                      <span>Check Now</span>
                      <img src={RightArrow}/>
                    </div>
                  </div>
                ))}
            </div>
            
        </div>
    </>

  )
}

export default ShopMini