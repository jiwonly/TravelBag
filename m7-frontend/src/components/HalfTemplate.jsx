import LoginImage from "../assets/LoginImage.png";
import LoginLogo from "../assets/LoginLogo.svg";
import InfoInputButton from "./InfoInputButton";
import LoginButton from "./LoginButton";
import KakaoButton from "./KakaoButton";
import RegisterButton from "./RegisterButton";
import { useNavigate } from "react-router-dom";

const HalfTemplate = ({ type, onLogin }) => {
  const nav = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    nav("/");
  };

  return (
    <div className="flex justify-center items-center gap-[30px] p-[28px] bg-white">
      <div className="flex flex-col justify-center items-center w-[490px] h-[667px] px-20 py-6  border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gradient---Off-White,linear-gradient(180deg,#F6F6F6_0%,#FFF_100%))] rounded-2xl border-solid">
        <img src={LoginLogo} className="w-[220px] mb-[60px]" />

        {type === "login" ? (
          <div className="flex flex-col gap-[13px]">
            <InfoInputButton content="아이디" type="text" name="id" />
            <InfoInputButton content="비밀번호" type="password" name="pwd" />
            <div></div>
            <LoginButton content="로그인" onClick={handleLoginClick} />
            <RegisterButton
              onClick={() => {
                nav("/register");
              }}
            />
            <KakaoButton />
          </div>
        ) : (
          <div className="flex flex-col gap-[13px]">
            <InfoInputButton content="아이디" type="text" name="id" />
            <InfoInputButton content="비밀번호" type="password" name="pwd" />
            <InfoInputButton content="이메일" type="text" name="email" />
            <div className="h-[10px]"></div>
            <InfoInputButton content="이름" type="text" name="name" />
            <InfoInputButton
              content="생년월일 8자리"
              type="text"
              name="birthday"
            />
            <InfoInputButton content="전화번호" type="text" name="phone" />
            <div></div>
            <LoginButton content="회원가입" />
          </div>
        )}
      </div>
      <img
        src={LoginImage}
        alt="login"
        className="flex-none justify-center items-center w-[490px] h-auto border-none"
      />
    </div>
  );
};

export default HalfTemplate;
