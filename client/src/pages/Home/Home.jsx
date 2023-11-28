import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Location from "../../components/Modal/Location_Modal/Location";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import h_pic from "../../assets/category_photos/homepic.png";
import Category from "../../components/Category/Category";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  useEffect(() => {
    const linkElement = document.querySelector(".location_btn");

    // Check if the website is loaded for the first time
    if (!localStorage.getItem("websiteLoaded")) {
      // Click the button
      if (linkElement) {
        linkElement.click();
      }

      // Set a flag in localStorage to indicate that the website has been loaded
      localStorage.setItem("websiteLoaded", "true");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Location />
      <div className="home_pic">
        <img className="h_pic" src={h_pic} alt="Pic" />
      </div>
      <Category />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
