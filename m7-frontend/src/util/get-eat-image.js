import eat_ToKyo_1 from "../assets/eat/eat_ToKyo_1.svg";
import eat_ToKyo_2 from "../assets/eat/eat_ToKyo_2.svg";
import eat_ToKyo_3 from "../assets/eat/eat_ToKyo_3.svg";
import eat_ToKyo_4 from "../assets/eat/eat_ToKyo_4.svg";
import eat_ToKyo_5 from "../assets/eat/eat_ToKyo_5.svg";
import eat_Osaka_1 from "../assets/eat/eat_Osaka_1.svg";
import eat_Osaka_2 from "../assets/eat/eat_Osaka_2.svg";
import eat_Osaka_3 from "../assets/eat/eat_Osaka_3.svg";
import eat_Osaka_4 from "../assets/eat/eat_Osaka_4.svg";
import eat_Osaka_5 from "../assets/eat/eat_Osaka_5.svg";
import eat_NewYork_1 from "../assets/eat/eat_NewYork_1.svg";
import eat_NewYork_2 from "../assets/eat/eat_NewYork_2.svg";
import eat_NewYork_3 from "../assets/eat/eat_NewYork_3.svg";
import eat_NewYork_4 from "../assets/eat/eat_NewYork_4.svg";
import eat_DaNang_1 from "../assets/eat/eat_DaNang_1.svg";
import eat_DaNang_2 from "../assets/eat/eat_DaNang_2.svg";
import eat_DaNang_3 from "../assets/eat/eat_DaNang_3.svg";
import eat_DaNang_4 from "../assets/eat/eat_DaNang_4.svg";
import eat_DaNang_5 from "../assets/eat/eat_DaNang_5.svg";
import eat_BangKok_1 from "../assets/eat/eat_BangKok_1.svg";
import eat_BangKok_2 from "../assets/eat/eat_BangKok_2.svg";
import eat_BangKok_3 from "../assets/eat/eat_BangKok_3.svg";
import eat_BangKok_4 from "../assets/eat/eat_BangKok_4.svg";

export function getEatImage(location_id, id) {
  switch (location_id) {
    case 1:
      if (id === 1) return eat_Osaka_1;
      if (id === 2) return eat_Osaka_2;
      if (id === 3) return eat_Osaka_3;
      if (id === 4) return eat_Osaka_4;
      if (id === 5) return eat_Osaka_5;
      break;
    case 2:
      if (id === 1) return eat_NewYork_1;
      if (id === 2) return eat_NewYork_2;
      if (id === 3) return eat_NewYork_3;
      if (id === 4) return eat_NewYork_4;
      break;
    case 3:
      if (id === 1) return eat_DaNang_1;
      if (id === 2) return eat_DaNang_2;
      if (id === 3) return eat_DaNang_3;
      if (id === 4) return eat_DaNang_4;
      if (id === 5) return eat_DaNang_5;
      break;
    case 4:
      if (id === 1) return eat_BangKok_1;
      if (id === 2) return eat_BangKok_2;
      if (id === 3) return eat_BangKok_3;
      if (id === 4) return eat_BangKok_4;
      break;
    case 5:
      if (id === 1) return eat_ToKyo_1;
      if (id === 2) return eat_ToKyo_2;
      if (id === 3) return eat_ToKyo_3;
      if (id === 4) return eat_ToKyo_4;
      if (id === 5) return eat_ToKyo_5;
      break;
  }
}
