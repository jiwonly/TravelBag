import Header from "./Header";
import { CheckList } from "./CheckList";

const CustomTemplate = ({ isTemplate, icon, id, title, data }) => {
  return (
    <div>
      <Header
        isTemplate={isTemplate}
        icon={icon}
        id={id}
        title={title}
        updateButton={true}
      />
      <div className="Custom px-[30px] py-[40px] flex flex-col items-start flex-[1_0_0] self-stretch rounded-b-[16px] border-[1px] bg-[var(--White,_#FFF)] min-h-[685px]">
        <div className="grid grid-cols-2 gap-[25px] w-full">
          <CheckList title="의류" />
          <CheckList title="세면도구" />
          <CheckList title="전자기기" />
          <CheckList title="기타" />
        </div>
      </div>
    </div>
  );
};

export default CustomTemplate;
