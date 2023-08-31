import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../types";

const authSlice = createSlice({
  initialState: { user: null, token: null },
  name: "auth",
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: State) => state.auth.user;
export const selectCurrentToken = (state: State) => state.auth.token;
