import axios from "axios";
import { API_BASE_URL } from "./api.js";
import { atom } from "recoil";

export const getAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/status`, {
      withCredentials: true, // 세션 쿠키 포함
    });
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
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

// 로그아웃 함수 추가
export const postLogoutAPI = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("토큰이 없습니다.");

    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더 추가
        },
        withCredentials: true, // 세션 쿠키 포함
      }
    );
    console.log("Logout successful:", response.data);
    localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 삭제 (필요 시)
    return response.data;
  } catch (error) {
    console.error("Failed to logout:", error.response || error.message);
    throw error; // 에러를 상위 호출자로 전달
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
