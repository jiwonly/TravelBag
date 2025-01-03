import LoginImage from "../assets/LoginImage.png";

const HalfTemplate = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-[30px] p-[28px] bg-white">
      <div className="flex justify-center items-center w-[500px] h-[667px] px-20 py-6 border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gradient---Off-White,linear-gradient(180deg,#F6F6F6_0%,#FFF_100%))] rounded-2xl border-solid"></div>
      <img
        src={LoginImage}
        alt="login"
        className="flex-none justify-center items-center w-[490px] h-auto border-none"
      />
    </div>
  );
};

export default HalfTemplate;
