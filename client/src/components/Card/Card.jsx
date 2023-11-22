import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ title, content }) => {
    return (
        <div className="cards">
            <div className="thumbnail">
                <h4>C</h4>
            </div>
            <h2>{title}</h2>
            <h6>{content}</h6>
        </div>
    );
};

export default Card;