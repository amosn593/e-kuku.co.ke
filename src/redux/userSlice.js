import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "E-Kuku",
    token: "",
    loggedin: false,
    loggedout: true,
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
    },
    login: (state) => {
      state.loggedin = true;
      state.loggedout = false;
      state.token = "";
    },
    logout: (state) => {
      state.loggedin = false;
      state.loggedout = true;
      state.token = ""
    },
  },
});

export const { update, login, logout } = userSlice.actions;
export default userSlice.reducer;
