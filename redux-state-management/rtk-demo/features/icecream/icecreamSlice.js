const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numberOfIcecreams: 10,
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcecreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
