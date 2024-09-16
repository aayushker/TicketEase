import axios from "axios";
import backendURL from "@/app/API/getBackendURL";
import { Register } from "@/app/types/Auth";

export const register = async (userData: Register) => {
  const response = await axios.post(`${backendURL}/register`, userData);
  return response.data;
};
