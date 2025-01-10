import AirlineItem from "./AirlineItem";
import { AirlineList } from "@/util/get-airline-list";

const MajorAirline = ({ location_id }) => {
  const airlines =
    AirlineList.find((item) => item.location_id === location_id)
      ?.airlines || [];

  return (
    <div className="mt-[20px] mb-[50px] ">
      <div className="text-[17px] text-gray-900 font-bold">주요 항공사</div>
      <div className="text-[13px] text-gray-500 mb-[15px]">
        많이 이용하는 주요 항공사입니다. 웹 사이트를 방문해 수하물 규정과 같은
        정보를 얻어보세요.
      </div>
      <div className="flex flex-row gap-5">
        {airlines.map((item) => (
          <AirlineItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MajorAirline;
