import axiosInstance from "./axiosInstance";
import { API_URL } from "../constants/API_URL";
import type { MyInfoType } from "../types/myInfo";

export const getUserInfo = async (targetId: number) => {
  try {
    const response = await axiosInstance.get(`${API_URL.USER}/${targetId}`);
    return response.data.data;
  } catch (error) {
    console.error("error:", error);
  }
};

export const updateUserInfo = async (data: MyInfoType) => {
  try {
    const userId = localStorage.getItem("userId");

    const response = await axiosInstance.patch(
      `${API_URL.USER}/${userId}`,
      data
    );
    console.log("Update Response:", response);
    return response.data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
};

export const deleteUserAccount = async () => {
  try {
    const userId = localStorage.getItem("userId");
    const response = await axiosInstance.delete(`${API_URL.USER}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
};
