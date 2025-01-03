import LoginImage from "../assets/LoginImage.png";
import LoginLogo from "../assets/LoginLogo.svg";
import InfoInputButton from "./InfoInputButton";

const HalfTemplate = ({ type }) => {
  return (
    <div className="flex justify-center items-center gap-[30px] p-[28px] bg-white">
      <div className="flex flex-col justify-center items-center w-[490px] h-[667px] px-20 py-6  border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gradient---Off-White,linear-gradient(180deg,#F6F6F6_0%,#FFF_100%))] rounded-2xl border-solid">
        <img src={LoginLogo} className="w-[210px] mb-[60px]" />

        {type === "login" ? (
          <div className="flex flex-col gap-[13px]">
            <InfoInputButton content="아이디" />
            <InfoInputButton content="비밀번호" />
          </div>
        ) : (
          <div>
            <InfoInputButton content="아이디" />
            <InfoInputButton content="비밀번호" />
            <InfoInputButton content="이메일" />
            <InfoInputButton content="전화번호" />
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
