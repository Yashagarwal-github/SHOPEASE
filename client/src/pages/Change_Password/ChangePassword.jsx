import { Form, Input, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import "./ChangePassword.css"

const ChangePassword = (props) => {
  const [form] = Form.useForm(); 
  const [newPassword, setNewPassword] = useState();
  const [currentPassword, setOldPassword] = useState();
  const handleUpdate = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/change_password/${props.userid}`, {
        currentPassword,
        newPassword
      });
      message.success("Password Updated Sucessfully!");
    } catch (error) {
      console.error(error);
      // Handle the error, for example:
      message.error("Failed to update password");
    }
  };
  

  return (
    <>
      <div className="title_edit_budget">Change Password</div>
      <Form layout="vertical" form={form} onFinish={handleUpdate}>
        <Form.Item
          label="Current Password"
          name="old_password"
          rules={[
            {
              required: true,
              message: "Please input current password!",
            },
          ]}
        >
          <Input.Password
            type="text"
            placeholder="Enter Current Password"
            value={currentPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="new_password"
          rules={[
            {
              required: true,
              message: "Please input new password!",
            },
          ]}
        >
          <Input.Password
            type="text"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Item>


        <div className="d-flex justify-content-center buttons_both">
          <button className="btn btn-primary_cp " type="submit">
            {" "}
            Update Password
          </button>
        </div>
      </Form>{" "}
    </>
  );
};

export default ChangePassword;