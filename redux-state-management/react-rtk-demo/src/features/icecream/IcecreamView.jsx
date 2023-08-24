import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const icecreams = useSelector((state) => state.icecream.numberOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {icecreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Ice-cream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(1));
        }}
      >
        Restock Ice-cream
      </button>
    </div>
  );
};

export default IcecreamView;
