import axios from "axios";
import { LoginResponse } from "./types";
axios.defaults.withCredentials = true;

export const checkLogin: () => Promise<LoginResponse> = async () => {
  const response = await axios.get("http://localhost:8000/login");
  return response.data;
};

export const logout: () => Promise<LoginResponse> = async () => {
  const response = await axios.get("http://localhost:8000/logout");
  return response.data;
};

export const Login: (
  email: string,
  password: string
) => Promise<LoginResponse> = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:8000/login", {
    email,
    password,
  });
  return response.data;
};
