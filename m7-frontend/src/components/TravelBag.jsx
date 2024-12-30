import { useContext } from "react";
import Button from "./Button";
import { TemplateStateContext } from "@/App";

const TravelBag = () => {
  const data = useContext(TemplateStateContext);
  return (
    <div className="TravelBag flex gap-[30px]">
      {data.map((item) => (
        <Button key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TravelBag;
