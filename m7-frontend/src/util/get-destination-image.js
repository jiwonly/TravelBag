import destinationImage_0 from "./../assets/destination/Osaka.svg";
import destinationImage_1 from "./../assets/destination/NewYork.svg";
import destinationImage_2 from "./../assets/destination/DaNang.svg";
import destinationImage_3 from "./../assets/destination/Bangkok.svg";
import destinationImage_4 from "./../assets/destination/Tokyo.svg";

export function getDestinationImage(location_id) {
  switch (location_id) {
    case 1:
      return destinationImage_0;
    case 2:
      return destinationImage_1;
    case 3:
      return destinationImage_2;
    case 4:
      return destinationImage_3;
    case 5:
      return destinationImage_4;
  }
}
