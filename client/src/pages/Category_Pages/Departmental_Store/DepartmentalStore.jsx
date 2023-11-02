import React from "react";
import "./DepartmentalStore.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import categories from "../../../data/category";
import departmentalstore from "../../../data/departmentalstore";
import { Link } from "react-router-dom";

const DepartmentalStore = () => {
  return (
    <div className="ds_main">
      <Navbar />
      <div className="ds_header">
        <span>DEPARTMENTAL STORE</span>
        {/* DEPARTMENTAL STORE */}
      </div>
      <div className="departmentalstore_items_section">
        {departmentalstore.map((departmentalstore, index) => (
          <Link
            key={index}
            className="departmentalstore_item"
            to={departmentalstore.page}
          >
            <img
              className="departmentalstore_image"
              src={departmentalstore.image}
              alt={departmentalstore.name}
            />
            <div className="departmentalstore_name_modal">
              {departmentalstore.name}
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentalStore;
