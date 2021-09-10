import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000",
  // headers: {
  //   "content-type": "multipart/form-data",
  // },
  timeout: 5000,
});
