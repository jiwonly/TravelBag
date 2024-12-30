import { useContext, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { TemplateStateContext } from "@/App";
import { SelectedDisplatchData, SelectedSateData } from "@/pages/Template";

const Header = ({ isTemplate, icon, title, memo }) => {
  const data = useContext(TemplateStateContext);
  const dispatchContext = useContext(SelectedDisplatchData);
  const onChange = dispatchContext?.onChange;
  const [selectedTitle, setSelectedTitle] = useState(title); // 선택된 값을 useState에 보관!!!

  const onSelected = (value) => {
    onChange(value);
    setSelectedTitle(value);
  };

  return (
    <div className="flex items-center py-[12px] px-[23px] gap-[10px] self-stretch border-t border-l border-r rounded-t-[16px] border-[#e5e6e8] bg-[var(--White,_#FFF)]">
      <section className="icon w-[40px] h-[40px] flex-shrink-0">
        <img src={`/${icon}.png`} alt="icon" />
      </section>
      {isTemplate ? (
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
      ) : (
        <div className="flex flex-col">
          <section className="title text-[17px] font-[Pretendard] font-semibold not-italic leading-[28px] mb-[0px] text-[#393940]">
            {title}
          </section>
          <section className="memo text-[14px] font-medium font-[Pretendard] not-italic leading-[20px] text-gray-500">
            {memo}
          </section>
        </div>
      )}
    </div>
  );
};

export default Header;
