import { getAirlineImage } from "@/util/get-airline-image.js";

const AirlineItem = ({ location_id, name, id, url }) => {
  const onURL = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="flex w-[100px] h-[130px] flex-col items-center justify-center gap-[9px] border [background:var(--Gray-50,#F5F5F6)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] p-2.5 rounded-xl border-solid border-[#EAEAEA] cursor-pointer"
      onClick={onURL}
    >
      <div className="w-full rounded-[16px] overflow-hidden bg-gray-100">
        <img
          className="flex items-start shrink-0 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl"
          src={getAirlineImage(location_id, id)}
          alt="Template"
        />
      </div>
      <div className="items-center self-stretch text-black text-center [font-family:Pretendard] text-sm font-medium leading-[14px]">
        {name}
      </div>
    </div>
  );
};

export default AirlineItem;
