import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(async (req) => {
  let access = localStorage.getItem("access")
    ? localStorage.getItem("access")
    : null;

  let refresh = localStorage.getItem("refresh")
    ? localStorage.getItem("refresh")
    : null;

  // check if authToken exists
  if (access != null && refresh != null) {
    //check if access token token expired
    const user = jwt_decode(access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `JWT ${access}`;
      return req;
    } else {
      //if access token exipred, refresh the token
      const response = await axios.post(`${baseURL}/auth/jwt/refresh/`, {
        refresh: refresh,
      });

      //set authorization headers with the new token
      if (response.data) {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("authToken", JSON.stringify(response.data));
        req.headers.Authorization = `JWT ${response.data.access}`;
        return req;
      }
    }
  }

  return req;
});

export { axiosInstance };
