import axios from "axios";
import { API_BASE_URL } from "./api";
import { atom } from "recoil";


export const getAuthStatus = async () => {
  try {
    // const token = localStorage.getItem("authToken");
    const response = await axios.get(`${API_BASE_URL}/api/auth/status`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    console.log(response.data);
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

// 로그인 안 쓸 때는 true로 변경
export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    kakaoId: null,
    email: null,
    nickname: null,
  },
});
