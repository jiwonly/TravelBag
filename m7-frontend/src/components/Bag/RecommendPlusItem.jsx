import CheckData_plus from "../../assets/CheckData_plus.svg";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { EditStateContext } from "@/pages/Bag";
import {
  getBagDetailsById,
  getThisBagItemByCategory,
} from "@/api/Bag/selector";
import { thisBagItemByCategoryIdRefContext } from "@/pages/Bag";

const RecommendPlusItem = ({ categoryId, itemName }) => {
  const params = useParams();
  const bagId = params.id;
  const isEditiing = useContext(EditStateContext);

  const thisBagItemByCategoryIdRef = useContext(
    thisBagItemByCategoryIdRefContext
  );
  const setThisBagItemsByCategory = useSetRecoilState(
    getThisBagItemByCategory({ bagId, categoryId })
  );
  const handleThisBagItemByCategoryCreate = (itemName) => {
    const newItem = {
      id: thisBagItemByCategoryIdRef.current, // 고유 ID
      name: itemName,
      packed: false,
    };

    // 🔄 기존 배열을 복사하여 새 아이템 추가
    setThisBagItemsByCategory((prevItems) => [...prevItems, newItem]);
    thisBagItemByCategoryIdRef.current += 1; // ID 증가
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
