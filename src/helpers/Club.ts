import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../constants/api";
import Club, { ClubData } from "../models/Club";
import User from "../models/User";

export const createClub = async (clubData: ClubData): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${apiUrl}/clubs`,
      clubData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const createdClub: any = response.data;
    const club = Club.fromJson(createdClub);
    return club;
  } catch (error) {
    throw error;
  }
};

export const getAllClubs = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/clubs`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const clubsData: any = response.data;
    const clubs = Club.fromJsonArray(clubsData);
    return clubs;
  } catch (error) {
    throw error;
  }
}


export const getClubMembers = async (clubId: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiUrl}/clubs/${clubId}/roles`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const membersData: any = response.data;
    const members = membersData.map((member: User) => User.fromJson(member));
    console.log(members);
    return members;
  } catch (error) {
    throw error;
  }
}


export const addClubMember = async (clubId: number, userId: number): Promise<any> => {
  try {
    await axios.post(
      `${apiUrl}/clubs/${clubId}/members`,
      { userId },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

  } catch (error) {
    throw error;
  }
}