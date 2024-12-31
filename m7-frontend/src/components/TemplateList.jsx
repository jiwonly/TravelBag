import { templateList } from "@/util/get-template-list";
import TemplateItem from "./TemplateItem";

const TemplateList = () => {
  return (
    <div className="template_list mt-[40px] mb-[140px] ">
      <div className="title text-[17px] text-gray-900">템플릿</div>
      <div className="memo text-[13px] text-gray-500 mb-[15px]">
        여행 목적에 맞춰 여행가방을 시작하세요!
      </div>
      <div className="template_list_wrapper flex flex-row gap-8">
        {templateList.map((item) => (
          <TemplateItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
