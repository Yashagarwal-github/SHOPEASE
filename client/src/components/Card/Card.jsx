import React from "react";
import "./Card.css";

const Card = ({ title, content }) => {

  return (
    <div className="cards">
      <div className="thumbnail">
        <h1>
          <strong>{title.substring(0, 1)}</strong>
        </h1>
      </div>
      <h1>{title}</h1>
      <h3>{content}</h3>
    </div>
  );
};

export default Card;
