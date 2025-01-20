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

// // 로그아웃 함수 추가
// export const postLogoutAPI = async () => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/auth/logout`,
//       {},
//       {
//         withCredentials: true, // 세션 쿠키 포함
//       }
//     );
//     console.log("Logout successful:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to logout:", error.response || error.message);
//     throw error; // 에러를 상위 호출자로 전달
//   }
// };

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
