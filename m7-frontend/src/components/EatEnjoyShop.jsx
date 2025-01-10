import EESItem from "./EESItem";
import { AirlineList } from "@/util/get-airline-list";

const EatEnjoyShop = ({ location_id }) => {
  const eats =
    AirlineList.find((item) => item.location_id === location_id)?.eat || [];

  const enjoys =
    AirlineList.find((item) => item.location_id === location_id)?.enjoy || [];

  const shops =
    AirlineList.find((item) => item.location_id === location_id)?.shop || [];

  return (
    <div className="mt-[20px] mb-[50px] ">
      <div className="text-[17px] text-gray-900 font-bold">
        맛보고, 즐기고, 담아가기
      </div>
      <div className="text-[13px] text-gray-500 mb-[10px]">
        식당 사진을 클릭하면 구글맵으로 연결됩니다.
      </div>
      <div className="flex flex-col items-start">
        <li className="text-[17px] font-bold py-5">맛집</li>
        <div className="flex flex-row gap-5 mb-[20px]">
          {eats.map((item) => (
            <EESItem
              content="eat"
              location_id={location_id}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <li className="text-[17px] font-bold py-5">관광지</li>
        <div className="flex flex-row gap-5 mb-[20px]">
          {enjoys.map((item) => (
            <EESItem
              content="enjoy"
              location_id={location_id}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <li className="text-[17px] font-bold py-5">기념품</li>
        <div className="flex flex-row gap-5 mb-[20px]">
          {shops.map((item) => (
            <EESItem
              content="shop"
              location_id={location_id}
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatEnjoyShop;
