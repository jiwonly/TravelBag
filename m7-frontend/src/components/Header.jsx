import { useContext, useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { TemplateStateContext } from "@/App";
import { SelectedDisplatchData } from "@/pages/Template";
import trashIcon from "../assets/icon/trash.svg";
import HeaderButton from "./HeaderButton";
import { TemplateDispatchContext } from "@/App";
import { useNavigate } from "react-router-dom";

const Header = ({ isTemplate, icon, id, title, memo, updateButton }) => {
  const data = useContext(TemplateStateContext);
  const dispatchContext = useContext(SelectedDisplatchData);
  const onChange = dispatchContext?.onChange;
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(id < 4);
  const [editedTitle, setEditedTitle] = useState(title);
  const { onDelete, onUpdate, onCreate } = useContext(TemplateDispatchContext);
  const nav = useNavigate();

  useEffect(() => {
    setIsEditing(id < 4);
  }, [id]);

  const onSelected = (value) => {
    onChange(value);
    setSelectedTitle(value);
    setEditedTitle(value);
  };

  const onUpdateButton = () => {
    if (isEditing) {
      onUpdate(id, editedTitle);
      setSelectedTitle(editedTitle);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
    if (id < 4) {
      onCreate(editedTitle);
      nav("/");
    }
  };

  const onDeleteButton = () => {
    onDelete(id);
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
      {isTemplate ? (
        <div className="flex flex-col">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => {
                setEditedTitle(e.target.value);
              }}
              className="text-[17px] font-[Pretendard] leading-[28px] text-[#393940] border border-gray-300 rounded px-2 py-1"
            />
          ) : (
            <Select onValueChange={(value) => onSelected(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectedTitle} />
              </SelectTrigger>
              <SelectContent>
                {data.map((item) => (
                  <SelectItem key={item.id} value={item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          <section className="title text-[17px] font-[Pretendard] not-italic leading-[28px] mb-[0px] text-[#393940]">
            {title}
          </section>
          <section className="memo text-[14px] font-medium font-[Pretendard] not-italic leading-[20px] text-gray-500">
            {memo}
          </section>
        </div>
      )}
      <div className="absolute right-[25px] flex gap-2">
        {updateButton && (
          <>
            <HeaderButton
              id={id}
              title={title}
              style={updateStyle}
              onClick={onUpdateButton}
              isEditing={isEditing}
            />
            <HeaderButton
              id={id}
              imageSrc={trashIcon}
              style={deleteStyle}
              onClick={onDeleteButton}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
