import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className="p-2 my-2 bg-sky-400 text-white text-xs hover:bg-sky-700">
        ProductCard
      </div>
      <AddToCart />
    </>
  );
};

export default ProductCard;
