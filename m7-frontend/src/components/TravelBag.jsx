import { useContext } from "react";
import Button from "./Button";
import { TemplateStateContext } from "@/App";

const TravelBag = () => {
  const data = useContext(TemplateStateContext);
  const style =
    "w-[240px] h-[53px] min-w-[240px] p-[20px] flex items-center rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom text-[16px] font-[Pretendard] text-gray-800";
  return (
    <div
      className="TravelBag grid grid-cols-4"
      style={{
        rowGap: "15px",
        columnGap: "30px",
      }}
    >
      {data.map((item) => (
        <Button
          key={item.id}
          {...item}
          isBasic={false}
          id={item.id}
          title={item.title}
          style={style}
        />
      ))}
    </div>
  );
};

export default TravelBag;
