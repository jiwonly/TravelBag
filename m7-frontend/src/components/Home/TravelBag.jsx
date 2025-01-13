import { bagState } from "@/api/Bag/atom";
import { useRecoilValue } from "recoil";
import BagButton from "./BagButton";

const TravelBag = () => {
  const bags = useRecoilValue(bagState);
  const realBags = bags.filter((bag) => !bag.temporary);
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
