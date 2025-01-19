import RecommendPlusItem from "./RecommendPlusItem";
import { useEffect, useState } from "react";
import { getRecommendItemsByCategoryAPI } from "@/api/api";
import { useParams } from "react-router-dom";
import { recommendItemsList } from "@/util/get-recomment-supplies-list";

const RecommendPlusList = ({ categoryId }) => {
  const [recommendItems, setRecommendItems] = useState([]);
  const [recommendItemsByCategory, setRecommendItemsByCategory] = useState([]);

  useEffect(() => {
    // categoryId에 해당하는 추천 아이템 가져오기
    const filteredItems = recommendItemsList.filter(
      (items) => items.categoryId === categoryId
    );

    if (filteredItems.length > 0) {
      const firstItem = filteredItems[0]; // 필터 결과에서 첫 번째 항목 가져오기
      setRecommendItems(firstItem);
      setRecommendItemsByCategory(firstItem.items);
    } else {
      // 해당 categoryId에 대한 추천 아이템이 없는 경우
      setRecommendItems([]);
      setRecommendItemsByCategory([]);
    }
  }, [categoryId]); // 의존성 배열 추가

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
