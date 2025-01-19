import axios from "axios";

export const API_BASE_URL = "https://api.jionly.tech";

// 회원 조회
export const getMemberAPI = async (memberId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/member/${memberId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching member:", error);
    throw error;
  }
};

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

// 가방 생성 API (홈 화면)
export const createBagAPI = async (memberId, templateId, bagName) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/member/${memberId}/bags/template/${templateId}`,
      { name: bagName }
    );
    return response.data;
  } catch (error) {
    console.error(`Error creating bag for member ${memberId}:`, error);
    throw error;
  }
};

// 가방 이름 수정 API (챙길것들 화면)
export const updateBagNameAPI = async (memberId, bagId, bagName) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/name`,
      { name: bagName }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating bag name for member ${memberId}, bag ${bagId}:`,
      error
    );
    throw error;
  }
};

// 가방 is_temporary 토글 API
export const toggleBagTemporaryAPI = async (memberId, bagId) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/toggle-temporary`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error toggling is_temporary for bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방 전체 조회 API (홈 화면)
export const getBagsAPI = async (memberId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/member/${memberId}/bags`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching bags for member ${memberId}:`, error);
    throw error;
  }
};

// 가방 상세 조회 API
export const getBagDetailsAPI = async (memberId, bagId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching details for bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방 삭제 API
export const deleteBagAPI = async (memberId, bagId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting bag ${bagId} for member ${memberId}:`, error);
    throw error;
  }
};

// 가방별 아이템 목록 조회 API
export const getBagItemsAPI = async (memberId, bagId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/feature/member/${memberId}/bag/${bagId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching items for bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방별 카테고리별 아이템 목록 조회 API
export const getBagItemsByCategoryAPI = async (memberId, bagId, categoryId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/item/category/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching items for category ${categoryId} in bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방별 아이템 생성 API
export const createBagItemAPI = async (
  memberId,
  bagId,
  categoryId,
  itemName
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/item/category/${categoryId}`,
      { name: itemName }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error creating item "${itemName}" in category ${categoryId} of bag ${bagId} for member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방별 아이템 is_packed 토글 API
export const toggleItemPackedAPI = async (memberId, bagId, itemId) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/item/${itemId}/toggle-packed`
    );
    return response.data;
  } catch (error) {
    console.error("Error toggling is_packed:", error);
  }
};

// 가방별 아이템 이름 수정 API
export const updateItemNameAPI = async (memberId, bagId, itemId, itemName) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/item/${itemId}/name`,
      { name: itemName }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating name for item ${itemId} in bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방별 아이템 삭제 API
export const deleteItemAPI = async (memberId, bagId, itemId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/item/${itemId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting item ${itemId} in bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 추천 아이템 전체 조회 API
export const getRecommendItemsAPI = async (memberId, bagId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/feature/member/${memberId}/bag/${bagId}/recommended-items`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching recommended items for bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 카테고리별 추천 아이템 조회 API
export const getRecommendItemsByCategoryAPI = async (
  memberId,
  bagId,
  categoryId
) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/recommendeditem/category/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching recommended items by category ${categoryId} for bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};

// 가방에 추천 아이템 추가 API
export const addRecommendItemAPI = async (
  memberId,
  bagId,
  categoryId,
  itemName
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/member/${memberId}/bags/${bagId}/recommendeditem/category/${categoryId}`,
      { name: itemName }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error adding recommended item "${itemName}" to category ${categoryId} in bag ${bagId} of member ${memberId}:`,
      error
    );
    throw error;
  }
};
