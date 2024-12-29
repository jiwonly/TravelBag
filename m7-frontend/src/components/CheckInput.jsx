import { useState } from "react";
import Checkbox_No from "../assets/Checkbox_No.svg";
import CheckData_plus from "../assets/CheckData_plus.svg";

export function CheckInput() {
  return (
    <div className="flex justify-between items-center border bg-white w-[300px] px-3 py-1.5 rounded-lg">
      <div className="flex items-center gap-3">
        <img
          src={Checkbox_No} // 상태에 따라 이미지 변경
          alt="checkbox" // 클릭 가능한 스타일
        />
        <p className="text-[#999] text-sm">원하는 물품을 입력하세요</p>
      </div>
      <button className="flex justify-center items-center rounded-md bg-white">
        <img src={CheckData_plus} alt="delete" />
      </button>
    </div>
  );
}
