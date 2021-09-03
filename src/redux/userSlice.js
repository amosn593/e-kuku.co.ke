import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: null,
    access: "",
    refresh: "",
    isAuthenticated: null,
    pending: null,
    error: null,
    userinfo: null,
  },

  reducers: {
    update: (state, action) => {},
    loginstart: (state) => {
      state.pending = true;
    },

    login: (state, action) => {
      state.email = action.payload.email;
      // state.userinfo = action.payload.userinfo;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;
      state.pending = false;
      state.error = false;
    },
    loginerror: (state) => {
      state.pending = false;
      state.error = true;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.email = "";
      state.isAuthenticated = false;
    },
  },
});

export const { update, loginstart, login, loginerror, logout } =
  userSlice.actions;
export default userSlice.reducer;
