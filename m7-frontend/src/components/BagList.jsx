import TravelBag from "./TravelBag";

const BagList = () => {
  return (
    <div className="baglist mt-[20px] mb-[50PX]">
      <div className="title text-[17px] text-gray-900">나의 여행가방</div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        OO님의 여행가방입니다.
      </div>
      <TravelBag />
    </div>
  );
};

export default BagList;
