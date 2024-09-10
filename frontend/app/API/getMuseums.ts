import axios from "axios";
import backendURL from "@/app/API/getBackendURL";

const API_URL = `${backendURL}/getmuseums`;

export const getMuseums = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
