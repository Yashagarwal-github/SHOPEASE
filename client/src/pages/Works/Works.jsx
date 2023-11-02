import React from "react";
import Logo from "../../components/Logo/Logo";
import "./Works.css";
import select from "../../assets/l.JPG";
import enjoy from "../../assets/s.JPG";
import explore from "../../assets/e.JPG";
import Navbar from "../../components/Navbar/Navbar";

const Works = () => {
  return (<>
  <Navbar/>
      <div className="work_main">
      <div className="work_items">
        <div className="work_item">
          <div>
            {" "}
            <img src={select} />
          </div>
          <div className="work_item_head"> SELECT</div>
          <div className="work_item_para">
            Choose your city & area for seamless shop discovery & engagement
            with SHOPEASE
          </div>
        </div>
        <div className="work_item">
          <div>
            {" "}
            <img src={explore} />
          </div>
          <div className="work_item_head"> EXPLORE</div>
          <div className="work_item_para">
          Option of Local Shops, Malls, Spas, Gym and more in your area. 
          </div>
        </div>
        <div className="work_item">
          <div>
            {" "}
            <img src={enjoy} />
          </div>
          <div className="work_item_head"> ENJOY</div>
          <div className="work_item_para">
          Experience the convenience of SHOPEASE through our user friendly website.
          </div>
        </div>
      </div>
      <div className="work_logo_section">
        <Logo />
      </div>
    </div>
  </>

  );
};

export default Works;
