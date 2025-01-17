import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";
import { useContext, useEffect, useState } from "react";
import "../../styles/scrollbar.css";
import { EditStateContext } from "@/pages/Bag";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { bagState, categoryState } from "@/api/Bag/atom";
import { thisBagItemByCategoryIdRefContext } from "@/pages/Bag";
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
  const [itmesByCategory, setItemsByCategory] = useState([]);
  let categoryName = "";
  switch (categoryId) {
    case 1:
      categoryName = "필수품";
      break;
    case 2:
      categoryName = "의류";
      break;
    case 3:
      categoryName = "위생용품";
      break;
    case 4:
      categoryName = "전자기기";
      break;
    case 5:
      categoryName = "의료품";
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
  const thisBagItemByCategoryIdRef = useContext(
    thisBagItemByCategoryIdRefContext
  );

  const handleThisBagItemByCategoryCreate = async (itemName) => {
    try {
      const response = await createBagItemAPI(
        memberId,
        bagId,
        categoryId,
        itemName
      );
      thisBagItemByCategoryIdRef.current++;
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
    } catch (error) {
      console.error("Error toggle item packed:", error);
    }
  };

  const handleThisBagItemCategoryDelete = async (itemId) => {
    try {
      const response = await deleteItemAPI(memberId, bagId, itemId);
    } catch (error) {
      console.error("Error delete item:", error);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[340px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold mb-1 ml-6 text-sm">{categoryName}</p>

      <div className="flex flex-col items-center gap-[14px] max-h-[400px] overflow-y-auto scrollbar-thin">
        {itmesByCategory.map((item) => (
          <CheckData
            key={item.id}
            bagId={bagId}
            itemId={item.id}
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
