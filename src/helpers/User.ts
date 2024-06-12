import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../constants/api";
import Club from "../models/Club";
import ClubPosition from "../models/ClubPosition";
import User from "../models/User";

export const getUserByToken = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const userData: any = response.data;
    const user = User.fromJson(userData);
    return user;
  } catch (error) {
    return error;
  }
};


export const updateUser = async (userData: {
  firstName: string;
  lastName: string;
  mail: string;
  birthDate: string|null;
  promo: string|null;
}): Promise<any> => {
  console.log(userData);
  try {
    const response: AxiosResponse<any> = await axios.patch(
      `${apiUrl}/users/update`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      }
    );
    const updatedUser: any = response.data;
    const user = User.fromJson(updatedUser);
    console.log(user);
    return user;
  } catch (error) {
    return error;
  }
}


export const getAllUsers = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const usersData: any = response.data;
    const users = User.fromJsonArray(usersData);
    return users;
  } catch (error) {
    return error;
  }
}

export const getUserClubs = async (userId: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/users/clubs`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const clubsData: any = response.data;
    const clubs = clubsData.map((clubPosition: ClubPosition) => clubPosition.club);
    return clubs;
  } catch (error) {
    return error;
  }
}