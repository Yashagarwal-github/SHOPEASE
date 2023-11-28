import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch advertisements when the component mounts
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/advertisements"
        );
        setAdvertisements(response.data);
      } catch (error) {
        console.error("Error fetching advertisements:", error.message);
      }
    };

    fetchAdvertisements();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  const navigate = useNavigate();
  const handleCardClick = (number) => {
    console.log("Navigating to:", `/shop-details/${number}`);
    navigate(`/shop-details/${number}`);
  };
  return (
    <div>
      {advertisements.length > 0 && (
        <div className="carousal">
          <img
            src={`http://localhost:3001/uploads/${advertisements[currentIndex].image}`}
            alt={`slide ${currentIndex}`}
            onClick={() => handleCardClick(advertisements[currentIndex].number)}
          />

          <div
            className="carousel-button left-button thick-arrow-left"
            onClick={prevSlide}
          ></div>
          <div
            className="carousel-button right-button thick-arrow-right"
            onClick={nextSlide}
          ></div>
          {/* <div className="carousal-shop-name">
            <h2>{advertisements[currentIndex].shop_name}</h2>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Banner;
