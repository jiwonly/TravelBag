import axios from "axios";

export const API_BASE_URL = "https://13.125.254.94:8080";

// CORS 설정하기!! -> 백엔드

export const registerUserAPI = async (email, name, password, phone) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/register`, {
      email,
      name,
      password,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUserAPI = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

// 홈화면 사용자 가방 조회
export const fetchBagsAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/bags`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bags:", error);
    throw error;
  }
};

// 홈화면 템플릿 조회
export const fetchTemplateAPI = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/template`, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching template:", error);
    throw error;
  }
};

// 홈화면 가방 생성
export const createBagAPI = async (userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/bags/template`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating bag:", error);
    throw error;
  }
};

// 챙길 것들 가방 조회
export const fetchBagDetailsAPI = async (userId, bagId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/bags/${bagId}/name`, {
      params: { userId, bagId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bag details:", error);
    throw error;
  }
};

// 챙길 것들 가방 이름 수정
export const updateBagNameAPI = async (userId, bagId, name) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/bags/${bagId}`, {
      userId,
      bagId,
      name,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating bag name:", error);
    throw error;
  }
};

// 챙길 것들 가방 삭제
export const deleteBagAPI = async (userId, bagId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/bags/${bagId}`, {
      data: { userId, bagId },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting bag:", error);
    throw error;
  }
};

// 챙길 것들 물품 조회
export const fetchItemDetailsAPI = async (userId, bagId, itemId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/bags/${bagId}/item/${itemId}`,
      { params: { userId, bagId, itemId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw error;
  }
};

// 챙길 것들 물품 자체 생성
export const createItemAPI = async (userId, bagId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/bags/${bagId}/item`,
      {
        userId,
        bagId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// 물품 자체 삭제
export const deleteItemAPI = async (userId, bagId, itemId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/bags/${bagId}/item/${itemId}`,
      { data: { userId, bagId, itemId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

// 추천 준비물 전체 조회
export const fetchRecommendedItemsAPI = async (userId, bagId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/bags/${bagId}/reItem`,
      { params: { userId, bagId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended items:", error);
    throw error;
  }
};

// 추천 준비물 추가
export const addRecommendedItemAPI = async (userId, bagId, reItemId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/bags/${bagId}/reItem/${reItemId}`,
      {
        userId,
        bagId,
        reItemId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding recommended item:", error);
    throw error;
  }
};

// 여행지 목록 조회
export const fetchLocationsAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/location`);
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
      `${API_BASE_URL}/location/exchange-rate/${location_id}`,
      { params: { location_id } }
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
      `${API_BASE_URL}/location/airline/${location_id}`,
      { params: { location_id } }
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
      `${API_BASE_URL}/location/restaurant/${location_id}`,
      { params: { location_id } }
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
      `${API_BASE_URL}/location/attraction/${location_id}`,
      { params: { location_id } }
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
      `${API_BASE_URL}/location/souvenir/${location_id}`,
      { params: { location_id } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching souvenirs:", error);
    throw error;
  }
};

// 회원가입
export const signupAPI = async (name) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/member`, { name });
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

// // component 사용 예시
// const TravelAPI = ({ location_id }) => {
//   const [locations, setLocations] = useRecoilState(locationsState);
//   const [exchangeRates, setExchangeRates] = useRecoilState(exchangeRatesState);
//   const [airlines, setAirlines] = useRecoilState(airlinesState);
//   const [restaurants, setRestaurants] = useRecoilState(restaurantsState);
//   const [attractions, setAttractions] = useRecoilState(attractionsState);
//   const [souvenirs, setSouvenirs] = useRecoilState(souvenirsState);
//   const setSignupMessage = useSetRecoilState(signupMessageState);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         const data = await fetchLocationsAPI();
//         setLocations(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchLocations();
//   }, []);

//   useEffect(() => {
//     if (location_id) {
//       const fetchDataForLocation = async () => {
//         try {
//           const exchangeRates = await fetchExchangeRatesAPI(location_id);
//           const airlines = await fetchAirlinesAPI(location_id);
//           const restaurants = await fetchRestaurantsAPI(location_id);
//           const attractions = await fetchAttractionsAPI(location_id);
//           const souvenirs = await fetchSouvenirsAPI(location_id);

//           setExchangeRates(exchangeRates);
//           setAirlines(airlines);
//           setRestaurants(restaurants);
//           setAttractions(attractions);
//           setSouvenirs(souvenirs);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchDataForLocation();
//     }
//   }, [location_id]);

//   return null;
// };

// export default TravelAPI;

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
