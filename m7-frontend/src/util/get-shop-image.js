import shop_ToKyo_1 from "../assets/shop/shop_ToKyo_1.svg";
import shop_ToKyo_2 from "../assets/shop/shop_ToKyo_2.svg";
import shop_Osaka_1 from "../assets/shop/shop_Osaka_1.svg";
import shop_Osaka_2 from "../assets/shop/shop_Osaka_2.svg";
import shop_NewYork_1 from "../assets/shop/shop_NewYork_1.svg";
import shop_NewYork_2 from "../assets/shop/shop_NewYork_2.svg";
import shop_DaNang_1 from "../assets/shop/shop_DaNang_1.svg";
import shop_DaNang_2 from "../assets/shop/shop_DaNang_2.svg";
import shop_BangKok_1 from "../assets/shop/shop_BangKok_1.svg";
import shop_BangKok_2 from "../assets/shop/shop_BangKok_2.svg";
import shop_BangKok_3 from "../assets/shop/shop_BangKok_3.svg";

export function getShopImage(location_id, id) {
  switch (location_id) {
    case 1:
      if (id === 1) return shop_Osaka_1;
      if (id === 2) return shop_Osaka_2;
      break;
    case 2:
      if (id === 1) return shop_NewYork_1;
      if (id === 2) return shop_NewYork_2;
      break;
    case 3:
      if (id === 1) return shop_DaNang_1;
      if (id === 2) return shop_DaNang_2;
      break;
    case 4:
      if (id === 1) return shop_BangKok_1;
      if (id === 2) return shop_BangKok_2;
      if (id === 3) return shop_BangKok_3;
      break;
    case 5:
      if (id === 1) return shop_ToKyo_1; // id가 1일 때 Tokyo 이미지 1 사용
      if (id === 2) return shop_ToKyo_2; // id가 2일 때 Tokyo 이미지 2 사용
      break;
    default:
      return null; // 기본값으로 null 반환하여 이미지 없는 경우 처리
  }
}
