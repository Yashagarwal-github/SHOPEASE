import React from "react";
import "./Advertise.css";
import Navbar from "../../components/Navbar/Navbar";
import { Input } from "antd";
import Logo from "../../components/Logo/Logo";
const { TextArea } = Input;

const Advertise = () => {
  return (
    <div className="advertise_main">
      <div>
        <Navbar />
      </div>
      <div className="advertise_subsection">
        {/* <h1>Advertise With Us</h1> */}
        <div className="talk_section">
          <span>Let's Talk</span>
          <div className="talk_para">
            "Boost your Business visibility and reach a wider audience by
            advertising with us. Join ShopEase today and connect with local
            shoppers effortlessly."
          </div>
          <div className="talk_items">
            <span>Email:</span>contact@shopease.com
          </div>
          <div className="talk_items">
            <span>Mobile:</span>+919876543210
          </div>
        </div>
        <div className="advertise_form_section">
          <span>Advertise With Us</span>
          <div className="advertise_form">
            <form>
              <div className="mb-3 advertise_inputs">
                <div className="form_title form_title_a">BUSINESS NAME</div>
                <div className="a_form_input">
                  <Input required placeholder="Your Business Name" />
                </div>
              </div>

              <div className="mb-3 advertise_inputs">
                <div className="form_title form_title_a">MOBILE</div>
                <div className="a_form_input">
                  <Input required placeholder="Input Mobile Number" />
                </div>
              </div>

              <div className="mb-3 advertise_inputs">
                <div className="form_title form_title_a">EMAIL</div>
                <div className="a_form_input">
                  <Input required placeholder="Enter Your Email_Id" />
                </div>
              </div>

              <div className="mb-3 advertise_inputs">
                <div className="form_title form_title_a">CITY</div>
                <div className="a_form_input">
                  <Input required placeholder="Input City of Business" />
                </div>
              </div>

              <div className="mb-3  large_a_input">
                <div className="form_title form_title_a">
                  PRODUCT OR SERVICES
                </div>
                <div className="a_form_input">
                <TextArea placeholder="Your Product or Service Description" rows={4} />
                </div>
              </div>
              <button type="submit" className="l_button login_button a_submit_button">
              SUBMIT
            </button>
            </form>
          </div>
        </div>
      </div>
      <div className='Advetise_LOGO'>
      <Logo/>
      </div>
    </div>
  );
};

export default Advertise;
