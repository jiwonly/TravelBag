import TravelBag from "./TravelBag";
import { getMemberAPI } from "@/api/api";
import { useRecoilState } from "recoil";
import { membersState } from "@/api/atom";
import { useEffect } from "react";

const BagList = () => {
  const [members, setMembers] = useRecoilState(membersState);
  const memberId = 1;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMemberAPI(memberId);
        if (response) {
          setMembers(response);
          console.log("Member:", response);
        } else {
          console.error("Invalid response:", response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMembers();
  }, [memberId]);

  return (
    <div className="baglist mt-[20px] mb-[10PX] min-h-[200px]">
      <div className="title text-[17px] text-gray-900">나의 여행가방</div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        {members.nickname}님의 여행가방입니다.
      </div>
      <TravelBag />
    </div>
  );
};

export default BagList;
