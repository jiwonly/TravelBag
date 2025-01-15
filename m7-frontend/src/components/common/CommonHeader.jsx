import { getIconImage } from "@/util/get-icon-image";

const CommonHeader = ({ icon, title, memo }) => {
  return (
    <div className="flex items-center py-[12px] px-[23px] gap-[10px] self-stretch border-t border-l border-r rounded-t-[16px] border-[#e5e6e8] bg-[var(--White,_#FFF)] relative">
      <section className="icon w-[40px] h-[40px] flex-shrink-0">
        <img src={getIconImage(icon)} alt="icon" />
      </section>
      <div className="flex flex-col">
        <section className="title text-[17px] font-[Pretendard] not-italic leading-[28px] mb-[0px] text-[#393940]">
          {title}
        </section>
        <section className="memo text-[14px] font-medium font-[Pretendard] not-italic leading-[20px] text-gray-500">
          {memo}
        </section>
      </div>
    </div>
  );
};

export default CommonHeader;
