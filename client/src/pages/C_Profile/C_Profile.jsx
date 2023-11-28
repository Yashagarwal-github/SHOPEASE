import React, { useState, useEffect } from "react";
import "./C_Profile.css";
import { FaRegUser } from "react-icons/fa";
import { Input, message } from "antd";
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const C_Profile = () => {

  const userEmail = JSON.parse(localStorage.getItem('user')).data.Email;
  console.log("email sis ", userEmail)
  useEffect(() => {
    async function fetchShopDetails() {
      try {
        const response = await axios.get(
          `http://localhost:3001/shop-details/${userEmail}`
        );
        setShopDetails(response.data);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    }

    fetchShopDetails();
  }, [userEmail]);

  const [shopdetails, setShopDetails] = useState([]);
  const full_name = shopdetails.first_name + " " + shopdetails.last_name;
  const email = shopdetails.email;
  const number = shopdetails.number;
  const shop_name = shopdetails.shop_name;
  const city = shopdetails.city;
  const area = shopdetails.area;
  const type = shopdetails.type;
  const category = shopdetails.category;
  const [address, setAddress] = useState("");
  const [timing, setTiming] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [productsAndServices, setProductsAndServices] = useState("");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleTiming = (e) => {
    setTiming(e.target.value);
  };

  const handleDeliveryOption = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleShopDescriptionChange = (e) => {
    setShopDescription(e.target.value);
  };

  const handleProductsAndServicesChange = (e) => {
    setProductsAndServices(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/update-profile",
        {
          full_name,
          email,
          number,
          shop_name,
          city,
          area,
          type,
          category,
          address,
          timing,
          deliveryOption,
          shopDescription,
          productsAndServices,
        }
      );

      console.log("printing data");
      console.log(full_name);
      console.log(response.data);
      alert("Student profile updated successfully!");
      // }
    } catch (error) {
      // const data = await response.json();

      console.log("ero");
      // console.log(full_name);
      console.error(error);
    }
  };

  return (
    <div className="c_profile">
      <div className="c_profile_form">
        <div className="c_profile_left">
          <div className="c_profile_left_main">
            <h1>PROFILE</h1>
            <div className="c_profile_logo">
              <FaRegUser />
            </div>
            <div className="c_full_name">
              {shopdetails.first_name + " " + shopdetails.last_name}
            </div>
            <div className="c_email">{shopdetails.email}</div>
          </div>
        </div>
        <div className="c_profile_right">
          {/* <form onSubmit={handleFormSubmit} className="c_form"> */}
          <form className="c_form">
            <div className="c_full_form">
              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    NAME*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      value={
                        shopdetails.first_name + " " + shopdetails.last_name
                      }
                      readOnly={true}
                    />
                  </div>

                  <div className="form_title_cp">
                    EMAIL*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      value={shopdetails.email}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    MOBILE NUMBER*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      value={shopdetails.number}
                      readOnly={true}
                    />
                  </div>

                  <div className="form_title_cp">
                    ENTER YOUR BUSINESS NAME*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      value={shopdetails.shop_name}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    INPUT CITY OF BUSINESS*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      placeholder="Eg. Jaipur, Rajasthan"
                      value={shopdetails.city}
                      readOnly={true}
                    />
                  </div>

                  <div className="form_title_cp">
                    INPUT AREA OF BUSINESS*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="eg. Vidhyadhar Nagar"
                      value={shopdetails.area}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    SELECT TYPE OF BUSINESS*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      value={shopdetails.type}
                      readOnly={true}
                    />
                  </div>

                  <div className="form_title_cp">
                    SELECT CATEGORY OF BUSINESS TYPE*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Category of Selected Business Type"
                      value={shopdetails.category}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    SHOP ADDRESS*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      placeholder="Enter Shop Full Address"
                      value={address}
                      onChange={handleAddress}
                    />
                  </div>

                  <div className="form_title_cp">
                    SHOP TIMMING*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Eg. 9:00AM - 9:00PM"
                      value={timing}
                      onChange={handleTiming}
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">


                  <div className="form_title_cp">
                    DELIVERY OPTION*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Eg. Yes or No"
                      value={deliveryOption}
                      onChange={handleDeliveryOption}
                    />
                  </div>
                </div>
              </div>

              <div className="form_title_cp_long">
                <div>SHOP DESCRIPTION</div>
                <TextArea
                  required
                  name="last_name"
                  type="text"
                  placeholder="Description About Shop"
                  value={shopDescription}
                  onChange={handleShopDescriptionChange}
                  rows={3}
                />
              </div>

              <div className="form_title_cp_long">
                <div>PRODUCTS AND SERVICES*</div>
                <TextArea
                  required
                  name="last_name"
                  type="text"
                  placeholder="Eg- RC Car: 1200rs, Teddy: 200rs.... "
                  value={productsAndServices}
                  onChange={handleProductsAndServicesChange}
                  rows={3}
                />
              </div>
            </div>
            <button
              type="submit"
              className="CP_form_btn"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="SR_LOGO">
        <Logo />
      </div>
    </div>
  );
};

export default C_Profile;
