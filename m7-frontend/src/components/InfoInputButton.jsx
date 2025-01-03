import pw from "../assets/icon/pw.svg";

const InfoInputButton = ({ content, type }) => {
  return (
    <div className="flex items-center">
      <input
        type={type}
        placeholder={content}
        className="flex w-[320px] h-[40px] items-center border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gray-50,#F5F5F6)] text-sm font-[Pretendard-Light] px-3 py-2.5 rounded-[10px] border-solid leading-5"
      />
      {type === "password" && (
        <img
          src={pw}
          alt="password icon"
          className="absolute w-5 h-5 cursor-pointer ml-[290px]" // 이미지 오른쪽에 배치
        />
      )}
    </div>
  );
};

export default InfoInputButton;
