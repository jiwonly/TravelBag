const Header = ({ icon, title, memo }) => {
  return (
    <div className="flex items-center py-[16px] px-[24px] gap-[9px] self-stretch border-b border-[#e5e6e8]">
      <section className="icon w-[30px] h-[30px] flex-shrink-0">
        <img src={`${icon}.png`} alt={title} />
      </section>
      <div className="flex flex-col">
        <section className="title text-[17px] font-[Pretendard] not-italic leading-[28px] mb-[0px] text-[#393940]">
          {title}
        </section>
        <section className="memo text-[14px] font-medium font-[Pretendard] not-italic leading-[20px] text-gray-500">
          {memo}
        </section>
      </div>
    </div>
  );
};

export default Header;
