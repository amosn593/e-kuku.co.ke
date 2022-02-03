import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
    load_error: null,
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    authToken: localStorage.getItem("authToken"),
    login_pending: null,
    login_user_error: "",
    load_user_error: "",
    logout: null,
    load_pending: null,
    userloaded: null,
    userinfo: null,
    authenticate_pending: null,
    isAuthenticated: null,
    signup_error: null,
    signup_error_msg: "",
    signup_pending: null,
    signup: null,
    status: 0,
  },

  reducers: {
    loginstart: (state) => {
      state.login_pending = true;
      state.isAuthenticated = false;
      state.error = false;
    },

    login: (state, action) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("authToken", action.payload);
      state.login_pending = false;
      state.isAuthenticated = true;
    },
    loginerror: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("authToken");
      state.login_pending = false;
      state.error = true;
      state.isAuthenticated = false;
      state.login_user_error = "Invalid Login Credentials!!!";
    },
    logout: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("authToken");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.error = false;
      state.logout = true;
    },
    loadstart: (state) => {
      state.load_pending = true;
      state.isAuthenticated = false;
      state.userloaded = false;
      state.load_error = false;
    },
    loaduser: (state, action) => {
      state.load_pending = false;
      state.userloaded = true;
      state.load_error = false;
      state.isAuthenticated = true;
      state.userinfo = action.payload;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("authToken", action.payload);
    },
    loaduser_error: (state) => {
      state.userinfo = null;
      state.load_pending = false;
      state.userloaded = false;
      state.isAuthenticated = false;
      state.load_error = true;
      state.load_user_error = "Invalid Access Token!!!";
    },

    signup_start: (state) => {
      state.signup_pending = true;
      state.signup = false;
      state.signup_error = false;
    },
    signup: (state) => {
      state.signup_pending = false;
      state.signup = true;
      state.signup_error = false;
      state.isAuthenticated = false;
    },
    signup_error: (state, action) => {
      state.status = action.payload;
      state.signup_pending = false;
      state.signup = false;
      state.signup_error = true;
      state.signup_error_msg = "user account with this email already exists.";
    },
  },
});

export const {
  loginstart,
  login,
  loginerror,
  logout,
  loadstart,
  loaduser,
  loaduser_error,
  signup_start,
  signup,
  signup_error,
} = userSlice.actions;
export default userSlice.reducer;
