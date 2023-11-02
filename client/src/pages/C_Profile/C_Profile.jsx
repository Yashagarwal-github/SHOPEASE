import React from "react";
import "./C_Profile.css";
import {FaRegUser} from "react-icons/fa"
import { Input, message } from "antd";
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const C_Profile = () => {
  const handleFormSubmit = async (e) => {};  



  return (
    <div className="c_profile">
      <div className="c_profile_form">
        <div className="c_profile_left">
          <div className="c_profile_left_main">
            <h1>PROFILE</h1>
            <div className="c_profile_logo">
              <FaRegUser />
            </div>
            <div className="c_full_name">srk</div>
            <div className="c_email">srk@gmail.com</div>
          </div>
        </div>
        <div className="c_profile_right">
          <form onSubmit={handleFormSubmit} className="c_form">
            <div className="c_full_form">
              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    NAME*{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="form_title_cp">
                    EMAIL*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Email-id"
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
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div className="form_title_cp">
                    ENTER YOUR BUSINESS NAME*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Business Name"
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
                    />
                  </div>

                  <div className="form_title_cp">
                    INPUT AREA OF BUSINESS*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="eg. Vidhyadhar Nagar"
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
                      placeholder="Business Type"
                    />
                  </div>

                  <div className="form_title_cp">
                    SELECT CATEGORY OF BUSINESS TYPE*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Category of Selected Business Type"
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
                    />
                  </div>

                  <div className="form_title_cp">
                    SHOP TIMMING*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Eg. 9:00AM - 9:00PM"
                    />
                  </div>
                </div>
              </div>

              <div className="form_SR_inputs_c_profile">
                <div className="mb-3_cp">
                  <div className="form_title_cp">
                    SHOP PHOTOS{" "}
                    <Input
                      required
                      name="first_name"
                      type="text"
                      placeholder=""
                    />
                  </div>

                  <div className="form_title_cp">
                    DELIVERY OPTION*{" "}
                    <Input
                      required
                      name="last_name"
                      type="text"
                      placeholder="Eg. Yes or No"
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
                  rows={3}
                />
              </div>
            </div>
            <button type="submit" className="CP_form_btn">
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
