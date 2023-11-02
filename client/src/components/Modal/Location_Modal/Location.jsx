import React from "react";
import "./Location.css";
import { Input } from "antd";
import Logo from "../../Logo/Logo";
import cities from "../../../data/cities";
import { ImLocation2 } from "react-icons/im";

const Location = ({ show, closeModal }) => {
  

  return (
    show && (
      <div className="modal-container">
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <div className="location_main">
            <span>Pick a City</span>
            To discover fantastic offers in your area with SHOPEASE
            <div>
              <Input
                className="location_input"
                placeholder="Enter your city name"
                prefix={<ImLocation2 className="modal_location_icon"/>
                }
              />
            </div>
            <div className="top_cities">Top Cities</div>
            <div className="cities_items_section">
              {cities.map((city, index) => (
                <div key={index} className="city_item">
                  <img src={city.image} alt={city.name} />
                  <div className="cities_name_modal">{city.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="Location_Section_LOGO">
          <Logo />

          </div>
        </div>
      </div>
    )
  );
};

export default Location;
