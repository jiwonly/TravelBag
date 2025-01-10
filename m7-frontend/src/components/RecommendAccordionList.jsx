import RecommendAccordionItem from "./RecommendAccordionItem";
import { recommendSupplies } from "@/util/get-recomment-supplies-list";

const RecommendAccordionList = ({ title, data, setListData }) => {
  return (
    <div className="flex flex-col w-full">
      {recommendSupplies.map((item) => (
        <RecommendAccordionItem
          key={item.id}
          listId={item.id}
          title={item.title}
          data={item.contents}
        />
      ))}
    </div>
  );
};

export default RecommendAccordionList;
