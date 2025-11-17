import axiosInstance from "./axiosInstance";
import { API_URL } from "../constants/API_URL";
import type { LoginRequestType, SignupRequestType } from "../types/auth";

export const postLogin = async (data: LoginRequestType) => {
  try {
    const response = await axiosInstance.post(API_URL.LOGIN, data);
    return { success: response.data.success, data: response.data.data };
  } catch (error) {
    console.error("Login API error:", error);
    return {
      success: false,
      data: null,
    };
  }
};

export const postSignup = async () => {
  try {
    const response = await axiosInstance.post(API_URL.USER, {
      username: "cy3",
      password: "Test1234!",
      name: "이채영",
      email: "cy@example.com",
      age: 24,
    });
    return response.data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
