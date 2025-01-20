import axios from "axios";
import { API_BASE_URL } from "./api.js";
import { atom } from "recoil";

export const getAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/status`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch auth status:", error);
    return {
      isAuthenticated: undefined,
      kakaoId: null,
      email: null,
      nickname: null,
    };
  }
};

export const postLogoutAPI = async () => {
  try {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    console.log("Token:", token); // 디버깅: 토큰 확인
    if (!token) throw new Error("Token not found"); // 토큰 없으면 예외 발생

    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {}, // 로그아웃 요청의 body가 비어있는 경우
      {
        withCredentials: true, // 세션 쿠키 포함 (쿠키 인증용)
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 인증용
        },
      }
    );
    console.log("Logout successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to logout:", error.response?.data || error.message);
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
