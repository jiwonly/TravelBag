import { useNavigate } from "react-router-dom";

const Button = ({ id, title }) => {
  const nav = useNavigate();
  const onClick = () => nav(`/template/${id}`);
  return (
    <>
      <button
        onClick={onClick}
        className="Button w-[240px] h-[53px] min-w-[240px] p-[20px] flex items-center rounded-[12px] border-[1px] bg-[var(--Gray-50,_#F5F5F6)] [box-shadow:0px] shadow-custom text-[16px] font-[Pretendard] text-gray-800"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
