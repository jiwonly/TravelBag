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
      isAuthenticated: false,
      kakaoId: null,
      email: null,
      nickname: null,
    };
  }
};

// export const fetchAccessTokenAPI = async () => {
//   try {
//     console.log("[fetchAccessTokenAPI] Attempting to fetch access token...");

//     // 백엔드의 /api/auth/token 엔드포인트 호출
//     const response = await axios.get(`${API_BASE_URL}/api/auth/token`, {
//       withCredentials: true, // 세션 쿠키 포함
//     });

//     // 응답 데이터 확인
//     console.log("[fetchAccessTokenAPI] Access Token Response:", response.data);

//     // 토큰 추출
//     const accessToken = response.data?.accessToken;

//     if (!accessToken) {
//       // 토큰이 없을 경우 에러 던짐
//       throw new Error("Access token not found in response.");
//     }

//     console.log("[fetchAccessTokenAPI] Access Token fetched:", accessToken);

//     // 호출한 곳에서 토큰 저장하도록 반환
//     return accessToken;
//   } catch (error) {
//     // 에러 디버깅 정보 출력
//     console.error("[fetchAccessTokenAPI] Failed to fetch access token:", {
//       message: error.message,
//       status: error.response?.status || "No status", // HTTP 상태 코드
//       data: error.response?.data || "No response data", // 응답 데이터
//     });

//     // 에러 발생 시 null 반환
//     return null;
//   }
// };

// 로그아웃 백엔드에게 알리기
export const postLogoutAPI = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {}, // 로그아웃 요청의 body가 비어있는 경우
      {
        withCredentials: true, // 세션 쿠키 포함 (쿠키 인증용)
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
