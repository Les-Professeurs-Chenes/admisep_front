import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../constants/api";

export const getUserByToken = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const userData: any = response.data;
    return userData;
  } catch (error) {
    return error;
  }
};
