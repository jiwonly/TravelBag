import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";
import { useState, useContext, useEffect } from "react";
import "../styles/scrollbar.css";
import { EditStateData } from "@/App";
import { TemplateDispatchContext } from "@/App";
import { TemplateStateContext } from "@/App";

export function CheckList({ templateId, listId, title }) {
  const data = useContext(TemplateStateContext);
  const template = data.find((item) => String(item.id) === String(templateId));
  const [supplyList, setSupplyList] = useState(template.supplies);
  const { onUpdateSupplies } = useContext(TemplateDispatchContext);
  const isEditing = useContext(EditStateData);

  useEffect(() => {
    setSupplyList(template.supplies);
  }, [template]);

  const listContent = supplyList.find(
    (item) => String(item.id) === String(listId)
  ) || { contents: [] };

  const [listData, setListData] = useState(listContent.contents);

  useEffect(() => {
    setListData(listContent.contents);
  }, [listContent.contents]);

  const handleDelete = (id) => {
    // listData에서 아이템 삭제
    const updatedContents = listData.filter((item) => item.id !== id);

    // supplyList 업데이트
    const updatedSupplyList = supplyList.map((item) => {
      if (String(item.id) === String(listId)) {
        return { ...item, contents: updatedContents };
      }
      return item;
    });

    // 상태 업데이트
    setListData(updatedContents);
    setSupplyList(updatedSupplyList);

    // Context에 반영
    onUpdateSupplies(templateId, updatedSupplyList);
  };

  const handleAdd = (inputValue) => {
    const updatedContents = [
      ...listData,
      { id: listData.length + 1, content: inputValue },
    ];

    const updatedSupplyList = supplyList.map((item) => {
      if (String(item.id) === String(listId)) {
        return { ...item, contents: updatedContents };
      }
      return item;
    });

    setListData(updatedContents);
    setSupplyList(updatedSupplyList);
    onUpdateSupplies(templateId, updatedSupplyList);
  };

  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[340px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold mb-1 ml-6 text-sm">{title}</p>

      <div className="flex flex-col items-center gap-[14px] max-h-[400px] overflow-y-auto scrollbar-thin">
        {listData.map((item) => (
          <CheckData
            key={item.id}
            id={item.id}
            content={item.content}
            onDelete={handleDelete}
          />
        ))}

        {isEditing ? (
          <CheckInput setListData={setListData} onAdd={handleAdd} />
        ) : null}
      </div>
    </div>
  );
}
