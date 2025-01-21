import { getDestinationImage } from "@/util/get-destination-image.js";

const DestinationItem = ({ id, name, selectedId, showContent }) => {
  const isSelected = selectedId;

  const handleClick = () => {
    showContent(id);
  };

  const containerStyle = isSelected
    ? "border-solid border-[#24A3B6] text-[#24A3B6]"
    : "border-[1px] text-black";

  const style =
    "flex p-[6.3px] w-full justify-center items-center gap-[4px] self-stretch rounded-[8px] bg-[var(--Primary-500,_#24A3B6)] text-white text-[20px]";
  return (
    <button
      className={`Template flex w-[195px] h-[248px] p-[3px] flex-col gap-[5px] rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom ${containerStyle}`}
      onClick={handleClick}
    >
      <div className="img_container w-full rounded-[16px] overflow-hidden bg-gray-100">
        <img
          className="template_img w-full h-full object-cover"
          src={getDestinationImage(id)}
          alt="Template"
        />
      </div>
      <div className="title flex-[1_0_0] text-[16px] font-[Pretendard] font-semibold not-italic leading-[24px] text-center self-stretch ">
        {name}
      </div>
    </button>
  );
};

export default DestinationItem;
