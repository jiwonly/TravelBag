import { useContext, useState } from "react";
import Checkbox_Yes from "../../assets/Checkbox_Yes.svg";
import Checkbox_No from "../../assets/Checkbox_No.svg";
import CheckData_minus from "../../assets/CheckData_minus.svg";
import { EditStateContext } from "@/pages/Bag.jsx";

export function CheckData({
  itemId,
  itemName,
  isPacked,
  onUpdateName,
  onToggle,
  onDelete,
}) {
  const isEditing = useContext(EditStateContext);
  const [localItemName, setLocalItemName] = useState(itemName); // 로컬 상태 추가

  const handleDelete = () => {
    onDelete(itemId);
  };

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    setLocalItemName(updatedName); // 로컬 상태 업데이트
    onUpdateName(itemId, updatedName); // 부모 상태 업데이트
  };

  return (
    <div
      className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg"
      style={{ height: "45px", minHeight: "45px", maxHeight: "45px" }}
    >
      <div className="flex items-center gap-3">
        <img
          src={isPacked ? Checkbox_Yes : Checkbox_No}
          alt="checkbox"
          className="cursor-pointer"
          onClick={() => onToggle(itemId)}
        />
        {isEditing ? (
          <input
            className="text-gray-800 text-sm outline-none w-[200px]"
            value={localItemName} // 로컬 상태와 연결
            onChange={handleNameChange} // 로컬 및 부모 상태 업데이트
          />
        ) : (
          <p className="text-sm text-gray-800">{itemName} </p>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleDelete}
          className="flex justify-center items-center rounded-md bg-white"
        >
          <img src={CheckData_minus} />
        </button>
      ) : null}
    </div>
  );
}
