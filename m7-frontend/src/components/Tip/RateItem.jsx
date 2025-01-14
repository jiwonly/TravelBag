const RateItem = ({ location_id, country, currency_unit, exchange_rate }) => {
  return (
    <div className="flex flex-row items-center gap-[70px] p-[10px] shrink-0 h-[53px] shrink-0 [background:var(--Gray-50,#F5F5F6)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-lg border-solid border-[#EAEAEA] ">
      <div className="flex flex-row gap-[10px]">
        <p>{country}</p>
        <p>{currency_unit}</p>
      </div>
      <p>{exchange_rate}</p>
    </div>
  );
};

export default RateItem;
