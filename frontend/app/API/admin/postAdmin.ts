import axios from "axios";
import backendURL from "../getBackendURL";

export const postAdmin = async (token: string, adminData: any) => {
  try {
    const response = await axios.post(
      `${backendURL}/adminCredentials`,
      adminData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Failed to submit the data ${error}`);
    alert(`Failed to submit the data ${error}`);
  }
};
