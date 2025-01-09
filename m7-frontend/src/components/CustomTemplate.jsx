import Header from "./Header";
import { CheckList } from "./CheckList";
import { useState } from "react";

const CustomTemplate = ({ isTemplate, icon, id, title, data }) => {
  const template = data.find((item) => String(item.id) === String(id));

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
          {template.supplies.map((item) => (
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

export default CustomTemplate;
