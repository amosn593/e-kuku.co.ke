import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://e-kuku.co.ke",
  timeout: 5000,
});
