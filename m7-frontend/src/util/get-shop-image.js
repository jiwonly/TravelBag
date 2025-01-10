import shop_ToKyo_1 from "../assets/shop/shop_ToKyo_1.svg";
import shop_ToKyo_2 from "../assets/shop/shop_ToKyo_2.svg";

export function getShopImage(location_id, souvenirId) {
  switch (location_id) {
    case 1:
      return `shop_Osaka_${souvenirId}.svg`;
    case 2:
      return `shop_NewYork_${souvenirId}.svg`;
    case 3:
      return `shop_DaNang_${souvenirId}.svg`;
    case 4:
      return `shop_Bangkok_${souvenirId}.svg`;
    case 5:
      return `shop_ToKyo_${souvenirId}.svg`;
  }
}
