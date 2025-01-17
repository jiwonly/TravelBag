import { useRecoilValue } from "recoil";
import RecommendPlusItem from "./RecommendPlusItem";
import { getRecommendItemsByCategory } from "@/api/Bag/selector";

const RecommendPlusList = ({ categoryId }) => {
  const recommendItemsByCategory = useRecoilValue(
    getRecommendItemsByCategory(categoryId) // 올바른 호출 방식
  );

  return (
    <div className="flex flex-col gap-3 ">
      {recommendItemsByCategory.map((item) => (
        <RecommendPlusItem
          key={item.id}
          categoryId={categoryId}
          itemName={item.name}
        />
      ))}
    </div>
  );
};

export default RecommendPlusList;
