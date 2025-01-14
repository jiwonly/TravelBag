import common_airline_1 from "../assets/airline/common_airline_1.svg";
import common_airline_2 from "../assets/airline/common_airline_2.svg";
import osaka_airline_3 from "../assets/airline/osaka_airline_3.svg";
import osaka_airline_4 from "../assets/airline/osaka_airline_4.svg";
import newyork_airline_3 from "../assets/airline/newyork_airline_3.svg";
import newyork_airline_4 from "../assets/airline/newyork_airline_4.svg";
import danang_airline_3 from "../assets/airline/danang_airline_3.svg";
import danang_airline_4 from "../assets/airline/danang_airline_4.svg";
import bangkok_airline_3 from "../assets/airline/bangkok_airline_3.svg";
import bangkok_airline_4 from "../assets/airline/bangkok_airline_4.svg";
import tokyo_airline_3 from "../assets/airline/tokyo_airline_3.svg";
import tokyo_airline_4 from "../assets/airline/tokyo_airline_4.svg";

export function getAirlineImage(location_id, id) {
  switch (location_id) {
    case 1:
      if (id === 1) return common_airline_1;
      if (id === 2) return common_airline_2;
      if (id === 3) return osaka_airline_3;
      if (id === 4) return osaka_airline_4;
      break;
    case 2:
      if (id === 1) return common_airline_1;
      if (id === 2) return common_airline_2;
      if (id === 5) return newyork_airline_3;
      if (id === 6) return newyork_airline_4;
      break;
    case 3:
      if (id === 1) return common_airline_1;
      if (id === 2) return common_airline_2;
      if (id === 7) return danang_airline_3;
      if (id === 8) return danang_airline_4;
      break;
    case 4:
      if (id === 1) return common_airline_1;
      if (id === 2) return common_airline_2;
      if (id === 9) return bangkok_airline_3;
      if (id === 10) return bangkok_airline_4;
      break;
    case 5:
      if (id === 1) return common_airline_1;
      if (id === 2) return common_airline_2;
      if (id === 11) return tokyo_airline_3;
      if (id === 12) return tokyo_airline_4;
      break;
  }
}
