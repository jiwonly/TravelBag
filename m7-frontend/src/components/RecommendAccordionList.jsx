import RecommendAccordionItem from "./RecommendAccordionItem";
import { recommendSupplies } from "@/util/get-recomment-supplies-list";

const RecommendAccordionList = ({
  isBasic,
  templateId,
  title,
  data,
  setListData,
}) => {
  return (
    <div className="flex flex-col w-full">
      {recommendSupplies.map((item) => (
        <RecommendAccordionItem
          key={item.id}
          isBasic={isBasic}
          templateId={templateId}
          listId={item.id}
          title={item.title}
          data={item.contents}
        />
      ))}
    </div>
  );
};

export default RecommendAccordionList;
