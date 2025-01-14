import kakao from "../../assets/icon/kakao.webp";

const KakaoButton = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className="flex w-[320px] h-[40px] justify-center items-center border-none bg-[#fddc3f] text-sm text-[#000000] px-4 py-2 rounded-[10px] leading-5"
      >
        카카오톡
      </button>
      <img src={kakao} className="absolute w-[30px] h-[30px] ml-[10px]" />
    </div>
  );
};

export default KakaoButton;
