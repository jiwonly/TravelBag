import { useState, useContext } from "react";
import Checkbox_No from "../../assets/Checkbox_No.svg";
import CheckData_plus from "../../assets/CheckData_plus.svg";
import {
  AddedItemStateContext,
  AddedItemDispatchContext,
} from "./BagDashboard.jsx";

export function CheckInput({ onCreateItem }) {
  const added = useContext(AddedItemStateContext);
  const { onSetAdded } = useContext(AddedItemDispatchContext);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [isAddedCalled, setIsAddedCalled] = useState(false); // onSetAdded 호출 여부 관리

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // onSetAdded 호출 여부 확인
    if (!isAddedCalled) {
      onSetAdded(added + 1);
      setIsAddedCalled(true);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposing(false);
    setInputValue(e.target.value); // 입력값 최종 반영
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing && inputValue.trim() !== "") {
      onClickAdd();
    }
  };

  const onClickAdd = () => {
    if (inputValue.trim() === "") return; // 빈 문자열 방지
    onCreateItem(inputValue); // 아이템 추가
    onSetAdded(added - 1); // 추가 상태 업데이트
    setInputValue(""); // 입력값 초기화
    setIsAddedCalled(false); // 호출 상태 초기화
  };

  return (
    <div className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <img src={Checkbox_No} />
        <input
          className="text-gray-800 text-sm outline-none w-[200px]"
          placeholder="원하는 물품을 입력하세요"
          value={inputValue} // state와 연결
          onChange={handleChange} // 변경 핸들러
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        onClick={inputValue !== "" ? onClickAdd : null}
        className="flex justify-center items-center rounded-md bg-white"
      >
        <img src={CheckData_plus} />
      </button>
    </div>
  );
}
