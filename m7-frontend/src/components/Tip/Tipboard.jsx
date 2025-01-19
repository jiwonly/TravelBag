import { useState, useEffect } from "react";
import CommonHeader from "../common/CommonHeader";
import PopularDestinations from "./PopularDestinations";
import MajorAirline from "./MajorAirline";
import ExchangeRate from "./ExchangeRate";
import EatEnjoyShop from "./EatEnjoyShop";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchLocationsAPI } from "@/api/api";
import { locationsState } from "@/api/atom";

const Tipboard = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const setLocations = useSetRecoilState(locationsState); // Recoil 상태 업데이트 함수 가져오기
  const locations = useRecoilValue(locationsState); // Recoil 상태 가져오기

  const handleSelectDestination = (id) => {
    setSelectedDestination((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await fetchLocationsAPI();
        setLocations(data);
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="mt-[29px]">
      <CommonHeader
        icon="travel"
        title="여행 팁"
        memo="원하는 여행지를 선택하세요."
      />
      <div className="flex px-[30px] mb-[20px] flex-col items-start flex-[1_0_0] self-stretch rounded-b-[16px] border-[1px] bg-[var(--White,_#FFF)]">
        <PopularDestinations
          selectedId={selectedDestination}
          showContent={handleSelectDestination}
        />
        {selectedDestination && (
          <>
            <MajorAirline location_id={selectedDestination} />
            <ExchangeRate location_id={selectedDestination} />
            <EatEnjoyShop location_id={selectedDestination} />
          </>
        )}
      </div>
    </div>
  );
};

export default Tipboard;
