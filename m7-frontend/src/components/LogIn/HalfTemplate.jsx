import LoginImage from "../../assets/LoginImage.png";
import LoginLogo from "../../assets/LoginLogo.svg";
import KakaoButton from "./KakaoButton";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/api/api";

const HalfTemplate = ({ type, onLogin }) => {
  const nav = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    nav("/");
  };

  return (
    <div className="flex justify-center items-center gap-[30px] p-[28px] h-screen bg-white">
      <div className="flex flex-col justify-center items-center w-[490px] h-[667px] px-20 py-6  border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gradient---Off-White,linear-gradient(180deg,#F6F6F6_0%,#FFF_100%))] rounded-2xl border-solid">
        <img src={LoginLogo} className="w-[220px] mb-[60px]" />
        <div className="flex flex-col gap-[13px]">
          {/* <InfoInputButton content="아이디" type="text" name="id" />
            <InfoInputButton content="비밀번호" type="password" name="pwd" />
            <div></div> */}

          {/* <LoginButton content="로그인" onClick={handleLoginClick} />
            <RegisterButton
              onClick={() => {
                nav("/register");
              }}
            /> */}

          {/* 카카오 로그인 버튼 */}
          <KakaoButton
            onClick={() => {
              window.location.href = `${API_BASE_URL}/oauth2/authorization/kakao`;
            }}
          />
        </div>
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
