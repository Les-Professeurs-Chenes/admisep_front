import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../constants/api";

export const login = async (login: string, password: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${apiUrl}/users/login`,
      {
        moodle_id: login,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const loginData: any = response.data;
    localStorage.setItem("token", loginData.token.token);
    return loginData;
  } catch (error) {
    return error;
  }
};

export const register = async (
  moodle_id: string,
  firstName: string,
  lastName: string,
  mail: string,
  password: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${apiUrl}/users/register`,
      {
        moodle_id,
        firstName,
        lastName,
        mail,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const registerData: any = response.data;
    return registerData;
  } catch (error) {
    return error;
  }
};
