import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BagIdRefContext } from "@/App";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  bagReducerSelector,
  getThisTemplateItemById,
} from "@/api/Bag/selector";
import { createBagAPI } from "@/api/api";

const TemplateButton = ({ templateId, style }) => {
  const memberId = 1;
  const bagIdRef = useContext(BagIdRefContext);
  const nav = useNavigate();
  let templateTitle = "";

  switch (templateId) {
    case 1:
      templateTitle = "내 마음대로 시작하기";
      break;
    case 2:
      templateTitle = "여자 혼자 여행";
      break;
    case 3:
      templateTitle = "남자 혼자 여행";
      break;
    case 4:
      templateTitle = "비즈니스 여행";
      break;
  }

  const onClick = () => {
    handleBagCreate();
    nav(`/bag/${bagIdRef.current - 1}`);
  };

  const handleBagCreate = async () => {
    try {
      const response = await createBagAPI(memberId, templateId, templateTitle);
      bagIdRef.current++;
      nav(`/bag/${response.id}`);
    } catch (error) {
      console.error("Error creating bag:", error);
    }
  };

  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {"+"}
      </button>
    </div>
  );
};

export default TemplateButton;
