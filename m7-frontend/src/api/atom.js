import { atom } from "recoil";

// Define Recoil atoms
export const locationsState = atom({
  key: "locationsState",
  default: [
    {
      id: 1,
      name: "오사카",
      country: "일본",
      currency_unit: "JPY",
    },
    {
      id: 2,
      name: "뉴욕",
      country: "미국",
      currency_unit: "USD",
    },
    {
      id: 3,
      name: "다낭",
      country: "베트남",
      currency_unit: "JPY",
    },
    {
      id: 4,
      name: "방콕",
      country: "태국",
      currency_unit: "JPY",
    },
    {
      id: 5,
      name: "도쿄",
      country: "일본",
      currency_unit: "JPY",
    },
  ],
});

export const exchangeRatesState = atom({
  key: "exchangeRatesState",
  default: [
    {
      country: "일본",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
    {
      country: "미국",
      currency_unit: "USD",
      exchange_rate: 1400,
    },
    {
      country: "베트남",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
    {
      country: "태국",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
  ],
});

export const airlinesState = atom({
  key: "airlinesState",
  default: [
    {
      location: 1,
      airline: {
        id: 1,
        name: "대한항공",
        url: "https://www.koreanair.com",
      },
    },
    {
      location: 1,
      airline: {
        id: 2,
        name: "에어서울",
        url: "https://www.airseoul.com",
      },
    },
    {
      location: 1,
      airline: {
        id: 3,
        name: "아시아나항공",
        url: "https://www.flyasiana.com",
      },
    },
    {
      location: 2,
      airline: {
        id: 1,
        name: "대한항공",
        url: "https://www.koreanair.com",
      },
    },
    {
      location: 3,
      airline: {
        id: 1,
        name: "대한항공",
        url: "https://www.koreanair.com",
      },
    },
    {
      location: 4,
      airline: {
        id: 1,
        name: "대한항공",
        url: "https://www.koreanair.com",
      },
    },
    {
      location: 5,
      airline: {
        id: 1,
        name: "대한항공",
        url: "https://www.koreanair.com",
      },
    },
  ],
});

export const restaurantsState = atom({
  key: "restaurantsState",
  default: [
    {
      id: 1,
      name: "string",
      signature: "string",
      url: "string",
    },
  ],
});

export const attractionsState = atom({
  key: "attractionsState",
  default: [
    {
      id: 1,
      name: "string",
      url: "string",
    },
  ],
});

export const souvenirsState = atom({
  key: "souvenirsState",
  default: [
    {
      id: 1,
      name: "string",
      url: "string",
    },
  ],
});

export const signupMessageState = atom({
  key: "signupMessageState",
  default: "",
});
