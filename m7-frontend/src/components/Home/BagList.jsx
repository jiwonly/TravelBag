import TravelBag from "./TravelBag.jsx";
import { getMemberAPI } from "@/api/api.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { membersState } from "@/api/atom.js";
import { useEffect } from "react";
import { authState } from "@/api/auth.js";

const BagList = () => {
  const [members, setMembers] = useRecoilState(membersState);
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;

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
      <div className="title text-[17px] text-gray-900 font-bold">나의 여행가방</div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        {auth.nickname}님의 여행가방입니다.
      </div>
      <TravelBag />
    </div>
  );
};

export default BagList;
