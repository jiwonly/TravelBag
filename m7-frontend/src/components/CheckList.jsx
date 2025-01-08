import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";
import { useState } from "react";
import "../styles/scrollbar.css";

export function CheckList({ title, isEdit, contents }) {
  const [listData, setListData] = useState(contents);
  const handleDelete = (id) => {
    setListData(listData.filter((item) => item.id !== id));
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
        <CheckInput setListData={setListData} />
      </div>
    </div>
  );
}
