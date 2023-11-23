import React, { useContext } from "react";
import "./DepartmentalStore.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import categories from "../../../data/category";
import departmentalstore from "../../../data/departmentalstore";
import { Link, useNavigate } from "react-router-dom";
import Products from "../../Products/Products";
import StoreContext from "../../Home/StoreContext";
const DepartmentalStore = () => {
  const { setStoreName } = useContext(StoreContext);
  const navigate = useNavigate();

  const goToProducts = (name) => {
    setStoreName(name);
    navigate("/products");
  };

  return (
    <div className="ds_main">
      <Navbar />
      <div className="ds_header">
        <span>DEPARTMENTAL STORE</span>
      </div>
      <div className="departmentalstore_items_section">
        {departmentalstore.map((department, index) => (
          <div key={index} className="departmentalstore_item">
            <img
              className="departmentalstore_image"
              src={department.image}
              alt={department.name}
              onClick={() => goToProducts(department.name)}
            />
            <div
              className="departmentalstore_name_modal"
              onClick={() => goToProducts(department.name)}
            >
              {department.name}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentalStore;