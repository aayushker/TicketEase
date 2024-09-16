import axios from "axios";
import backendURL from "@/app/API/getBackendURL";
import { Login } from "@/app/types/Auth";

export const login = async (userData: Login) => {
  const response = await axios.post(`${backendURL}/login`, userData);
  return response.data;
};
