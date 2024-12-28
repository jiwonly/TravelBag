import { templateList } from "@/util/TemplateList";
import TemplateItem from "./TemplateItem";

const TemplateList = () => {
  return (
    <div className="template_list_wrapper flex flex-row gap-8">
      {templateList.map((item) => (
        <TemplateItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TemplateList;
