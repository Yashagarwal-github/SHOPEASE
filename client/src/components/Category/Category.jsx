import React from "react";
import "./Category.css";
import categories from "../../data/category";
import { Link } from "react-router-dom";


const Category = () => {
  return (
    <div>
      <div className="categories_items_section">
        {categories.map((category, index) => (
          <Link key={index} className="category_item" to={category.page}>
            <img className="category_image" src={category.image} alt={category.name} />
            <div className="categories_name_modal">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
