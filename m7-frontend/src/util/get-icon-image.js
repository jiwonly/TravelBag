import bag from "@/assets/icon/bag.svg";
import home from "@/assets/icon/home.svg";
import trash from "@/assets/icon/trash.svg";
import travel from "@/assets/icon/travel.svg";

export function getIconImage(icon) {
  switch (icon) {
    case "bag":
      return bag;
    case "home":
      return home;
    case "trash":
      return trash;
    case "travel":
      return travel;
  }
}
