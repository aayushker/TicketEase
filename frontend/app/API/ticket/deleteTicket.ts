import axios from "axios";
import backendURL from "@/app/API/getBackendURL";

export const deleteTicket = async (token: string, id: any) => {
  try {
    const reponse = await axios.delete(`${backendURL}/deleteTicket/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return reponse.data;
  } catch (error) {
    console.log(`Got error deleting the Ticket ${error}`);
    alert(`Got error deleting the Ticket \n ${error}`);
  }
};
