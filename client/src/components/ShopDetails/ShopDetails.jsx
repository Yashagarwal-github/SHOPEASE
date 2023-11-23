import React from "react";
import { useParams } from "react-router-dom";

const ShopDetails = () => {
  let { cardName } = useParams();

  return (
    <div>
      <h1>Details Page</h1>
      <p>Card Name: {cardName}</p>
      {/* Other details or components related to the card */}
    </div>
  );
};

export default ShopDetails;
