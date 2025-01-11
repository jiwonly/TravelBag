import { useState, useContext } from "react";
import Checkbox_No from "../assets/Checkbox_No.svg";
import CheckData_plus from "../assets/CheckData_plus.svg";
import { AddDispatchContext } from "@/App";
import { AddStateContext } from "@/App";

export function CheckInput({ onAdd }) {
  const added = useContext(AddStateContext);
  const { onSetAdded } = useContext(AddDispatchContext);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClickAdd = () => {
    onAdd(inputValue);
    onSetAdded(true);
    setInputValue("");
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposing(false);
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing) {
      onClickAdd();
    }
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <img src={Checkbox_No} />
        <input
          className="text-gray-800 text-sm outline-none"
          placeholder="원하는 물품을 입력하세요"
          value={inputValue}
          onChange={(e) => {
            handleChange(e);
            onSetAdded(false);
          }}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        onClick={onClickAdd}
        className="flex justify-center items-center rounded-md bg-white"
      >
        <img src={CheckData_plus} />
      </button>
    </div>
  );
}
