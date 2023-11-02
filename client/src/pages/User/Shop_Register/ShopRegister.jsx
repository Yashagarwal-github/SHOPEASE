import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, message } from "antd";
import "./ShopRegister.css";
import { HiMiniUserCircle } from "react-icons/hi2";
import Logo from "../../../components/Logo/Logo";
import Navbar from "../../../components/Navbar/Navbar";
import Axios from 'axios';

const { Option } = Select;

const ShopRegister = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  // Define the available business types and their corresponding categories.
  const businessTypes = [
    { name: 'Departmental Store', categories: ['Books', 'Grocery', 'Gift and Novelty', 'Fruits and Vegetables', 'Toys', 'Stationary', 'Supermarket'] },
    { name: 'Type 2', categories: ['Category 2', 'Category 3'] },
    { name: 'Type 3', categories: ['Category 1', 'Category 3'] },
  ];

  // Handle business type selection and update available categories.
  const handleBusinessTypeChange = (value) => {
    setSelectedBusinessType(value);
    const selectedType = businessTypes.find((type) => type.name === value);
    if (selectedType) {
      setCategories(selectedType.categories);
      setSelectedCategory('');
    } else {
      setCategories([]);
    }
  };

  const handleFormSubmit = async (e) => {
  
    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      number: e.target.mobileNumber.value,
      shop_name: e.target.shop_name.value,
      city: e.target.city.value,
      area: e.target.area.value,
      type: selectedBusinessType,
      category: selectedCategory,
    };
  
    try {
      const response = Axios.post('http://localhost:3001/register-shop', formData);
      console.log('Form submitted successfully:', response.data);
      message.success('Form submitted successfully');
      navigate("/shop_profile");

  
    } catch (error) {
      console.error('Form submission failed:', error);
      message.error('Form submission failed');
    }
  };
  

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="login_page SR_page">
        <div className="base signup SR">
          <div className="SR_orange_section">
            <div className="orange_subsection SR_orange_subsection">
              <span className="SR_REGISTER">REGISTER</span>
              <div className="SR_icon">
                <HiMiniUserCircle />
              </div>
              <span>SHOPEASE</span>
              Seamless Shop Discovery and Engagement
            </div>
          </div>
          <div className="Login">
            <form onSubmit={handleFormSubmit}>
              <div className="form_SR_inputs">
                <div className="mb-3">
                  <div className="form_title">FIRST NAME*</div>
                  <Input
                    required
                    name="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="mb-3">
                  <div className="form_title">LAST NAME*</div>
                  <Input
                    required
                    name="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>

              <div className="form_SR_inputs">
                <div className="mb-3">
                  <div className="form_title">EMAIL*</div>
                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="mb-3">
                  <div className="form_title">MOBILE NUMBER*</div>
                  <Input
                    required
                    name="mobileNumber"
                    placeholder="Input Mobile Number"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="form_title">ENTER YOUR BUSINESS NAME*</div>
                <Input
                  required
                  name="shop_name"
                  placeholder="Enter Your Business Name"
                />
              </div>
              <div className="mb-3">
                <div className="form_title">INPUT CITY OF BUSINESS*</div>
                <Input
                  required
                  name="city"
                  placeholder="Eg. Jaipur, Rajasthan"
                />
              </div>
              <div className="mb-3">
                <div className="form_title">INPUT AREA OF CITY* </div>
                <Input
                  required
                  name="area"
                  placeholder="Eg. Vidhyadhar Nagar"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="businessType" className="form_title">
                  SELECT TYPE OF BUSINESS*
                </label>
                <Select
                  id="businessType"
                  style={{ width: '100%' }}
                  placeholder="Choose Business Type"
                  required
                  value={selectedBusinessType}
                  onChange={handleBusinessTypeChange}
                >
                  {businessTypes.map((type) => (
                    <Option key={type.name} value={type.name}>
                      {type.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form_title">
                  SELECT CATEGORY*
                </label>
                <Select
                  id="category"
                  style={{ width: '100%' }}
                  placeholder="Select Category"
                  value={selectedCategory}
                  onChange={(value) => setSelectedCategory(value)}
                  disabled={selectedBusinessType === ''}
                >
                  {categories.map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </div>

              {!user && (
                <div className="SR_not_login">
                  <div className="SR_not_login_btn">
                    <Link to="/signup" className="r_btn">
                      NOTE*- First SignUp/Login yourself in SHOPEASE.
                    </Link>
                  </div>
                </div>
              )}
              {user && (
                <button type="submit" className="SR_register_btn">
                  Register
                </button>
              )}
            </form>
            <div className="last_line"></div>
          </div>
        </div>
        <div className="SR_LOGO">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default ShopRegister;
