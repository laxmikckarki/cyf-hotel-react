import React from "react";
import Restaurant from "./Restaurant";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button className="btn btn-primary" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
