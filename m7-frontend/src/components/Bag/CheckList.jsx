import { CheckData } from "./CheckData.jsx";
import { CheckInput } from "./CheckInput.jsx";
import { useContext, useEffect, useState } from "react";
import "../../styles/scrollbar.css";
import { EditStateContext } from "@/pages/Bag.jsx";
import {
  createBagItemAPI,
  deleteItemAPI,
  getBagItemsByCategoryAPI,
  toggleItemPackedAPI,
  updateItemNameAPI,
} from "@/api/api.js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "@/api/auth.js";
import { bagItemsState } from "@/api/atom.js";

export function CheckList({ bagId, categoryId }) {
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
  const bagItems = useRecoilValue(bagItemsState);
  const setBagItems = useSetRecoilState(bagItemsState);
  const itemsByCategory = bagItems[categoryId] || [];
  let categoryName = "";
  switch (categoryId) {
    case 1:
      categoryName = "필수품";
      break;
    case 2:
      categoryName = "의료품";
      break;
    case 3:
      categoryName = "의류";
      break;
    case 4:
      categoryName = "위생용품";
      break;
    case 5:
      categoryName = "전자기기";
      break;
    case 6:
      categoryName = "기타";
      break;
  }
  const isEditing = useContext(EditStateContext);

  // 아이템 추가
  const handleAddItem = async (itemName) => {
    try {
      const newItem = await createBagItemAPI(
        memberId,
        bagId,
        categoryId,
        itemName
      ); // 서버에 아이템 추가
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: [...(prevItems[categoryId] || []), newItem], // 상태 업데이트
      }));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // 아이템 isPacked 상태 토글
  const handleTogglePacked = async (itemId) => {
    try {
      await toggleItemPackedAPI(memberId, bagId, itemId); // 서버 업데이트
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: prevItems[categoryId].map((item) =>
          item.id === itemId ? { ...item, packed: !item.packed } : item
        ),
      }));
    } catch (error) {
      console.error("Error toggling item packed:", error);
    }
  };

  const handleThisBagITemByCategoryUpdateName = async (itemId, itemName) => {
    try {
      const response = await updateItemNameAPI(
        memberId,
        bagId,
        itemId,
        itemName
      );
    } catch (error) {
      console.error("Error updating item name:", error);
    }
  };

  // 아이템 삭제
  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItemAPI(memberId, bagId, itemId); // 서버에서 아이템 삭제
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: prevItems[categoryId].filter(
          (item) => item.id !== itemId
        ),
      }));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[340px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold mb-1 ml-6 text-[14px]">{categoryName}</p>

      <div className="flex flex-col items-center gap-[14px] max-h-[400px] overflow-y-auto scrollbar-thin">
        {itemsByCategory.map((item) => (
          <CheckData
            key={item.id}
            bagId={bagId}
            itemId={item.id}
            categoryId={categoryId}
            itemName={item.name}
            isPacked={item.packed}
            onUpdateName={handleThisBagITemByCategoryUpdateName}
            onToggle={handleTogglePacked}
            onDelete={handleDeleteItem}
          />
        ))}

        {isEditing ? <CheckInput onCreateItem={handleAddItem} /> : null}
      </div>
    </div>
  );
}
