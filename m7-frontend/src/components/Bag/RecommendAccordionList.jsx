import RecommendAccordionItem from "./RecommendAccordionItem";
import { getRecommendItems } from "@/api/Bag/selector";
import { useRecoilValue } from "recoil";

const RecommendAccordionList = () => {
  const recommendItems = useRecoilValue(getRecommendItems);
  return (
    <div className="flex flex-col w-full">
      {recommendItems.map((category) => (
        <RecommendAccordionItem
          key={category.categoryId}
          categoryId={category.categoryId}
          ItemByCategory={category.item}
        />
      ))}
    </div>
  );
};

export default RecommendAccordionList;
