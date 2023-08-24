const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});
//getting the reducer
module.exports = cakeSlice.reducer;
//getting the actions which we defined in redux through returing objects{type,payload} in action creator functions.
module.exports.cakeActions = cakeSlice.actions;
