import DestinationItem from "./DestinationItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectLocations } from "@/api/selector";
import { fetchLocationsAPI } from "@/api/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/api/api";

const PopularDestinations = ({ selectedId, showContent }) => {
  // const setLocations = useSetRecoilState(selectLocations); // Recoil 상태 업데이트 함수 가져오기
  // const locations = useRecoilValue(selectLocations); // Recoil 상태 가져오기

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const data = await fetchLocationsAPI(); // API 호출
  //       setLocations(data); // Recoil 상태 업데이트
  //     } catch (err) {
  //       console.error("Error fetching locations:", err);
  //     }
  //   };

  //   fetchLocations();
  // }, [setLocations]);

  // console.log(locations);

  // const locations_string = JSON.stringify(locations);

  axios
    .get(`${API_BASE_URL}/location`)
    .then((response) => {
      console.log("API 응답:", response.data);
    })
    .catch((error) => {
      console.error("API 호출 중 오류:", error);
    });

  return (
    <div className="template_list mt-[40px] mb-[50px] ">
      <div className="title text-[17px] text-gray-900 font-bold">
        인기 여행지
      </div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        한국인이 많이 찾는 인기 여행지 Top 5 입니다.
      </div>
      {/* <div className="template_list_wrapper flex flex-row gap-5">
        {locations_string.map((location) => (
          <DestinationItem
            key={location.id}
            id={location.id}
            name={location.name}
            selectedId={selectedId === location.id}
            showContent={showContent}
          />
        ))}
      </div> */}
    </div>
  );
};

export default PopularDestinations;
