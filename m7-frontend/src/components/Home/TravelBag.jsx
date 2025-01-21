import { useRecoilState, useRecoilValue } from "recoil";
import BagButton from "./BagButton.jsx";
import { bagsState, realBagsState, sortedRealBagsState } from "@/api/atom.js";
import { useEffect } from "react";
import { getBagsAPI } from "@/api/api.js";
import { authState } from "@/api/auth.js";

const TravelBag = () => {
  const auth = useRecoilValue(authState);
  const memberId = auth.kakaoId;
  const [bags, setBags] = useRecoilState(bagsState);
  const [realBags, setRealBags] = useRecoilState(realBagsState);
  const [sortedRealBags, setSortedRealBags] =
    useRecoilState(sortedRealBagsState);

  // 가방 데이터 가져오기
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await getBagsAPI(memberId);
        if (Array.isArray(response)) {
          setBags(response);
        } else {
          console.error("Invalid bags response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };

    fetchBags();
  }, [memberId, setBags]);

  // realBags 업데이트
  useEffect(() => {
    const filteredBags = bags.filter((bag) => !bag.temporary);
    const sortedBags = filteredBags.sort((a, b) => b.id - a.id);
    setRealBags(filteredBags);
    setSortedRealBags(sortedBags);
  }, [bags, setRealBags]);

  const style =
    "w-[240px] h-[53px] min-w-[240px] p-[20px] flex items-center rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom text-[16px] font-[Pretendard] text-gray-800";
  return (
    <div
      className="TravelBag grid grid-cols-4"
      style={{
        rowGap: "15px",
        columnGap: "30px",
      }}
    >
      {sortedRealBags.map((item) => (
        <BagButton
          key={item.id}
          {...item}
          isTemporary={false}
          id={item.id}
          name={item.name}
          style={style}
        />
      ))}
    </div>
  );
};

export default TravelBag;
