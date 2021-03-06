import {
  loginstart,
  login,
  logout,
  loginerror,
  loadstart,
  loaduser,
  loaduser_error,
  signup_start,
  signup,
  signup_error,
} from "./userSlice";
import { axiosInstance } from "../components/inc/axios";

export const load_user = () => async (dispatch) => {
  dispatch(loadstart());
  if (localStorage.getItem("refresh")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ refresh: localStorage.getItem("refresh") });
    try {
      const res = await axiosInstance.post("/auth/jwt/refresh/", body, config);

      if (res.status === 200) {
        dispatch(loaduser(res.data));
      } else {
        dispatch(loaduser_error());
      }
    } catch (err) {
      dispatch(loaduser_error());
      dispatch(logout());
    }
  } else {
    dispatch(loaduser_error());
    dispatch(logout());
  }
};

export const login_user = async (body, dispatch, history) => {
  dispatch(loginstart());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axiosInstance.post("/auth/jwt/create/", body, config);

    if (res.status === 200) {
      dispatch(login(res.data));
      history.push("/");
    } else {
      dispatch(loginerror());
    }
  } catch (err) {
    dispatch(loginerror());
  }
};

export const signup_user = async (body, dispatch) => {
  dispatch(signup_start());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axiosInstance.post("/auth/users/", body, config);
    if (res.status === 201) {
      dispatch(signup());
    } else {
      dispatch(signup_error(res.status));
    }
  } catch (err) {
    dispatch(signup_error());
  }
};
