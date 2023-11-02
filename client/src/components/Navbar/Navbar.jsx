import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { Input } from "antd";
import Location from "../Modal/Location_Modal/Location";
import DropDown from "../DropDown/DropDown";
const { Search } = Input;

const Navbar = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [openProfile, setOpenProfile] = useState(false);
  const openDropDown =()=>{
    setOpenProfile(true)
  }


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar_main">
      <div className="navbar_title">SHOPEASE </div>
      <div className="title_line"></div>
      <div className="navbar_search">
        <Search
          placeholder="Search for products & more"
          onSearch={onSearch}
          enterButton
          className="s"
        />
      </div>
      <div className="navbar_items">
        <Link className="n_item" to="/">
          Home
        </Link>
        <Link className="n_item" to="/how-it-works">
          How It Works
        </Link>
        <Link className="n_item" to="/advertise-with-us">
          Advertise With Us
        </Link>
        <Link className="n_item" to="/shop-signup">
          Register Your Business
        </Link>
      </div>
      <div className="navbar_location">
        <Link className="location_btn" onClick={openModal}>
          {" "}
          <ImLocation2 className="location_icon" />
          Select Location
        </Link>
        <Location show={showModal} closeModal={closeModal} />
      </div>
      {!user && (
      <div className="navbar_login">
      <Link className="n_login_btn" to="/login">
        <BiUserCircle />
      </Link>
    </div>
      )}
      {user && ( // Only display the button when a user is logged in
              <div className="navbar_login">
              <Link className="n_login_btn" onClick={()=>setOpenProfile((prev)=>!prev)}>
                <BiUserCircle />
              </Link>
            </div>
      )}
      {openProfile && <DropDown />}
    </div>
  );
};

export default Navbar;
