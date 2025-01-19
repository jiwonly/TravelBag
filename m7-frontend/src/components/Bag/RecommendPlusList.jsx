import { useRecoilValue } from "recoil";
import RecommendPlusItem from "./RecommendPlusItem";
import { useEffect, useState } from "react";
import { getRecommendItemsByCategoryAPI } from "@/api/api";
import { useParams } from "react-router-dom";

const RecommendPlusList = ({ categoryId }) => {
  const memberId = 1;
  const params = useParams();
  const bagId = params.id;
  const [recommendItemsByCategory, setRecommendItemsByCategory] = useState([]);

  useEffect(() => {
    const fetchrecommendItems = async () => {
      try {
        const response = await getRecommendItemsByCategoryAPI(
          memberId,
          bagId,
          categoryId
        );
        setRecommendItemsByCategory(response); // 함수 반환값을 상태로 설정
      } catch (error) {
        console.error("Error fetching recommendItemsByCategory:", error);
      }
    };

    fetchrecommendItems(); // 함수 호출
  }, [memberId, bagId, categoryId]); // 의존성 배열 추가

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
