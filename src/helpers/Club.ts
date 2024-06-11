import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../constants/api";

export const createClub = async (clubData: {
  name: string;
  description: string;
  type: string;
  creation: string;
  logoUrl: string;
  website: string;
  facebook: string;
  instagram: string;
  twitter: string;
  viewable: boolean;
}): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${apiUrl}/clubs/`,
      clubData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const createdClub: any = response.data;
    return createdClub;
  } catch (error) {
    throw error;
  }
};

export const getClub = async (clubData: {
  name: string;
  description: string;
  type: string;
  creation: string;
  logoUrl: string;
  website: string;
  facebook: string;
  instagram: string;
  twitter: string;
  viewable: boolean;
}): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${apiUrl}/clubs/`,
      clubData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const createdClub: any = response.data;
    return createdClub;
  } catch (error) {
    throw error;
  }
};
