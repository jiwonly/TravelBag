import { useNavigate } from "react-router-dom";
import { getTemplateImage } from "@/util/get-template-image";

const TemplateItem = ({ title, id }) => {
  const nav = useNavigate();
  return (
    <div className="Template flex w-[240px] min-w-[240px] p-[12px] flex-col gap-[6px] rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom">
      <div className="title flex-[1_0_0] text-[15px] ml-[10px] font-[Pretendard] font-semibold not-italic leading-[24px] text-left self-stretch text-[#414149]">
        {title}
      </div>
      <div className="img_container w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100">
        <img
          className="template_img w-full h-full object-cover"
          src={getTemplateImage(id)}
          alt="Template"
        />
      </div>
      <button
        className="plus_button flex p-[6.3px] justify-center items-center gap-[4px] self-stretch rounded-[8px] bg-[var(--Primary-500,_#24A3B6)] text-white text-[20px]"
        onClick={() => nav("/new")}
      >
        +
      </button>
    </div>
  );
};

export default TemplateItem;
