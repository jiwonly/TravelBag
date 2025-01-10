import Header from "./Header";
import { CheckList } from "./CheckList";
import { createContext, useState } from "react";

const CustomStart = ({ isTemplate, icon, id, title, data }) => {
  const addTemplate = data.find((item) => item.id === 0);

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
          {addTemplate.supplies.map((item) => (
            <CheckList
              key={item.id}
              templateId={id}
              listId={item.id}
              title={item.title}
              contents={item.contents}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomStart;
