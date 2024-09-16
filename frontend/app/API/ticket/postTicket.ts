import axios from "axios";
import backendURL from "@/app/API/getBackendURL";

export const postTicket = async (token: string, ticketData: any) => {
  try {
    const response = await axios.post(
      `${backendURL}/createTicket`,
      ticketData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Got error creating the Ticket ${error}`);
    alert(`Got error updating the Ticket \n ${error}`);
  }
};
