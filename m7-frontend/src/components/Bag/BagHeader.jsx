import { useContext, useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import trashIcon from "../../assets/icon/trash.svg";
import { SelectedDisplatchData } from "@/pages/Bag";
import HeaderButton from "./HeaderButton";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getBags } from "@/api/Bag/selector";
import { bagReducerSelector } from "@/api/Bag/selector";
import { AddedItemStateContext } from "./BagDashboard";
import { EditStateContext } from "@/pages/Bag";
import { EditDispatchContext } from "@/pages/Bag";
import { getBagDetailsById } from "@/api/Bag/selector";

const BagHeader = ({ icon }) => {
  const added = useContext(AddedItemStateContext);
  const params = useParams();
  const bags = useRecoilValue(getBags);
  const thisBag = useRecoilValue(getBagDetailsById(params.id));

  const realBags = bags.filter((bag) => !bag.temporary);
  const { onChangeBagName } = useContext(SelectedDisplatchData);
  const onChange = onChangeBagName; // 올바른 함수 참조

  const [selectedBagName, setSelectedBagName] = useState(thisBag.name);
  const [editedBagName, setEditedBagName] = useState(thisBag.name);

  const isEditing = useContext(EditStateContext);
  const { onSetEditing } = useContext(EditDispatchContext);
  const [edit, setEdit] = useState(false);
  const bagsDispatch = useSetRecoilState(bagReducerSelector);

  const handleBagUpdateName = (id, title) => {
    bagsDispatch({
      type: "UPDATE_NAME",
      data: { id, title },
    });
  };

  const handleBagUpdateTemporary = (id, temporary) => {
    bagsDispatch({
      type: "UPDATE_TEMPORARY",
      data: { id, temporary },
    });
  };

  const handleBagDelete = (id) => {
    bagsDispatch({
      type: "DELETE",
      id,
    });
  };

  const nav = useNavigate();
  useEffect(() => {
    onSetEditing(thisBag.temporary);
  }, [thisBag.id]);

  const onSetEdit = (value) => {
    setEdit(value);
  };

  const onSelected = (value) => {
    onChange(value);
    setSelectedBagName(value);
    setEditedBagName(value);
  };

  const onUpdateButton = () => {
    const existingTemplate = realBags.find(
      (item) => String(item.name) === String(editedBagName)
    );
    if (isEditing) {
      if (added !== 0) {
        alert("물품 추가를 완료해주세요!");
        return;
      }
      if (existingTemplate && edit) {
        alert("이미 존재하는 템플릿입니다!");
        return;
      } else if (!thisBag.temporary) {
        handleBagUpdateName(thisBag.Stringid, editedBagName);
        setSelectedBagName(editedBagName);
        onSetEditing(false);
        onSetEdit(false);
      }
    } else {
      onSetEditing(true);
    }
    if (thisBag.temporary) {
      if (added !== 0) {
        alert("물품 추가를 완료해주세요!");
        return;
      }
      if (existingTemplate) {
        alert("이미 존재하는 템플릿입니다!");
        onSetEditing(true);
        return;
      } else {
        handleBagUpdateTemporary(thisBag.id, false);
        onSetEdit;
        nav("/");
      }
    }
  };
  const onDeleteButton = () => {
    const bagId = thisBag.id;
    handleBagDelete(bagId);
    nav("/", { replace: true });
  };

  const updateStyle =
    "w-[55px] h-10 bg-[#24a3b6] rounded-[12px] flex justify-center items-center text-white text-sm font-semibold font-[Pretendard]";

  const deleteStyle =
    "w-10 h-10 bg-[#24a3b6] rounded-[12px] flex justify-center items-center";

  return (
    <div className="flex items-center py-[12px] px-[23px] gap-[10px] self-stretch border-t border-l border-r rounded-t-[16px] border-[#e5e6e8] bg-[var(--White,_#FFF)] relative">
      <section className="icon w-[40px] h-[40px] flex-shrink-0">
        <img src={`/src/assets/icon/${icon}.svg`} alt="icon" />
      </section>

      <div className="flex flex-col">
        {isEditing ? (
          <input
            type="text"
            value={editedBagName}
            onChange={(e) => {
              setEditedBagName(e.target.value);
              onSetEdit(true);
            }}
            className="text-[16px] font-[Pretendard] leading-[28px] text-[#393940] border border-gray-300 rounded px-2 py-1"
          />
        ) : (
          <Select onValueChange={(value) => onSelected(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={selectedBagName} />
            </SelectTrigger>
            <SelectContent>
              {realBags.map((bag) => (
                <SelectItem key={bag.id} value={bag.name}>
                  {bag.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="absolute right-[25px] flex gap-2">
        <HeaderButton
          bagTemporary={thisBag.temporary}
          style={updateStyle}
          onClick={onUpdateButton}
          isEditing={isEditing}
        />
        <HeaderButton
          style={deleteStyle}
          imageSrc={trashIcon}
          onClick={onDeleteButton}
        />
      </div>
    </div>
  );
};

export default BagHeader;
