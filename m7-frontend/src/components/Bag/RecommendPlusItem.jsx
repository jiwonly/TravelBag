import CheckData_plus from "../../assets/CheckData_plus.svg";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EditStateContext } from "@/pages/Bag";
import {
  addRecommendItemAPI,
  createBagItemAPI,
  getBagItemsByCategoryAPI,
} from "@/api/api";
import { thisBagItemsState } from "@/api/atom";
import { recommendItemsList } from "@/util/get-recomment-supplies-list";

const RecommendPlusItem = ({ categoryId, itemName }) => {
  const params = useParams();
  const memberId = 1;
  const bagId = params.id;
  const isEditiing = useContext(EditStateContext);
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

  const handleThisBagItemByCategoryCreate = async (itemName) => {
    try {
      const response = await createBagItemAPI(
        memberId,
        bagId,
        categoryId,
        itemName
      );

      // API 응답을 기반으로 새 아이템 추가
      const newItem = response; // 응답이 새로 생성된 아이템의 정보를 포함한다고 가정
      setRecommendItemsByCategory((prevItems) => [...prevItems, newItem]);

      // 참조 값 업데이트
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <p className="text-gray-800 text-sm">{itemName}</p>
      </div>
      {isEditiing ? (
        <button
          onClick={() => handleThisBagItemByCategoryCreate(itemName)}
          className="flex justify-center items-center rounded-md bg-white"
        >
          <img src={CheckData_plus} alt="plus" />
        </button>
      ) : null}
    </div>
  );
};
export default RecommendPlusItem;
