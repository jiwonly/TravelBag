import { useState, useContext } from "react";
import Checkbox_Yes from "../assets/Checkbox_Yes.svg";
import Checkbox_No from "../assets/Checkbox_No.svg";
import CheckData_minus from "../assets/CheckData_minus.svg";
import { EditStateData } from "@/App";

export function CheckData({ id, content, isEdit, onDelete }) {
  const isEditing = useContext(EditStateData);
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <img
          src={checked ? Checkbox_Yes : Checkbox_No} // 상태에 따라 이미지 변경
          alt="checkbox"
          className="cursor-pointer" // 클릭 가능한 스타일
          onClick={toggleCheckbox} // 클릭 이벤트 핸들러
        />
        <p className="text-sm text-gray-800">{content}</p>
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
