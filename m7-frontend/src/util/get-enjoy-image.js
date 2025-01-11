import enjoy_ToKyo_1 from "../assets/enjoy/enjoy_ToKyo_1.svg";
import enjoy_ToKyo_2 from "../assets/enjoy/enjoy_ToKyo_2.svg";
import enjoy_ToKyo_3 from "../assets/enjoy/enjoy_ToKyo_3.svg";
import enjoy_ToKyo_4 from "../assets/enjoy/enjoy_ToKyo_4.svg";
import enjoy_ToKyo_5 from "../assets/enjoy/enjoy_ToKyo_5.svg";
import enjoy_Osaka_1 from "../assets/enjoy/enjoy_Osaka_1.svg";
import enjoy_Osaka_2 from "../assets/enjoy/enjoy_Osaka_2.svg";
import enjoy_Osaka_3 from "../assets/enjoy/enjoy_Osaka_3.svg";
import enjoy_Osaka_4 from "../assets/enjoy/enjoy_Osaka_4.svg";
import enjoy_Osaka_5 from "../assets/enjoy/enjoy_Osaka_5.svg";
import enjoy_NewYork_1 from "../assets/enjoy/enjoy_NewYork_1.svg";
import enjoy_NewYork_2 from "../assets/enjoy/enjoy_NewYork_2.svg";
import enjoy_NewYork_3 from "../assets/enjoy/enjoy_NewYork_3.svg";
import enjoy_NewYork_4 from "../assets/enjoy/enjoy_NewYork_4.svg";
import enjoy_NewYork_5 from "../assets/enjoy/enjoy_NewYork_5.svg";
import enjoy_DaNang_1 from "../assets/enjoy/enjoy_DaNang_1.svg";
import enjoy_DaNang_2 from "../assets/enjoy/enjoy_DaNang_2.svg";
import enjoy_DaNang_3 from "../assets/enjoy/enjoy_DaNang_3.svg";
import enjoy_DaNang_4 from "../assets/enjoy/enjoy_DaNang_4.svg";
import enjoy_DaNang_5 from "../assets/enjoy/enjoy_DaNang_5.svg";
import enjoy_BangKok_1 from "../assets/enjoy/enjoy_BangKok_1.svg";
import enjoy_BangKok_2 from "../assets/enjoy/enjoy_BangKok_2.svg"
import enjoy_BangKok_3 from "../assets/enjoy/enjoy_BangKok_3.svg";
import enjoy_BangKok_4 from "../assets/enjoy/enjoy_BangKok_4.svg";
import enjoy_BangKok_5 from "../assets/enjoy/enjoy_BangKok_5.svg";


export function getEnjoyImage(location_id, id) {
  switch (location_id) {
    case 1:
      if (id === 1) return enjoy_Osaka_1;
      if (id === 2) return enjoy_Osaka_2;
      if (id === 3) return enjoy_Osaka_3;
      if (id === 4) return enjoy_Osaka_4;
      if (id === 5) return enjoy_Osaka_5;
      break;
    case 2:
      if (id === 1) return enjoy_NewYork_1;
      if (id === 2) return enjoy_NewYork_2;
      if (id === 3) return enjoy_NewYork_3;
      if (id === 4) return enjoy_NewYork_4;
      if (id === 5) return enjoy_NewYork_5;
      break;
    case 3:
      if (id === 1) return enjoy_DaNang_1;
      if (id === 2) return enjoy_DaNang_2;
      if (id === 3) return enjoy_DaNang_3;
      if (id === 4) return enjoy_DaNang_4;
      if (id === 5) return enjoy_DaNang_5;
      break;
    case 4:
      if (id === 1) return enjoy_BangKok_1;
      if (id === 2) return enjoy_BangKok_2;
      if (id === 3) return enjoy_BangKok_3;
      if (id === 4) return enjoy_BangKok_4;
      if (id === 5) return enjoy_BangKok_5;
      break;
    case 5:
      if (id === 1) return enjoy_ToKyo_1;
      if (id === 2) return enjoy_ToKyo_2;
      if (id === 3) return enjoy_ToKyo_3;
      if (id === 4) return enjoy_ToKyo_4;
      if (id === 5) return enjoy_ToKyo_5;
      break;
  }
}
