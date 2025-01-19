import { getEatImage } from "@/util/get-eat-image.js";
import { getEnjoyImage } from "@/util/get-enjoy-image.js";
import { getShopImage } from "@/util/get-shop-image.js";

const EESItem = ({ content, id, name, signature, url }) => {
  const getImage = (content, id) => {
    if (content === "eat") {
      return getEatImage(id);
    }

    if (content === "enjoy") {
      return getEnjoyImage(id);
    }

    if (content === "shop") {
      return getShopImage(id);
    }
  };

  const onURL = () => {
    if (url) {
      window.open(url, "_blank"); // 새 창에서 열기
    }
  };

  return (
    <div>
      <div
        className="flex justify-center w-auto min-w-[150px] h-[170px] flex-col gap-[10px] items-center border [background:var(--Gray-50,#F5F5F6)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] p-1 rounded-xl border-solid border-[#EAEAEA] cursor-pointer"
        onClick={onURL}
      >
        <div className="flex justify-center">
          <img
            className="flex justify-center items-start shrink-0 rounded-2xl"
            src={getImage(content, id)}
          />
        </div>
        <div className="flex flex-col items-center justify-center p-1">
          <div className="items-center self-stretch text-black text-center [font-family:Pretendard] text-xs font-medium leading-[13px]">
            {name}
          </div>
          {signature && (
            <div className="items-center self-stretch text-black text-center [font-family:Pretendard] text-xs font-medium leading-[13px]">
              {signature}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EESItem;

