import { useRecoilState } from "recoil";
import { exchangeRatesState } from "@/api/atom.js";
import { fetchExchangeRatesAPI } from "@/api/api.js";
import React, { useEffect } from "react";

import RateItem from "./RateItem.jsx";


const ExchangeRate = ({ location_id }) => {
  const [exchangeRates, setExchangeRates] = useRecoilState(exchangeRatesState);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetchExchangeRatesAPI(location_id);
        setExchangeRates(response);
      } catch (error) {
        console.error("Error fetching :", error);
      }
    };

    fetchExchangeRates();
  }, [location_id]);

  return (
    <div className="mt-[20px] mb-[50px] ">
      <div className="text-[17px] text-gray-900 font-bold">환율</div>
      <div className="flex flex-row mt-[10px]">
        <RateItem key={exchangeRates.id} {...exchangeRates} />
      </div>
    </div>
  );
};

export default ExchangeRate;
