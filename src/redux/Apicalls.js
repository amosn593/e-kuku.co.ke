import {
  loginstart,
  login,
  loginerror,
  loadstart,
  loaduser,
  loaduser_error,
  authenticate_start,
  authenticate_user,
  authenticate_error,
  signup_start,
  signup,
  signup_error,
} from "./userSlice";
import { axios } from "../components/inc/axios";

export const check_authenticated = () => async (dispatch) => {
  dispatch(authenticate_start());
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const res = await axios.post("/auth/jwt/verify/", body, config);

      if (res.data.code !== "token_not_valid") {
        dispatch(authenticate_user());
      } else {
        dispatch(authenticate_error());
      }
    } catch (err) {
      dispatch(authenticate_error());
    }
  } else {
    dispatch(authenticate_error());
  }
};

export const load_user = () => async (dispatch) => {
  dispatch(loadstart());
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("/auth/users/me/", config);

      if (res.status === 200) {
        dispatch(loaduser(res.data));
      } else {
        dispatch(loaduser_error());
      }
    } catch (err) {
      dispatch(loaduser_error());
    }
  } else {
    dispatch(loaduser_error());
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
    const res = await axios.post("/auth/jwt/create/", body, config);

    if (res.status === 200) {
      dispatch(login(res.data));
      dispatch(load_user());
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
    const res = await axios.post("/auth/users/", body, config);
    if (res.status === 201) {
      dispatch(signup());
    } else {
      dispatch(signup_error(res.status));
    }
  } catch (err) {
    dispatch(signup_error());
  }
};
