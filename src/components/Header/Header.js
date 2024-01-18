import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);



  return (
    <>
      <div className="Header">
        <img className="logo" src={Logo} />

        {menuOpened === false && mobile === true ? (
          <div 
              onClick={()=>{setMenuOpened(true)}} 
              className="bars"
              style={{background:"var(--appColor)",padding:".5rem",borderRadius:"5px"}}>
                
 
            <img src={bars} alt="" style={{ width: "2rem", height: "1.5rem" }}/>

          </div>
        ) : (
          <ul className="header-nav">
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                activeClass="active"
                to="landingPage"
                spy="true"
                smooth="true"
                >Home</Link>
            </li>
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                to="programs"
                spy="true"
                smooth="true"
                >Programs</Link>
            </li>
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                to="reasons"
                spy="true"
                smooth="true"
                >Why us</Link>
            </li>
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                to="ShopMini"
                spy="true"
                smooth="true"
                >Shop</Link>
            </li>
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                to="plans"
                spy="true"
                smooth="true"
                >Plans</Link>
            </li>
            <li>
              <Link
                onClick={()=>setMenuOpened(false)}
                to="testimonials"
                spy="true"
                smooth="true"
                >Testimonials</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
