import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "../components/ui/select";

const Header = ({ isTemplate, icon, title, memo }) => {
  return (
    <div className="flex items-center py-[12px] px-[23px] gap-[10px] self-stretch border-t border-l border-r rounded-t-[16px] border-[#e5e6e8] bg-[var(--White,_#FFF)]">
      <section className="icon w-[40px] h-[40px] flex-shrink-0">
        <img src={`${icon}.png`} alt={title} />
      </section>
      {isTemplate ? (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={title} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eat">먹고 죽으러 가는 여행</SelectItem>
            <SelectItem value="female">여자 혼자 여행</SelectItem>
            <SelectItem value="male">남자 혼자 여행</SelectItem>
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
