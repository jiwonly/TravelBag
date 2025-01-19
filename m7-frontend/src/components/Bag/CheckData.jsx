import { useContext, useEffect, useState } from "react";
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

  // 부모 상태가 변경될 때 로컬 상태 동기화
  useEffect(() => {
    setLocalItemName(itemName);
  }, [itemName]);

  const handleDelete = () => {
    onDelete(itemId);
  };

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    setLocalItemName(updatedName); // 로컬 상태 업데이트
  };

  const handleNameBlur = () => {
    // 입력 종료 시 부모 상태 업데이트
    if (localItemName.trim() !== "") {
      onUpdateName(itemId, localItemName.trim());
    }
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
            onChange={handleNameChange} // 로컬 상태 업데이트
            onBlur={handleNameBlur} // 포커스 해제 시 부모 상태 업데이트
          />
        ) : (
          <p className="text-sm text-gray-800">{localItemName} </p>
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
