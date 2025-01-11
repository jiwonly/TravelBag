import { getEatImage } from "@/util/get-eat-image";
import { getEnjoyImage } from "@/util/get-enjoy-image";
import { getShopImage } from "@/util/get-shop-image";

const EESItem = ({ location_id, content, id, name, signature, url }) => {
  const getImage = (location_id, content, id) => {
    if (content === "eat") {
      return getEatImage(location_id, id);
    }

    if (content === "enjoy") {
      return getEnjoyImage(location_id, id);
    }

    if (content === "shop") {
      return getShopImage(location_id, id);
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
            src={getImage(location_id, content, id)}
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
