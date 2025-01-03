const RegisterButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-[320px] h-[40px] justify-center items-center border border-[color:var(--Gray-100,#E5E6E8)] text-sm text-gray-900 px-4 py-2 rounded-[10px] border-solid leading-5"
      >
        회원가입
      </button>
    </div>
  );
};

export default RegisterButton;
