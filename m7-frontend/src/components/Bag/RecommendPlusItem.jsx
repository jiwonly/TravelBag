import CheckData_plus from "../../assets/CheckData_plus.svg";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditStateContext } from "@/pages/Bag.jsx";
import { createBagItemAPI, getBagItemsByCategoryAPI } from "@/api/api.js";
import { thisBagItemsState } from "@/api/atom.js";
import { useRecoilValue } from "recoil";
import { authState } from "@/api/auth.js";

const RecommendPlusItem = ({ categoryId, itemName }) => {
  console.log("itemName", itemName);
  const params = useParams();
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
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
        console.log("Fetched items by category:", itemByCategoryResponse);
        setItemsByCategory(itemByCategoryResponse);
      } catch (error) {
        console.error("Error fetching bagItemsByCategory:", error);
      }
    };
    fetchItemsByCategory();
  }, [memberId, bagId, categoryId]);

  const handleThisBagItemByCategoryCreate = async (itemName) => {
    if (!itemName) {
      console.error("Item name is empty!");
      return;
    }
    try {
      const response = await createBagItemAPI(
        memberId,
        bagId,
        categoryId,
        itemName
      );
      console.log("New item created:", response);
      setItemsByCategory((prevItems) => [...prevItems, response]);
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
