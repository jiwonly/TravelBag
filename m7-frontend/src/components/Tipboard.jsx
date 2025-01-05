import { useState } from "react";
import BagList from "./BagList";
import Header from "./Header";
import PopularDestinations from "./PopularDestinations";
import MajorAirline from "./MajorAirline";
import ExchangeRate from "./ExchangeRate";

const Tipboard = ({ icon, title, memo }) => {
  const isTemplate = false;
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (id) => {
    setSelectedDestination((prev)=>(prev === id ? null : id));
  };

  return (
    <div>
      <Header isTemplate={isTemplate} icon={icon} title={title} memo={memo} />
      <div className="flex px-[30px] mb-[20px] flex-col items-start flex-[1_0_0] self-stretch rounded-b-[16px] border-[1px] bg-[var(--White,_#FFF)]">
        <PopularDestinations showContent={handleSelectDestination} />

        {selectedDestination && (
          <>
            <MajorAirline destinationId={selectedDestination} />
            <ExchangeRate destinationId={selectedDestination} />
          </>
        )}
      </div>
    </div>
  );
};

export default Tipboard;
