import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./ShopDetails.css";

const ShopDetails = () => {
  const { number } = useParams();
  const [profile, setProfile] = useState(null);
  const [showAboutDetails, setShowAboutDetails] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/profiles/${number}`
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (number) {
      fetchProfile();
    }
  }, [number]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  // const handleAboutClick = () => {
  //   setShowAboutDetails(!showAboutDetails);
  // };
  const handleAboutClick = () => {
    setShowAboutDetails((prevState) => !prevState);
  };

  return (
    <div className="shop-details">
      <Navbar />
      <div className="shop-details-rectangle">
        <h3>{profile.category} Store</h3>
        <h1>{profile.shop_name}</h1>
      </div>
      <div className="about-details-rectangle">
        <div className="about-details">
          <h3 onClick={handleAboutClick}>
            <strong>About</strong>
          </h3>
        </div>
      </div>
      {showAboutDetails && (
        <div className="hidden-details">
          <div className="row-1">
            <h3>OVERVIEW</h3>
            <p>
              {profile.shopDescription} Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Harum excepturi dolores neque facere, tenetur
              iusto eligendi debitis fuga reprehenderit earum recusandae sed
              nihil, perspiciatis consectetur minus sunt. Consectetur, quaerat
              illo!
            </p>
          </div>
          <div className="row-2">
            <h3>Products and Services</h3>
            {/* <p>{profile.productsAndServices}</p> */}
            <ul>
              {profile.productsAndServices.split(",").map((item, index) => (
                <p key={index}>{item.trim()}</p>
              ))}
            </ul>
          </div>
          <div className="row-3">
            <div className="col-1">
              <h3>Shop timing</h3>
              <p>{profile.timing}</p>
              <h3>Contact Owner</h3>
              <p>{profile.full_name}</p>
              <p>{profile.email}</p>
              <p>{profile.number}</p>
            </div>
            <div className="col-2">
              <h3>Delivery Option</h3>
              <p>{profile.deliveryOption}</p>
              <h3>Address</h3>
              <p>{profile.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopDetails;
