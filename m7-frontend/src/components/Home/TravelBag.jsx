import { bagState } from "@/api/Bag/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import BagButton from "./BagButton";
import { bagsState, realBagsState } from "@/api/atom";
import { useEffect } from "react";
import { getBagsAPI } from "@/api/api";

const TravelBag = () => {
  const memberId = 1;
  const [bags, setBags] = useRecoilState(bagsState);
  const [realBags, setRealBags] = useRecoilState(realBagsState);

  // 가방 데이터 가져오기
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await getBagsAPI(memberId); // API 호출
        if (Array.isArray(response)) {
          setBags(response); // bags 상태 업데이트
        } else {
          console.error("Invalid bags response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };

    fetchBags();
  }, [memberId, setBags]); // memberId가 변경될 때만 실행

  // realBags 업데이트
  useEffect(() => {
    const filteredBags = bags.filter((bag) => !bag.temporary); // temporary가 false인 가방만 필터링
    console.log("Filtered realBags:", filteredBags);
    setRealBags(filteredBags); // realBags 상태 업데이트
  }, [bags, setRealBags]);

  console.log("bags", bags);
  console.log("realBags", realBags);

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
      {realBags.map((item) => (
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
