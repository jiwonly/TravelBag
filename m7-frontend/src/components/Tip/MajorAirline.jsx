import AirlineItem from "./AirlineItem.jsx";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import { airlinesState } from "../../api/atom.js";
import { fetchAirlinesAPI } from "../../api/api.js";

const MajorAirline = ({ location_id }) => {
  const [airlines, setAirlines] = useRecoilState(airlinesState);

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const response = await fetchAirlinesAPI(location_id);
        if (Array.isArray(response.airlines)) {
          setAirlines(response.airlines);
        } else {
          console.error("Invalid airlines response format:", response);
        }
      } catch (error) {
        console.error("Error fetching airlines:", error);

      }
    };

    fetchAirlines();
  }, [location_id]);


  return (
    <div className="mt-[20px] mb-[50px] ">
      <div className="text-[17px] text-gray-900 font-bold">주요 항공사</div>
      <div className="text-[13px] text-gray-500 mb-[15px]">
        많이 이용하는 주요 항공사입니다. 웹 사이트를 방문해 수하물 규정과 같은
        정보를 얻어보세요.
      </div>
      <div className="flex flex-row gap-5">
        {airlines.map((airline) => (
          <AirlineItem
            location_id={location_id}
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
