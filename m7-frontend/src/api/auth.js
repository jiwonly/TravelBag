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
      withCredentials: true,
    });
    const accessToken = response.data.accessToken;

    if (!accessToken) {
      throw new Error("Access token not found in response.");
    }

    localStorage.setItem("authToken", accessToken); // 토큰 저장
    console.log("Access Token fetched and stored:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to fetch access token:", error);
    return null;
  }
};

// 로그아웃 함수
export const postLogoutAPI = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found in localStorage.");
      throw new Error("Token not found in localStorage");
    }
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // 세션 쿠키 포함
      }
    );
    console.log("Logout successful:", response.data);

    localStorage.removeItem("token"); // 로그아웃 후 토큰 삭제
    return response.data;
  } catch (error) {
    console.error("Failed to logout:", error);
    return {
      error: error.message || "Failed to logout",
    };
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
