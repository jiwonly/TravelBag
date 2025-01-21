import { recommendItemsState } from "@/api/atom.js";
import RecommendAccordionItem from "./RecommendAccordionItem.jsx";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendItemsAPI } from "@/api/api.js";
import { recommendItemsList } from "@/util/get-recomment-supplies-list.js";

const RecommendAccordionList = () => {
  return (
    <div className="flex flex-col w-full">
      {recommendItemsList.map((category) => (
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
