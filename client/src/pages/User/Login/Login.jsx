import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import "./Login.css";
import {GiCancel} from "react-icons/gi"
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3001/login", { email, password })
        .then((res) => {
          console.log("login: " + res.data);
          if (res.data.Status === "Success") {
            message.success("Logged In");
            navigate("/shop-signup")
            localStorage.setItem('user',JSON.stringify({...res,password:""}))
          } else {
            alert(res.data);
          }
        })
        .catch((err) => console.log(err));
    };

  return (
    <div className="login_page">
      <div className="base">
        <div className="Login_orange_section">
          <div className="orange_subsection">
            <span>SHOPEASE</span>
            Seamless Shop Discovery and Engagement
          </div>
        </div>
        <div className="Login">
          <div className="cancel_button">
            <Link to="/" className="c_btn"><GiCancel/></Link> 
          </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}> 
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
              Login
            </button>
          </form>
          <p className="para">
            Don't have an <span className="para_a">account</span>?
          </p>
          <Link to="/signup" className="l_button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
