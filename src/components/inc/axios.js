import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000";

let access = localStorage.getItem("access")
  ? localStorage.getItem("access")
  : null;

let refresh = localStorage.getItem("refresh")
  ? localStorage.getItem("refresh")
  : null;

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(async (req) => {
  console.log("interceptor run");
  // check if authToken exists
  if (access != null) {
    //check if access token token expired
    const user = jwt_decode(access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      console.log("not expired");
      req.headers.Authorization = `JWT ${access}`;
      return req;
    } else {
      console.log("expired");
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
