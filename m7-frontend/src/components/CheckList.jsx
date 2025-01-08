import { CheckData } from "./CheckData";
import { CheckInput } from "./CheckInput";

export function CheckList({ title, data, isEdit }) {
  return (
    <div className="flex flex-col bg-gray-100 py-4 px-1 rounded-md w-[320px] h-auto gap-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]">
      <p className="font-bold ml-5 text-sm">{title}</p>

      <div className="flex flex-col items-center gap-[14px]">
        <CheckData content="데이터1" />
        <CheckInput />
      </div>
    </div>
  );
}
