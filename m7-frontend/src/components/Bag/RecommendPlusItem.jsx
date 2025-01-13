import CheckData_plus from "../../assets/CheckData_plus.svg";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditStateContext } from "@/pages/Bag";
import { NewItemsStateContext } from "./BagDashboard";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import {
  getBagDetailsById,
  getThisBagItemByCategory,
} from "@/api/Bag/selector";
import { thisBagItemByCategoryIdRefContext } from "@/pages/Bag";

const RecommendPlusItem = ({ categoryId, itemId, itemName }) => {
  const params = useParams();
  const newItemsList = useContext(NewItemsStateContext);
  const isEditing = useContext(EditStateContext);
  const bagDetailsById = useRecoilValue(getBagDetailsById);
  const thisBag = bagDetailsById(params.id);
  const [supplyList, setSupplyList] = useState(thisBag.supplies);

  const listContent = supplyList.find(
    (item) => String(item.id) === String(categoryId)
  ) || { contents: [] };

  const [listData, setListData] = useState(listContent.contents);

  useEffect(() => {
    setSupplyList(newItemsList);
  }, [thisBag, newItemsList]);

  useEffect(() => {
    setListData(listContent.contents);
  }, [listContent.contents]);

  const thisBagItemByCategoryDispatch = useSetRecoilState(
    getThisBagItemByCategory
  );
  const thisBagItemByCategoryIdRef = useContext(
    thisBagItemByCategoryIdRefContext
  );

  const handleThisBagItemByCategoryCreate = (name) => {
    thisBagItemByCategoryDispatch({
      type: "CREATE",
      data: {
        id: thisBagItemByCategoryIdRef.current++,
        name: name,
        packed: false,
      },
    });
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <p className="text-gray-800 text-sm">{itemName}</p>
      </div>
      {isEditing ? (
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
