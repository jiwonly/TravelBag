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

const RecommendPlusItem = ({ categoryId, itemName }) => {
  const params = useParams();
  const memberId = 1;
  const bagId = params.id;
  const isEditiing = useContext(EditStateContext);
  const [itemsByCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    const fetchItemsByCategory = async () => {
      try {
        const itemByCategoryResponse = await getBagItemsByCategoryAPI(
          memberId,
          bagId,
          categoryId
        );
        setItemsByCategory(itemByCategoryResponse);
      } catch (error) {
        console.error("Error fetching bagItemsByCategory:", error);
      }
    };
    fetchItemsByCategory();
  }, [memberId, bagId, categoryId]);

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
      setItemsByCategory((prevItems) => [...prevItems, newItem]);

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
