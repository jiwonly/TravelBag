import axios from "axios";
import { API_BASE_URL } from "./api";

export const getAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/status`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch auth status:", error);
    return { isAuthenticated: false };
  }
};
