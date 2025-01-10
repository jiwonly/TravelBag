import enjoy_ToKyo_1 from "../assets/enjoy/enjoy_ToKyo_1.svg";
import enjoy_ToKyo_2 from "../assets/enjoy/enjoy_ToKyo_2.svg";
import enjoy_ToKyo_3 from "../assets/enjoy/enjoy_ToKyo_3.svg";
import enjoy_ToKyo_4 from "../assets/enjoy/enjoy_ToKyo_4.svg";
import enjoy_ToKyo_5 from "../assets/enjoy/enjoy_ToKyo_5.svg";

export function getEnjoyImage(location_id, id) {
  switch (location_id) {
    case 1:
      return `enjoy_Osaka_${id}.svg`;
    case 2:
      return `enjoy_NewYork_${id}.svg`;
    case 3:
      return `enjoy_DaNang_${id}.svg`;
    case 4:
      return `enjoy_BangKok_${id}.svg`;
    case 5:
      if (id === 1) return enjoy_ToKyo_1;
      if (id === 2) return enjoy_ToKyo_2;
      if (id === 3) return enjoy_ToKyo_3;
      if (id === 4) return enjoy_ToKyo_4;
      if (id === 5) return enjoy_ToKyo_5;
      break;
  }
}
