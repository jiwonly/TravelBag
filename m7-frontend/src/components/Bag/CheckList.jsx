import { CheckData } from "./CheckData.jsx";
import { CheckInput } from "./CheckInput.jsx";
import { useContext } from "react";
import "../../styles/scrollbar.css";
import { EditStateContext } from "@/pages/Bag.jsx";
import {
  createBagItemAPI,
  deleteItemAPI,
  toggleItemPackedAPI,
  updateItemNameAPI,
} from "@/api/api.js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagItemsState } from "@/api/atom.js";
import { authState } from "../../api/auth.js";

export function CheckList({ bagId, categoryId }) {
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
  const bagItems = useRecoilValue(bagItemsState); // 현재 상태 읽기
  const setBagItems = useSetRecoilState(bagItemsState); // 상태 업데이트
  const itemsByCategory = bagItems[categoryId]?.item || []; // JSON 구조에 맞게 수정
  const isEditing = useContext(EditStateContext);

  // 카테고리 이름 매핑
  const categoryNames = {
    1: "필수품",
    2: "의료품",
    3: "의류",
    4: "위생용품",
    5: "전자기기",
    6: "기타",
  };
  const categoryName = categoryNames[categoryId] || "알 수 없음";

  // 아이템 추가
  const handleAddItem = async (itemName) => {
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
      console.error("Error adding item:", error);
    }
  };

  // 아이템 상태 토글
  const handleTogglePacked = async (itemId) => {
    try {
      await toggleItemPackedAPI(memberId, bagId, itemId);
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: {
          ...prevItems[categoryId],
          item: prevItems[categoryId]?.item.map((item) =>
            item.id === itemId ? { ...item, packed: !item.packed } : item
          ),
        },
      }));
    } catch (error) {
      console.error("Error toggling packed state:", error);
    }
  };

  // 아이템 이름 수정
  const handleUpdateName = async (itemId, itemName) => {
    try {
      await updateItemNameAPI(memberId, bagId, itemId, itemName);
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: {
          ...prevItems[categoryId],
          item: prevItems[categoryId]?.item.map((item) =>
            item.id === itemId ? { ...item, name: itemName } : item
          ),
        },
      }));
    } catch (error) {
      console.error("Error updating item name:", error);
    }
  };

  // 아이템 삭제
  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItemAPI(memberId, bagId, itemId);
      setBagItems((prevItems) => ({
        ...prevItems,
        [categoryId]: {
          ...prevItems[categoryId],
          item: prevItems[categoryId]?.item.filter(
            (item) => item.id !== itemId
          ),
        },
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
            onUpdateName={handleUpdateName}
            onToggle={handleTogglePacked}
            onDelete={handleDeleteItem}
          />
        ))}
        {isEditing && <CheckInput onCreateItem={handleAddItem} />}
      </div>
    </div>
  );
}
