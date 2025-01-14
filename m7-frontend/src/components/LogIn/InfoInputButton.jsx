import pw from "../../assets/icon/pw.svg";
import { useState } from "react";

const InfoInputButton = ({ content, type, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisibility = () => {
    setShowPassword(!showPassword); // 비밀번호 표시 상태 토글
  };

  // type이 password일 때만 이벤트 헨들러가 가능하게 처리
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex items-center">
      <input
        type={inputType}
        name={name}
        placeholder={content}
        className="flex w-[320px] h-[40px] items-center border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gray-50,#F5F5F6)] text-sm font-[Pretendard-Light] px-3 py-2.5 rounded-[10px] border-solid leading-5"
      />
      {type === "password" && (
        <img
          src={pw}
          alt="password icon"
          onClick={onPasswordVisibility}
          className="absolute w-5 h-5 cursor-pointer ml-[290px]"
        />
      )}
    </div>
  );
};

export default InfoInputButton;
