import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import "./SignUp.css"
import {GiCancel} from "react-icons/gi"
import axios from "axios"

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
e.preventDefault();
    try {
      axios
        .post("http://localhost:3001/signup", { name, email,password})
        .then((res) => {
          if (res.data.Status === "oldUser") {
            message.error("User Already Exists!");
          } else {
            message.success("User Created Sucessfully!");
            navigate("/login");
          }
        });
    } catch (error) {
      message.error("Failed to add Account");
    }
  };

  return (
    <div className="login_page">
      <div className="base signup">
        <div className="Signup_orange_section">
          <div className="orange_subsection">
            <span>SHOPEASE</span>
            Seamless Shop Discovery and Engagement
          </div>
        </div>
        <div className="Login">
        <div className="cancel_button">
        <Link to="/" className="c_btn"><GiCancel/></Link> 
          </div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="form_title">Name</div>
              <Input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-3">
              <div className="form_title">Email</div>
              <Input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-3">
              <div className="form_title">Password</div>
              <Input.Password
                required
                placeholder="Input Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="l_button login_button">
              Sign Up
            </button>
          </form>
          <p className="para">
            Already have an <span className="para_a">account</span>?
          </p>
          <Link to="/login" className="l_button">
            Login
          </Link>
        </div>
      </div>
    </div>  )
}

export default SignUp