import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { Input } from "antd";
import Location from "../Modal/Location_Modal/Location";
import DropDown from "../DropDown/DropDown";
import categories from "../../data/category";
const { Search } = Input;

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [openProfile, setOpenProfile] = useState(false);

  const openDropDown = () => {
    setOpenProfile(true);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSearch = (value) => {
    // Capitalize the first letter of the search value
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    navigate(`/products/${capitalizedValue}`);
  };

  return (
    <div className="navbar_main">
      <div className="navbar_title">SHOPEASE </div>
      <div className="title_line"></div>
      <div className="navbar_search">
        <Search
          placeholder="Search for products Eg. Books"
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
      {user && (
        <div className="navbar_login">
          <Link
            className="n_login_btn"
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <BiUserCircle />
          </Link>
        </div>
      )}
      {openProfile && <DropDown />}
    </div>
  );
};

export default Navbar;
