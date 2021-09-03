import { loginstart, login, loginerror } from "./userSlice";
import { axios } from "../components/inc/axios";

export const loginuser = async (user, dispatch) => {
  dispatch(loginstart());
  try {
        const res = await axios.post('auth/jwt/create/', user);
        dispatch(login(res.data));
  } catch (err) {
    dispatch(loginerror);
  }
};
