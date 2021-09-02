import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    token: "",
    loggedin: false,
    loggedout: true,
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
    },
    login: (state, action) => {
      state.email = action.payload.email;
      state.loggedin = true;
      state.loggedout = false;
      state.token = "";
    },
    logout: (state) => {
      state.email = "";
      state.name = "";
      state.loggedin = false;
      state.loggedout = true;
      state.token = "";
    },
  },
});

export const { update, login, logout } = userSlice.actions;
export default userSlice.reducer;
