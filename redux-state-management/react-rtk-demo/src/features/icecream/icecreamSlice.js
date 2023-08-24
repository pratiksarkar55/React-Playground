import { cakeAction } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numberOfIcecreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numberOfIcecreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeAction.ordered, (state) => {
      state.numberOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
