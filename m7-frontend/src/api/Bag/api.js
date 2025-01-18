import axios from "axios";
import { API_BASE_URL } from "../../api/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (error.response?.status === 401 && refreshToken) {
      try {
        const response = await api.post("/refresh-token", {
          refreshToken,
        });
        const newAccessToken = response.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest); // 재시도
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

const apiRequest = async (method, url, data = null) => {
  try {
    const response = await api({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(
      `Error during ${method.toUpperCase()} request to ${url}:`,
      error
    );
    throw error;
  }
};

// API 함수들

// 1. 가방 생성 (홈 화면)
export const createBagAPI = (memberId, templateId, bagData) =>
  apiRequest(
    "post",
    `/member/${memberId}/bags/template/${templateId}`,
    bagData
  );

// 2. 가방 이름 수정 (챙길것들 화면)
export const updateBagNameAPI = (memberId, bagId, newName) =>
  apiRequest("patch", `/member/${memberId}/bags/${bagId}/name`, {
    name: newName,
  });

// 3. 가방 전체 조회 (홈 화면)
export const getBagsAPI = (memberId) =>
  apiRequest("get", `/member/${memberId}/bags`);

// 임시 가방 전체 조회 - 지원
export const getBagsAPI2 = async (memberId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/member/${memberId}/bags`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 4. 가방 상세 조회 (챙길것들 화면)
export const getBagDetailsAPI = (memberId, bagId) =>
  apiRequest("get", `/member/${memberId}/bags/${bagId}`);

// 5. 가방 삭제 (챙길것들 화면)
export const deleteBagAPI = (memberId, bagId) =>
  apiRequest("delete", `/member/${memberId}bags/${bagId}`);

// 6. 추천 준비물 추가
export const addRecommendItemAPI = (bagId, recommendItemData) =>
  apiRequest(
    "post",
    `/member/bags/${bagId}/recommendeditem`,
    recommendItemData
  );

// 7. 추천 준비물 조회
export const getRecommendItemsAPI = (memberId) =>
  apiRequest("get", `/member/${memberId}/recommendeditems`);

// 8. 물품 조회
export const getItemsAPI = (memberId, bagId) =>
  apiRequest("get", `/member/${memberId}/bags/${bagId}/item`);

// 9. 물품 생성
export const addItemAPI = (memberId, bagId, itemData) =>
  apiRequest("post", `/member/${memberId}/bags/${bagId}/item`, itemData);

// 10. 물품 삭제
export const deleteItemAPI = (memberId, bagId, itemId) =>
  apiRequest("delete", `/member/${memberId}/bags/${bagId}/item/${itemId}`);
