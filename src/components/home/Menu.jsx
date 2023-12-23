// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  // Define addToCartHandler function here
  const addToCartHandler = (itemNum) => {
    // Add your logic for handling the "Buy Now" button click here
    console.log(`Item ${itemNum} added to cart`);
  };
  return (
    <MenuCard
      itemNum={1}
      burgerSrc={burger1}
      price={200}
      title="Cheese Burger"
      handler={addToCartHandler} // Pass the addToCartHandler function as a prop
      delay={0.1}
    />
  );
};

export default Menu;
