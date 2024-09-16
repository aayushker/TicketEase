import axios from "axios";
import backendURL from "@/app/API/getBackendURL";

export const putTicket = async (token: string, id: string, ticketData: any) => {
  try {
    const response = await axios.put(
      `${backendURL}/updateTicket/${id}`,
      ticketData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Got error updating the Ticket ${error}`);
    alert(`Got error updating the Ticket \n ${error}`);
  }
};
