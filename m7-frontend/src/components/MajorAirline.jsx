import AirlineItem from "./AirlineItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import { airlinesState } from "../api/atom";
import { fetchAirlinesAPI } from "../api/api";

const MajorAirline = ({ location_id }) => {
  const airlines = useRecoilValue(airlinesState);
  const setAirlines = useSetRecoilState(airlinesState);

  const filteredAirlines = airlines.filter(
    (item) => item.location === location_id
  );

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        if (location_id) {
          const data = await fetchAirlinesAPI(location_id);
          setAirlines((prev) => [
            ...prev.filter((item) => item.location !== location_id),
            ...data.map((airline) => ({
              location: location_id,
              airline,
            })),
          ]);
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
        {filteredAirlines.map((item) => (
          <AirlineItem
            key={item.airline.id}
            id={item.airline.id}
            name={item.airline.name}
            url={item.airline.url}
          />
        ))}
      </div>
    </div>
  );
};

export default MajorAirline;
