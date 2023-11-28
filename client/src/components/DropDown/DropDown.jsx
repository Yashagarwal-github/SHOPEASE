import React, { useEffect, useState } from "react";
import "./DropDown.css";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";
import { BsFillPersonFill } from "react-icons/bs";
import ChangePassword from "../../pages/Change_Password/ChangePassword";

const DropDown = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [loginuser, setLoginUser] = useState(user);
  useEffect(() => {
    if (user) {
      setLoginUser(user);
    }
  }, []);
  const user_name = loginuser.data.Name;

  const LogoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logged Out");
  };
  return (
    <div className="Overlay">
      <div className="flex flex-col dropDownProfile">
        <ul className="flex flex-col gap-4">
          <span className="User_name">
            {user_name}
            <hr />
          </span>
          <Link
            className="change_text"
            style={{ textDecoration: "none" }}
            to="/shop_profile"
          >
            <li>
              <span className="Logout_icon">
                <BsFillPersonFill />
              </span>
              Profile
            </li>
          </Link>
          <Link
            className="change_text"
            style={{ textDecoration: "none" }}
            onClick={showModal}
          >
            <li>Change Password</li>
          </Link>
          <Link
            className="Logout_text"
            onClick={LogoutHandler}
            style={{ textDecoration: "none" }}
            to="/"
          >
            <li style={{ textDecoration: "none", color: "black" }}>
              <span className="Logout_icon">
                <BiLogOut />
              </span>
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={false}>
        {<ChangePassword userid={user.data.U_id} />}
      </Modal>
    </div>
  );
};

export default DropDown;
