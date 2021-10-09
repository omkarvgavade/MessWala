import React from "react";
import Crousel from "./Crousel";
import FoodCard from "./FoodCard";
import FoodItem from "./FoodItem";
import Navbar from "./Navbar";

const MainDisplay = () => {
  return (
    <div>
      <Navbar/>
      <Crousel />
      <FoodItem/>
      <FoodCard />
    </div>
  );
};

export default MainDisplay;
