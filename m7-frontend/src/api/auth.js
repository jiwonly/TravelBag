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
    const token = localStorage.getItem("authToken"); // localStorage에서 토큰 가져오기
    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {}, // Body
      {
        headers: {
          Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
        },
        withCredentials: true, // 세션 쿠키 포함
      }
    );

    console.log("Logout API response:", response.data);
    localStorage.removeItem("authToken"); // 토큰 제거
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
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
