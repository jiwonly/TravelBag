import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";
import { useContext, useEffect, useState } from "react";
import "../../styles/scrollbar.css";
import { EditStateContext } from "@/pages/Bag";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { NewItemsStateContext } from "./BagDashboard";
import { NewItemDispatchContext } from "./BagDashboard";
import { AddedItemStateContext } from "./BagDashboard";
import {
  createBagItemAPI,
  deleteItemAPI,
  getBagItemsByCategoryAPI,
  toggleItemPackedAPI,
  updateItemNameAPI,
} from "@/api/api";

export function CheckList({ bagId, categoryId }) {
  const memberId = 1;
  const [itemsByCategory, setItemsByCategory] = useState([]);
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

  const isEditing = useContext(EditStateContext);

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

  const handleThisBagItemByCategoryUpdatePacked = async (itemId) => {
    try {
      const response = await toggleItemPackedAPI(memberId, bagId, itemId);
      setItemsByCategory((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, packed: !item.packed } : item
        )
      );
    } catch (error) {
      console.error("Error toggle item packed:", error);
    }
  };

  const handleThisBagItemCategoryDelete = async (itemId) => {
    try {
      const response = await deleteItemAPI(memberId, bagId, itemId);
      setItemsByCategory((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error delete item:", error);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[340px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold mb-1 ml-6 text-sm">{categoryName}</p>

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
            onToggle={handleThisBagItemByCategoryUpdatePacked}
            onDelete={handleThisBagItemCategoryDelete}
          />
        ))}

        {isEditing ? (
          <CheckInput onCreateItem={handleThisBagItemByCategoryCreate} />
        ) : null}
      </div>
    </div>
  );
}
