import {
  loginstart,
  login,
  loginerror,
  loaduser,
  loaduser_error,
} from "./userSlice";
import { axios } from "../components/inc/axios";

export const load_user = () => async (dispatch) => {
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

      dispatch(loaduser(res.data));
    } catch (err) {
      dispatch(loaduser_error);
    }
  } else {
    dispatch(loaduser_error);
  }
};

export const login_user = async (body, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch(loginstart());
  try {
    const res = await axios.post("/auth/jwt/create/", body, config);
    dispatch(login(res.data));
    dispatch(load_user());
  } catch (err) {
    console.log(err);
    dispatch(loginerror);
  }
};
