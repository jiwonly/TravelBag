import DestinationItem from "./DestinationItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchLocationsAPI } from "@/api/api";
import { useEffect, useState } from "react";
import { locationsState } from "@/api/atom";

const PopularDestinations = ({ selectedId, showContent }) => {
  const locations = useRecoilValue(locationsState); // Recoil 상태 가져오기

  return (
    <div className="template_list mt-[40px] mb-[50px] ">
      <div className="title text-[17px] text-gray-900 font-bold">
        인기 여행지
      </div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        한국인이 많이 찾는 인기 여행지 Top 5 입니다.
      </div>
      <div className="template_list_wrapper flex flex-row gap-5">
        {locations.map((location) => (
          <DestinationItem
            key={location.id}
            id={location.id}
            name={location.name}
            selectedId={selectedId === location.id}
            showContent={showContent}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;