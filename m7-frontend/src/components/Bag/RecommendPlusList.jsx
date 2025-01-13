import { useRecoilValue } from "recoil";
import RecommendPlusItem from "./RecommendPlusItem";
import { getRecommendItemsByCategory } from "@/api/Bag/selector";

const RecommendPlusList = ({ categoryId, data, setListData }) => {
  const recommendItemasByCategory = useRecoilValue(getRecommendItemsByCategory);
  return (
    <div className="flex flex-col gap-3">
      {recommendItemasByCategory.map((item) => (
        <RecommendPlusItem
          key={item.id}
          categoryId={categoryId}
          itemId={item.id}
          itemName={item.name}
        />
      ))}
    </div>
  );
};

export default RecommendPlusList;
