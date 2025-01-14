import { useState } from "react";
import CommonHeader from "./common/CommonHeader";
import PopularDestinations from "./PopularDestinations";
import MajorAirline from "./MajorAirline";
import ExchangeRate from "./ExchangeRate";
import EatEnjoyShop from "./EatEnjoyShop";

const Tipboard = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (id) => {
    setSelectedDestination((prev) => (prev === id ? null : id));
  };

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
