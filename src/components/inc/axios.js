import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000",
  // baseURL: "https://backend.e-kuku.co.ke",

  timeout: 5000,
});
