import CheckData_plus from "../assets/CheckData_plus.svg";
import { TemplateStateContext } from "@/App";
import { TemplateDispatchContext } from "@/App";
import { useContext, useState, useEffect } from "react";
import { EditStateData } from "@/App";
import { templateList } from "@/util/get-template-list";
import { supplyDispatchContext } from "@/App";
import { supplyStateContext } from "@/App";
import { ItemDispatchContext } from "@/App";

const RecommendPlusItem = ({ isBasic, templateId, listId, id, content }) => {
  const { onSetAdded } = useContext(ItemDispatchContext);
  const { setNewSupplyList } = useContext(supplyDispatchContext);
  const newSupplyList = useContext(supplyStateContext);
  const isEditing = useContext(EditStateData);
  const data = useContext(TemplateStateContext);
  const template =
    data.find((item) => String(item.id) === String(templateId)) ||
    templateList.find((item) => String(item.id) === String(templateId));

  const [supplyList, setSupplyList] = useState(template.supplies);
  const { onUpdateSupplies } = useContext(TemplateDispatchContext);

  const listContent = supplyList.find(
    (item) => String(item.id) === String(listId)
  ) || { contents: [] };

  const [listData, setListData] = useState(listContent.contents);

  // useEffect(() => {
  //   if (isBasic) setNewSupplyList(template.supplies);
  // }, []);
  useEffect(() => {
    // if (isBasic) {
    setSupplyList(newSupplyList);
    // } else {
    //   setSupplyList(template.supplies);
    // }
  }, [template, newSupplyList]);

  useEffect(() => {
    setListData(listContent.contents);
  }, [listContent.contents]);

  const handleAdd = (content) => {
    const existingItem = listData.find((item) => item.id === id);
    if (!existingItem) {
      const updatedContents = [
        ...listData,
        { id: id, isChecked: false, content: content },
      ];

      const updatedSupplyList = supplyList.map((item) => {
        if (String(item.id) === String(listId)) {
          return { ...item, contents: updatedContents };
        }
        return item;
      });

      setListData(updatedContents);
      setSupplyList(updatedSupplyList);

      // if (isBasic) {
      setNewSupplyList(updatedSupplyList);
      // } else {
      if (!isBasic) onUpdateSupplies(templateId, updatedSupplyList);
      // }
    } else return;
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <p className="text-gray-800 text-sm">{content}</p>
      </div>
      {isEditing ? (
        <button
          onClick={() => handleAdd(content)}
          className="flex justify-center items-center rounded-md bg-white"
        >
          <img src={CheckData_plus} alt="plus" />
        </button>
      ) : null}
    </div>
  );
};
export default RecommendPlusItem;
