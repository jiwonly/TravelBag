import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BagIdRefContext } from "@/App";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagItemState, templateState } from "@/api/Bag/atom";
import {
  bagReducerSelector,
  getThisTemplateItemById,
} from "@/api/Bag/selector";
// import api from "@/api/Bag/api";

const TemplateButton = ({ templateId, style }) => {
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

  // API 연결시 사용!!!!(32부터 지우고 사용)
  /*
    const handleBagCreate = async () => {
    try {
      // 서버에 새 가방 생성 요청
      const createBagResponse = await api.post(`/members/bags`, {
        id: bagIdRef.current,
        name: templateTitle,
        templateId: templateId,
        temporary: true,
      });

      // 서버에 새 가방 아이템 생성 요청
      await api.post(`/members/bags/${createBagResponse.data.id}/items`, {
        items: createBagResponse.data.items, // 템플릿의 아이템
      });

      bagIdRef.current++;
      nav(`/bag/${createBagResponse.data.id}`);
    } catch (error) {
      console.error("Error creating bag:", error);
    }
  };
  */
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {"+"}
      </button>
    </div>
  );
};

export default TemplateButton;
