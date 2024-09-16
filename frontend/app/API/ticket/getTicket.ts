import axios from "axios";
import backendURL from "@/app/API/getBackendURL";

export const getTicket = async (token: string) => {
  try {
    const response = await axios.get(`${backendURL}/createTicket`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Got error fetching the ticket", error);
    alert(`Error fetching the ticket \n ${error}`);
  }
};
