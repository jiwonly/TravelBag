import axios from "axios";
import { API_BASE_URL } from "./api.js";
import { atom } from "recoil";

export const getAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/status`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    console.log("Auth Status Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch auth status:", error);
    return {
      isAuthenticated: false,
      kakaoId: null,
      email: null,
      nickname: null,
    };
  }
};

export const fetchAccessTokenAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/token`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    const accessToken = response.data.accessToken;

    if (!accessToken) {
      throw new Error("Access token not found in response.");
    }

    console.log("Access Token fetched from API:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to fetch access token:", error);
    return null;
  }
};

export const postLogoutAPI = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true, // 세션 쿠키 포함
      }
    );
    console.log("Logout successful:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to logout:", error.response || error.message);
    throw error;
  }
};

// 로그인 안 쓸 때는 true로 변경
export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: undefined,
    kakaoId: null,
    email: null,
    nickname: null,
  },
});
