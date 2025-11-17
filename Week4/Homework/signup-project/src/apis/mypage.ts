import axiosInstance from "./axiosInstance";
import { API_URL } from "../constants/API_URL";

export const getUserInfo = async () => {
  try {
    const userId = localStorage.getItem("userId");
    // console.log("Stored userId:", userId);
    const response = await axiosInstance.get(`${API_URL.USER}/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error("Get User Info API error:", error);
    throw error;
  }
};
