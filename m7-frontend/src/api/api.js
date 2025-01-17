import axios from "axios";

export const API_BASE_URL = "https://www.jionly.tech";

// 여행지 목록 조회
export const fetchLocationsAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/location`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

// 여행지별 환율 조회
export const fetchExchangeRatesAPI = async (location_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/location/exchange-rate/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};

// 여행지별 주요 항공사 조회
export const fetchAirlinesAPI = async (location_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/location/airline/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airlines:", error);
    throw error;
  }
};

// 여행지별 맛집 조회
export const fetchRestaurantsAPI = async (location_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/restaurant/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

// 여행지별 관광지 조회
export const fetchAttractionsAPI = async (location_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/attraction/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching attractions:", error);
    throw error;
  }
};

// 여행지별 기념품 조회
export const fetchSouvenirsAPI = async (location_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/souvenir/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching souvenirs:", error);
    throw error;
  }
};

// 피오리니 복붙

// const api = axios.create({
//     baseURL: "http://localhost:3000",
// });

// // 요청 인터셉터 설정
// api.interceptors.request.use(
//     (config) => {
//       // 요청을 보내기 전에 access token을 헤더에 추가
//       const accessToken = localStorage.getItem("accessToken");
//       if (accessToken) {
//         config.headers["Authorization"] = `Bearer ${accessToken}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   // 응답 인터셉터 설정
//   api.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config;
//       const memberId = localStorage.getItem("member_id");

//       // 401 에러가 발생했을 경우
//       if (error.response.status === 401 && !originalRequest._retry) {
//         //console.log("401 발생");
//         originalRequest._retry = true;
//         try {
//           // refresh token을 사용해 access token을 재발급 받기
//           //console.log("accesstoken 재발급");
//           const refreshToken = localStorage.getItem("refresh_token");

//           const response = await axios.get(
//             `https://emotionfeedback.site/member/${memberId}/refresh`,
//             {
//               headers: { Authorization: `Bearer ${refreshToken}` },
//             }
//           );

//           if (response.status === 200) {
//             // 새로운 access token, refresh token 저장

//             //console.log("accesstoken, refreshtoken 저장");

//             const newAccessToken = response.data.accessToken;
//             const newRefreshToken = response.data.refreshToken;

//             localStorage.setItem("access_token", newAccessToken);
//             localStorage.setItem("refresh_token", newRefreshToken);

//             // 원래 요청에 새로운 access token을 설정
//             originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//             // 재시도
//             return api(originalRequest);
//           }
//         } catch (refreshError) {
//           // refresh token 갱신 실패
//           console.error("Refresh token failed", refreshError);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );

//   export default api;
