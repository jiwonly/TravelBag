import LoginImage from "../../assets/LoginImage.png";
import LoginLogo from "../../assets/LoginLogo.svg";
import KakaoButton from "./KakaoButton.jsx";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/api/api.js";

const HalfTemplate = ({ type }) => {
  const nav = useNavigate();

  return (
    <div className="flex justify-center items-center gap-[30px] p-[28px] h-screen bg-white">
      <div className="flex flex-col justify-center items-center w-[490px] h-[667px] px-20 py-6  border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gradient---Off-White,linear-gradient(180deg,#F6F6F6_0%,#FFF_100%))] rounded-2xl border-solid">
        <img src={LoginLogo} className="w-[220px]" />
        <div className="flex flex-col gap-[13px]">
          {/* 카카오 로그인 버튼 */}
          <div className="text-center">
            <div className="m-[60px] text-[#393940] text-[17px]">
              <p>여행 준비를 더 쉽게,</p>
              <p>효율적인 여행 준비의 시작!</p>
            </div>
            <div className="mb-[20px] text-[#444444] text-[14px]">
              사용 설명서 보러 가기
            </div>
          </div>
          <KakaoButton
            onClick={() => {
              window.location.href = `${API_BASE_URL}/oauth2/authorization/kakao`;
            }}
          />
          <div
            className="mb-[20px] text-[#444444] text-[14px] cursor-pointer"
            onClick={() => {
              window.location.href =
                "https://www.notion.so/FE-b933e32cb3734514a904392437039f06";
            }}
          >
            사용 설명서 보러 가기
          </div>
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
