import axios from "axios";
import React, { useEffect } from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  locationsState,
  exchangeRatesState,
  airlinesState,
  restaurantsState,
  attractionsState,
  souvenirsState,
  signupMessageState,
} from "./atom";

export const API_BASE_URL = "http://localhost:8080";

// CORS 설정하기!! -> 백엔드

const TravelAPI = () => {
  const [locations, setLocations] = useRecoilState(locationsState);
  const [exchangeRates, setExchangeRates] = useRecoilState(exchangeRatesState);
  const [airlines, setAirlines] = useRecoilState(airlinesState);
  const [restaurants, setRestaurants] = useRecoilState(restaurantsState);
  const [attractions, setAttractions] = useRecoilState(attractionsState);
  const [souvenirs, setSouvenirs] = useRecoilState(souvenirsState);
  const setSignupMessage = useSetRecoilState(signupMessageState);

  // 1. 여행지 목록 조회
  const fetchLocations = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/location`);
      setLocations(response.data);
      console.log("Locations:", locations);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  // 2. 여행지별 환율 조회
  const fetchExchangeRates = async (location_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/exchange-rate/${location_id}`
      );
      setExchangeRates(response.data);
      console.log(`Exchange Rate for Location ${location_id}:`, exchangeRates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  // 3. 여행지별 주요 항공사 조회
  const fetchAirlines = async (location_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/airline/${location_id}`
      );
      setAirlines(response.data);
    } catch (error) {
      console.error("Error fetching airlines:", error);
    }
  };

  const fetchRestaurants = async (location_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/restaurant/${location_id}`
      );
      setRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const fetchAttractions = async (location_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/attraction/${location_id}`
      );
      setAttractions(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const fetchSouvenirs = async (location_id) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/souvenir/${location_id}`
      );
      setSouvenirs(response.data);
    } catch (error) {
      console.error("Error fetching souvenirs:", error);
    }
  };

  const signup = async (name) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/member`, {
        name: name,
      });
      setSignupMessage(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  // 자동으로 데이터를 가져오기 위한 useEffect
  useEffect(() => {
    fetchLocations();
    fetchExchangeRates();
    fetchAirlines();
    fetchRestaurants();
    fetchAttractions();
    fetchSouvenirs();
  }, []);

  return null;
};

export default TravelAPI;

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
