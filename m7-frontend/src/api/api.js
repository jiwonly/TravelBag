import axios from "axios";
import React, { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8080";

const TravelAPI = () => {
  const [locations, setLocations] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [signupMessage, setSignupMessage] = useState("");

  // 1. 여행지 목록 조회
  const fetchLocations = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/location`);
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  // 2. 여행지별 환율 조회
  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/location/exchange-rate`
      );
      setExchangeRates(response.data);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  // 3. 여행지별 주요 항공사 조회
  const fetchAirlines = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/location/airline`);
      setAirlines(response.data);
    } catch (error) {
      console.error("Error fetching airlines:", error);
    }
  };

  // 4. 회원가입
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
  }, []);

  // 데이터 확인을 위한 UI
  return (
    <div>
      <h1>Travel API Example</h1>

      {/* 여행지 목록 */}
      <section>
        <h2>Travel Locations</h2>
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              {location.name} ({location.country}) - Currency:{" "}
              {location.currency_unit}
            </li>
          ))}
        </ul>
      </section>

      {/* 여행지 환율 */}
      <section>
        <h2>Exchange Rates</h2>
        <ul>
          {exchangeRates.map((rate, index) => (
            <li key={index}>
              {rate.country} - {rate.currency_unit} : {rate.exchange_rate}
            </li>
          ))}
        </ul>
      </section>

      {/* 주요 항공사 */}
      <section>
        <h2>Airlines</h2>
        <ul>
          {airlines.map((airline) => (
            <li key={airline.id}>
              {airline.name} (<a href={airline.url}>Website</a>)
            </li>
          ))}
        </ul>
      </section>

      {/* 회원가입 */}
      <section>
        <h2>Signup</h2>
        <button onClick={() => signup("홍길동")}>Signup as 홍길동</button>
        {signupMessage && <p>{signupMessage}</p>}
      </section>
    </div>
  );
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
