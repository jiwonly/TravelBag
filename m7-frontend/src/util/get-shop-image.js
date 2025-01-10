import shop_ToKyo_1 from "../assets/shop/shop_ToKyo_1.svg";
import shop_ToKyo_2 from "../assets/shop/shop_ToKyo_2.svg";

export function getShopImage(location_id, id) {
  switch (location_id) {
    case 1:
      return `shop_Osaka_${id}`; // 이 경우의 이미지는 정확한 경로 처리 필요
    case 2:
      return `shop_NewYork_${id}`; // 이 경우의 이미지는 정확한 경로 처리 필요
    case 3:
      return `shop_DaNang_${id}`; // 이 경우의 이미지는 정확한 경로 처리 필요
    case 4:
      return `shop_BangKok_${id}`; // 이 경우의 이미지는 정확한 경로 처리 필요
    case 5:
      if (id === 1) return shop_ToKyo_1; // id가 1일 때 Tokyo 이미지 1 사용
      if (id === 2) return shop_ToKyo_2; // id가 2일 때 Tokyo 이미지 2 사용
      break;
    default:
      return null; // 기본값으로 null 반환하여 이미지 없는 경우 처리
  }
}
