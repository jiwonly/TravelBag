import { useState, useContext } from "react";
import Checkbox_No from "../assets/Checkbox_No.svg";
import CheckData_plus from "../assets/CheckData_plus.svg";
import { addItemToData } from "@/util/addItemToData";

export function CheckInput({ setListData, isEdit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    addItemToData(inputValue, setListData);
    setInputValue(""); // 입력창 초기화
  };

  // enter 키 입력 시 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <img src={Checkbox_No} />
        <input
          className="text-gray-800 text-sm outline-none"
          placeholder="원하는 물품을 입력하세요"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        onClick={handleAdd}
        className="flex justify-center items-center rounded-md bg-white"
      >
        <img src={CheckData_plus} />
      </button>
    </div>
  );
}
