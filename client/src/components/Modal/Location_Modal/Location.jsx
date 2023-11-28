// import React from "react";
// import "./Location.css";
// import { Input } from "antd";
// import Logo from "../../Logo/Logo";
// import cities from "../../../data/cities";
// import { ImLocation2 } from "react-icons/im";

// const Location = ({ show, closeModal }) => {
//   return (
//     show && (
//       <div className="modal-container">
//         <div className="modal-content">
//           <button className="close-button" onClick={closeModal}>
//             &times;
//           </button>
//           <div className="location_main">
//             <span>Pick a City</span>
//             To discover fantastic offers in your area with SHOPEASE
//             <div>
//               <Input
//                 className="location_input"
//                 placeholder="Enter your city name"
//                 prefix={<ImLocation2 className="modal_location_icon" />}
//               />
//             </div>
//             <div className="top_cities">Top Cities</div>
//             <div className="cities_items_section">
//               {cities.map((city, index) => (
//                 <div key={index} className="city_item">
//                   <img src={city.image} alt={city.name} />
//                   <div className="cities_name_modal">{city.name}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="Location_Section_LOGO">
//             <Logo />
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Location;
import React, { useState } from "react";
import "./Location.css";
import { Input, Modal } from "antd";
import Logo from "../../Logo/Logo";
import cities from "../../../data/cities";
import { ImLocation2 } from "react-icons/im";

const Location = ({ show, closeModal }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    if (cityName !== "Jaipur") {
      setModalVisible(true);
    } else {
      closeModal();
    }
  };

  const handleModalClose = () => {
    setSelectedCity("");
    setModalVisible(false);
    closeModal();
  };

  return (
    <>
      {show && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <div className="location_main">
              <span>Pick a City</span>
              To discover fantastic offers in your area with SHOPEASE
              <div>
                <Input
                  className="location_input"
                  placeholder="Enter your city name"
                  prefix={<ImLocation2 className="modal_location_icon" />}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  onPressEnter={() => handleCitySelect(selectedCity)}
                />
              </div>
              <div className="top_cities">Top Cities</div>
              <div className="cities_items_section">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="city_item"
                    onClick={() => handleCitySelect(city.name)}
                  >
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
      )}

      {modalVisible && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
          width={600}
          centered
        >
          <div className="limitation-modal">
            <p>We are currently limited to Jaipur only.</p>
            <button
              className="close-button"
              onClick={handleModalClose}
            ></button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Location;
