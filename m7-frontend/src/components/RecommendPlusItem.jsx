import CheckData_plus from "../assets/CheckData_plus.svg";
import { TemplateStateContext } from "@/App";
import { TemplateDispatchContext } from "@/App";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditStateData } from "@/App";

const RecommendPlusItem = ({ listId, id, content }) => {
  const isEditing = useContext(EditStateData);
  const data = useContext(TemplateStateContext);
  const params = useParams();
  const template = data.find((item) => String(item.id) === String(params.id));
  const [supplyList, setSupplyList] = useState(template.supplies);
  const { onUpdateSupplies } = useContext(TemplateDispatchContext);

  const listContent = supplyList.find(
    (item) => String(item.id) === String(listId)
  ) || { contents: [] };

  const [listData, setListData] = useState(listContent.contents);
  useEffect(() => {
    if (template) {
      setSupplyList(template.supplies);
    }
  }, [template]);

  useEffect(() => {
    if (listContent.contents) {
      setListData(listContent.contents);
    }
  }, [listContent]);

  const handleAdd = (content) => {
    const updatedContents = [...listData, { id: id, content: content }];

    const updatedSupplyList = supplyList.map((item) => {
      if (String(item.id) === String(listId)) {
        return { ...item, contents: updatedContents };
      }
      return item;
    });
    setListData(updatedContents);
    setSupplyList(updatedSupplyList);

    onUpdateSupplies(template.id, updatedSupplyList);
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
