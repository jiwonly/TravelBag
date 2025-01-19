import { getTemplateImage } from "@/util/get-template-image.js";
import TemplateButton from "./TemplateButton.jsx";

const TemplateItem = ({ id, name }) => {
  let templateTitle = "";

  switch (id) {
    case 1:
      templateTitle = "내 마음대로 시작하기";
      break;
    case 2:
      templateTitle = "여자 혼자 여행";
      break;
    case 3:
      templateTitle = "남자 혼자 여행";
      break;
    case 4:
      templateTitle = "비즈니스 여행";
      break;
  }
  const style =
    "flex p-[6.3px] w-full h-[39px] justify-center items-center gap-[4px] self-stretch rounded-[8px] bg-[var(--Primary-500,_#24A3B6)] text-white text-[20px]";
  return (
    <div className="Template flex w-[240px] p-[12px] flex-col gap-[6px] rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom">
      <div className="title flex-[1_0_0] text-[15px] ml-[10px] font-[Pretendard] font-semibold not-italic leading-[24px] text-left self-stretch text-[#414149]">
        {templateTitle}
      </div>
      <div className="img_container flex justify-center items-center w-full h-[150px] rounded-[16px] overflow-hidden bg-gray-100">
        <img
          className="template_img w-full h-full object-cover"
          src={getTemplateImage(id)}
          alt="Template"
        />
      </div>
      <div>
        <TemplateButton
          isTemporary={true}
          templateId={id}
          name={name}
          style={style}
        />
      </div>
    </div>
  );
};

export default TemplateItem;
