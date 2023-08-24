import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeAction } from "./cakeSlice";
const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const { ordered, restocked } = cakeAction;
  const dispatch = useDispatch();
  console.log("render cake view");
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(1));
        }}
      >
        Restock Cake
      </button>
    </div>
  );
};

export default CakeView;
