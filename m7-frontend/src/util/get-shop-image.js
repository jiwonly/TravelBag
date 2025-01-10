import shop_ToKyo_1 from "../assets/shop/shop_ToKyo_1.svg";
import shop_ToKyo_2 from "../assets/shop/shop_ToKyo_2.svg";

export function getShopImage(destinationId, souvenirId) {
  switch (destinationId) {
    case 1:
      return `shop_Osaka_${souvenirId}`;
    case 2:
      return `shop_NewYork_${souvenirId}`;
    case 3:
      return `shop_DaNang_${souvenirId}`;
    case 4:
      return `shop_Bangkok_${souvenirId}`;
    case 5:
      return `shop_ToKyo_${souvenirId}`;
  }
}
