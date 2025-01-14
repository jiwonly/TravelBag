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

export function getShopImage(id) {
  switch (id) {
    case 1:
      return shop_Osaka_1;
    case 2:
      return shop_Osaka_2;
    case 3:
      return shop_NewYork_1;
    case 4:
      return shop_NewYork_2;
    case 5:
      return shop_DaNang_1;
    case 6:
      return shop_DaNang_2;
    case 7:
      return shop_BangKok_1;
    case 8:
      return shop_BangKok_2;
    case 9:
      return shop_BangKok_3;
    case 10:
      return shop_ToKyo_1;
    case 11:
      return shop_ToKyo_2;
  }
}
