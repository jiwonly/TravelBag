const InfoInputButton = ({ content }) => {
  return (
    <>
      <input
        type="text"
        placeholder={content}
        className="flex w-[320px] h-[40px] items-center border border-[color:var(--Gray-100,#E5E6E8)] [background:var(--Gray-50,#F5F5F6)] text-sm font-[Pretendard-Light] px-3 py-2.5 rounded-[10px] border-solid leading-5"
      />
      
    </>
  );
};

export default InfoInputButton;
