import daehan from "../assets/airline/daehan.svg";
import airbusan from "../assets/airline/airbusan.svg";
import airseoul from "../assets/airline/airseoul.svg";
import tway from "../assets/airline/tway.svg";
import asiana from "../assets/airline/asiana.svg";

export function getAirlineImage(id) {
  switch (id) {
    case 1:
      return daehan;
    case 2:
      return airseoul;
    case 3:
      return asiana;
    case 4:
      return airbusan;
    case 5:
      return tway;
  }
}
