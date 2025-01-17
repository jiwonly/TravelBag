import { recommendItemsState } from "@/api/atom";
import RecommendAccordionItem from "./RecommendAccordionItem";
import { getRecommendItems } from "@/api/Bag/selector";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendItemsAPI } from "@/api/api";

const RecommendAccordionList = () => {
  const memberId = 1;
  const params = useParams();
  const bagId = params.id;
  const [recommendItems, setRecommendItems] =
    useRecoilState(recommendItemsState);

  useEffect(() => {
    const fetchrecommendItems = async () => {
      try {
        const recommendResponse = await getRecommendItemsAPI(memberId, bagId);
        setRecommendItems(recommendResponse);
      } catch (error) {
        console.error("Error fetching recommendItems:", error);
      }
    };
    fetchrecommendItems();
  }, [memberId, bagId]);
  console.log(recommendItems);

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
