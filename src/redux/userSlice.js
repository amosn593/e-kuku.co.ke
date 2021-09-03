import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    pending: null,
    error: null,
    userloaded: null,
    userinfo: null,
  },

  reducers: {
    loginstart: (state) => {
      state.pending = true;
      state.userloaded = false;
      state.error = false;
    },

    login: (state, action) => {
      state.email = "logged in";
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;
      state.pending = false;
      state.error = false;
      state.userloaded = false;
    },
    loginerror: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.pending = false;
      state.error = true;
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.email = null;
      state.userinfo = null;
      state.userloaded = false;
    },
    logout: (state) => {
      state.email = "";
      state.access = null;
      state.refresh = null;
      state.userinfo = null;
      state.isAuthenticated = false;
      state.userloaded = false;
    },
    loaduser: (state, action) => {
      state.userinfo = action.payload;
      state.userloaded = true;
    },
    loaduser_error: (state) => {
      state.email = "";
      state.userinfo = null;
      state.isAuthenticated = false;
      state.userloaded = false;
      state.error = true;
    },
  },
});

export const {
  update,
  loginstart,
  login,
  loginerror,
  logout,
  loaduser,
  loaduser_error,
} = userSlice.actions;
export default userSlice.reducer;
