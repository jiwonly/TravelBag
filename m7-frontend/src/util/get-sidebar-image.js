import bag from "./../assets/sidebar/bag.svg";
import onbag from "./../assets/sidebar/onbag.svg";
import home from "./../assets/sidebar/home.svg";
import onhome from "./../assets/sidebar/onhome.svg";
import travel from "./../assets/sidebar/travel.svg";
import ontravel from "./../assets/sidebar/ontravel.svg";
import logout from "./../assets/sidebar/logout.svg";

export function sidebarImage(id, isClicked) {
  switch (id) {
    case 0:
      return isClicked ? onhome : home;
    case 1:
      return isClicked ? onbag : bag;
    case 2:
      return isClicked ? ontravel : travel;
    case 3:
      return logout;
    default:
      return home;
  }
}
