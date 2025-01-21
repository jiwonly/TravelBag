import CheckData_plus from "../../assets/CheckData_plus.svg";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditStateContext } from "@/pages/Bag.jsx";
import { createBagItemAPI, getBagItemsByCategoryAPI } from "@/api/api.js";
import { bagItemsState } from "@/api/atom.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@/api/auth.js";

const RecommendPlusItem = ({ categoryId, itemName }) => {
  const params = useParams();
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
  const bagId = params.id;
  const isEditiing = useContext(EditStateContext);
  const [itemsByCategory, setItemsByCategory] = useState([]);

  const [bagItems, setBagItems] = useRecoilState(bagItemsState);

  // 추천 아이템 추가 함수 - 수정
  const handleAddRecommendedItem = async () => {
    try {
      const newItem = await createBagItemAPI(
        memberId,
        bagId,
        categoryId,
        itemName
      ); // 서버 호출
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: {
          ...prevItems[categoryId],
          item: [...(prevItems[categoryId]?.item || []), newItem], // **item 배열에 추가**
        },
      }));
    } catch (error) {
      console.error("Error adding recommended item:", error);
    }
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <p className="text-gray-800 text-sm">{itemName}</p>
      </div>
      {isEditiing ? (
        <button
          onClick={() => handleAddRecommendedItem(itemName)}
          className="flex justify-center items-center rounded-md bg-white"
        >
          <img src={CheckData_plus} alt="plus" />
        </button>
      ) : null}
    </div>
  );
};
export default RecommendPlusItem;
