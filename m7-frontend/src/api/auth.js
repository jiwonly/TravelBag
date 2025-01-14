import axios from "axios";

export const getAuthStatus = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/status", {
      withCredentials: true, // 세션 쿠키 포함
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch auth status:", error);
    return { isAuthenticated: false };
  }
};
