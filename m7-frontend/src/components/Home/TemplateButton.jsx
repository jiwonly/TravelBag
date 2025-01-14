import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BagIdRefContext } from "@/App";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagItemState, bagState, templateState } from "@/api/Bag/atom";
import {
  bagReducerSelector,
  getThisTemplateItemById,
} from "@/api/Bag/selector";

const TemplateButton = ({ isTemporary, templateId, name, style }) => {
  const bagIdRef = useContext(BagIdRefContext);
  const nav = useNavigate();
  let templateTitle = "";

  switch (templateId) {
    case 1:
      templateTitle = "내 맘대로 시작하기";
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

  const bagsDispatch = useSetRecoilState(bagReducerSelector);
  const bagItemsDispatch = useSetRecoilState(bagItemState);
  const bags = useRecoilValue(bagState);
  const templates = useRecoilValue(templateState);
  const thisTemplate = templates.find(
    (item) => String(item.id) === String(templateId)
  );
  const thisTemplateItems = useRecoilValue(getThisTemplateItemById(templateId));
  const handleBagCreate = (templateName) => {
    // 새 가방 생성
    bagsDispatch({
      type: "CREATE",
      data: {
        id: bagIdRef.current,
        name: templateTitle,
        template: templateName,
        temporary: true,
      },
    });

    // 새 가방 아이템 생성
    const newBagItems = {
      bagId: bagIdRef.current,
      items: thisTemplateItems[0]?.items || [], // 템플릿의 아이템을 복사하여 추가
    };

    bagItemsDispatch((prev) => [...prev, newBagItems]); // bagItemState 업데이트
    bagIdRef.current++;
  };
  const onClick = () => {
    handleBagCreate(thisTemplate.name);
    nav(`/bag/${bagIdRef.current - 1}`);
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
