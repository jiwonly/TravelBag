import AirlineItem from "./AirlineItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import { airlinesState } from "../api/atom";
import { fetchAirlinesAPI } from "../api/api";

const MajorAirline = ({ location_id }) => {
  const airlines = useRecoilValue(airlinesState);
  const setAirlines = useSetRecoilState(airlinesState);

  // location_id에 따라 해당 항공사를 필터링
  const filteredAirlines =
    airlines.find((item) => item.location_id === location_id)?.airline || [];

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        if (location_id) {
          const data = await fetchAirlinesAPI(location_id);
          setAirlines((prev) =>
            prev.map((item) =>
              item.location_id === location_id
                ? { ...item, airline: data }
                : item
            )
          );
        }
      } catch (error) {
        console.error("Failed to fetch airlines:", error);
      }
    };

    fetchAirlines();
  }, [location_id, setAirlines]);

  return (
    <div className="mt-[20px] mb-[50px] ">
      <div className="text-[17px] text-gray-900 font-bold">주요 항공사</div>
      <div className="text-[13px] text-gray-500 mb-[15px]">
        많이 이용하는 주요 항공사입니다. 웹 사이트를 방문해 수하물 규정과 같은
        정보를 얻어보세요.
      </div>
      <div className="flex flex-row gap-5">
        {filteredAirlines.map((airline) => (
          <AirlineItem
            key={airline.id}
            id={airline.id}
            name={airline.name}
            url={airline.url}
          />
        ))}
      </div>
    </div>
  );
};

export default MajorAirline;
