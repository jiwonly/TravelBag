import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";
import { useContext, useEffect } from "react";
import "../../styles/scrollbar.css";
import { EditStateContext } from "@/pages/Bag";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { bagState, categoryState } from "@/api/Bag/atom";
import { thisBagItemByCategoryIdRefContext } from "@/pages/Bag";
import { NewItemsStateContext } from "./BagDashboard";
import { NewItemDispatchContext } from "./BagDashboard";
import { AddedItemDispatchContext } from "./BagDashboard";
import {
  getBagDetailsById,
  getThisBagItemById,
  getThisBagItemByCategory,
} from "@/api/Bag/selector";

export function CheckList({ bagId, categoryId }) {
  // const { onSetAdded } = useContext(AddedItemDispatchContext);
  // const newItemList = useContext(NewItemsStateContext);
  // const { setNewItemList } = useContext(NewItemDispatchContext);
  const bags = useRecoilValue(bagState);
  const thisBag = useRecoilValue(getBagDetailsById(bagId));

  const thisBagItemsById = useRecoilValue(getThisBagItemById(bagId));
  const thisBagItemsByCategory = useRecoilValue(
    getThisBagItemByCategory(categoryId)
  );

  const categories = useRecoilValue(categoryState);
  const thisCategory = categories.find(
    (category) => String(category.id) === String(categoryId)
  );
  const isEditing = useContext(EditStateContext);

  const setThisBagItemsByCategory = useSetRecoilState(
    getThisBagItemByCategory(categoryId)
  );

  // useEffect(() => {
  //   setNewItemList(thisBag.supplies);
  //   onSetAdded(0);
  // }, []);

  // useEffect(() => {
  //   // setThisBagItems(thisBag.supplies);
  //   onSetAdded(0);
  // }, [thisBag]);

  // useEffect(() => {
  //   // setThisBagItems(newItemList);
  // }, [thisBag, newItemList]);

  // useEffect(() => {
  //   // setThisBagItems(thisBag.itmes);
  // }, [thisBag]);

  // // useEffect(() => {
  // //   setThisBagItemByCategory(thisBagItemByCategory);
  // // }, [thisBagItemByCategory]);

  const thisBagItemByCategoryDispatch = useSetRecoilState(
    getThisBagItemByCategory(categoryId)
  );
  const thisBagItemByCategoryIdRef = useContext(
    thisBagItemByCategoryIdRefContext
  );

  // useEffect(() => {
  //   if (!thisBag || !thisBag.items) {
  //     console.log("No bag or items found. Setting default values.");
  //     setThisBagItemsByCategory([]);
  //     return;
  //   }

  //   const categoryItems = thisBag.items.filter(
  //     (item) => item.categoryId === categoryId
  //   );
  //   setThisBagItemsByCategory(categoryItems || []);
  // }, [thisBag, categoryId, setThisBagItemsByCategory]);

  const handleThisBagItemByCategoryCreate = (name) => {
    thisBagItemByCategoryDispatch([...thisBagItemsByCategory], {
      id: thisBagItemByCategoryIdRef,
      name: name,
      packed: false,
    });
  };

  const handleThisBagItemByCategoryUpdatePacked = (id, packed) => {
    const updatedItems = thisBagItemsByCategory.map((item) =>
      item.id === id ? { ...item, packed: packed } : item
    );
    thisBagItemByCategoryDispatch(updatedItems);
  };

  const handleThisBagItemCategoryDelete = (id) => {
    const updatedItems = thisBagItemsByCategory.filter(
      (item) => item.id !== id
    );
    thisBagItemByCategoryDispatch(updatedItems);
  };

  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[340px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold mb-1 ml-6 text-sm">{thisCategory.name}</p>

      <div className="flex flex-col items-center gap-[14px] max-h-[400px] overflow-y-auto scrollbar-thin">
        {thisBagItemsByCategory.map((item) => (
          <CheckData
            key={item.id}
            bagId={bagId}
            itemId={item.id}
            itemName={item.name}
            isPacked={item.packed}
            onToggle={handleThisBagItemByCategoryUpdatePacked}
            onDelete={handleThisBagItemCategoryDelete}
          />
        ))}

        {isEditing ? (
          <CheckInput onCretae={handleThisBagItemByCategoryCreate} />
        ) : null}
      </div>
    </div>
  );
}
