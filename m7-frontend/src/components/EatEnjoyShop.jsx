import EESItem from "./EESItem";
import { AirlineList } from "@/util/get-airline-list";

const EatEnjoyShop = ({ destinationId }) => {
  const eats =
    AirlineList.find((item) => item.destinationId === destinationId)?.eat || [];

  const enjoys =
    AirlineList.find((item) => item.destinationId === destinationId)?.enjoy ||
    [];

  const shops =
    AirlineList.find((item) => item.destinationId === destinationId)?.shop ||
    [];

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
              destinationId={destinationId}
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
              destinationId={destinationId}
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
              destinationId={destinationId}
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
