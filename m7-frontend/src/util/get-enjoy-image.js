import dochungsa_Tokyo from "../assets/enjoy/dochungsa_Tokyo.svg";
import hills_Tokyo from "../assets/enjoy/hills_Tokyo.svg";
import scramble_Tokyo from "../assets/enjoy/scramble_Tokyo.svg";
import skytree_Tokyo from "../assets/enjoy/skytree_Tokyo.svg";
import tower_Tokyo from "../assets/enjoy/tower_Tokyo.svg";

export function getEnjoyImage5(id) {
  switch (id) {
    case 1:
      return dochungsa_Tokyo;
    case 2:
      return hills_Tokyo;
    case 3:
      return scramble_Tokyo;
    case 4:
      return skytree_Tokyo;
    case 5:
      return tower_Tokyo;
  }
}
