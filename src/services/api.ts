import axios from "axios";

export const APIClient = axios.create({
  baseURL: "https://randomuser.me/api",
  timeout: 1000,
});