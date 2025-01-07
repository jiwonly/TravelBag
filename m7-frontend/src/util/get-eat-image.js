import crepe_Tokyo from "../assets/eat/crepe_Tokyo.svg";
import donkatsu_Tokyo from "../assets/eat/donkatsu_Tokyo.svg";
import gyukatsu_Tokyo from "../assets/eat/gyukatsu_Tokyo.svg";
import sioramen_Tokyo from "../assets/eat/sioramen_Tokyo.svg";
import tsukemen_Tokyo from "../assets/eat/tsukemen_Tokyo.svg";

export function getEatImage5(id) {
  switch (id) {
    case 1:
      return crepe_Tokyo;
    case 2:
      return donkatsu_Tokyo;
    case 3:
      return gyukatsu_Tokyo;
    case 4:
      return sioramen_Tokyo;
    case 5:
      return tsukemen_Tokyo;
  }
}
