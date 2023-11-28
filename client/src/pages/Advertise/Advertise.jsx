import React, { useState } from "react";
import "./Advertise.css";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import axios from "axios";
import { Input, Upload, Button, Form, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Advertise = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("shop_name", values.shop_name);
    formData.append("number", values.number);
    formData.append("email", values.email);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/advertisements",
        formData
      );
      console.log(response.data);
      message.success("Advertisement submitted successfully");
      form.resetFields(); // Reset the form after submission
      setFile(null); // Reset the file state
    } catch (error) {
      console.error("Error submitting advertisement:", error.message);
      message.error("Error submitting advertisement");
    }
  };

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
            <Form
              form={form}
              onFinish={handleSubmit}
              initialValues={{ shop_name: "", number: "", email: "" }}
            >
              {/* Other form fields */}
              <Form.Item
                label="SHOP NAME"
                name="shop_name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your business name",
                  },
                ]}
              >
                <Input placeholder="Your Business Name" />
              </Form.Item>

              <Form.Item
                label="MOBILE"
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your mobile number",
                  },
                ]}
              >
                <Input placeholder="Input Mobile Number" />
              </Form.Item>

              <Form.Item
                label="EMAIL"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input placeholder="Enter Your Email_Id" />
              </Form.Item>
              <Form.Item
                label="IMAGE"
                name="image"
                rules={[{ required: true }]}
              >
                <input type="file" onChange={handleFileChange} />
              </Form.Item>

              <Form.Item>
                <button
                  type="submit"
                  className="l_button login_button a_submit_button"
                >
                  SUBMIT
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="Advetise_LOGO">
        <Logo />
      </div>
    </div>
  );
};

export default Advertise;
