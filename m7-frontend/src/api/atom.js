import { atom } from "recoil";

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
      location_id: 1,
      country: "일본",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
    {
      location_id: 2,
      country: "미국",
      currency_unit: "USD",
      exchange_rate: 1400,
    },
    {
      location_id: 3,
      country: "베트남",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
    {
      location_id: 4,
      country: "태국",
      currency_unit: "JPY",
      exchange_rate: 900,
    },
    {
      location_id: 5,
      country: "일본",
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
      location: 2,
      airline: {
        id: 3,
        name: "아시아나항공",
        url: "https://www.flyasiana.com",
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
      location: 3,
      airline: {
        id: 2,
        name: "에어서울",
        url: "https://www.airseoul.com",
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
      location_id: 5,
      name: "츠케멘 야스베에 아키하바라점",
      signature: "대표 메뉴: 츠케멘",
      url: "string",
    },
    {
      id: 2,
      location_id: 5,
      name: "규카츠 모토무라 아키하바라점",
      signature: "대표 메뉴: 규카츠",
      url: "string",
    },
    {
      id: 3,
      location_id: 5,
      name: "멘야 쇼오 본점",
      signature: "대표 메뉴: 시오 라멘",
      url: "string",
    },
    {
      id: 4,
      location_id: 5,
      name: "돈카츠 마이센 아오야마 본점",
      signature: "대표 메뉴: 흑돼지 돈카츠, 카츠산도",
      url: "string",
    },
    {
      id: 5,
      location_id: 5,
      name: "Harbs LUMINE Ikebukuro",
      signature: "대표 메뉴: 밀 크레이프",
      url: "string",
    },
  ],
});

export const attractionsState = atom({
  key: "attractionsState",
  default: [
    {
      id: 1,
      location_id: 5,
      name: "도쿄 도청사",
      url: "string",
    },
    {
      id: 2,
      location_id: 5,
      name: "시부야 스크램블 스퀘어",
      url: "string",
    },
    {
      id: 3,
      location_id: 5,
      name: "도쿄 타워",
      url: "string",
    },
    {
      id: 4,
      location_id: 5,
      name: "롯폰기 힐스",
      url: "string",
    },
    {
      id: 5,
      location_id: 5,
      name: "도쿄 스카이트리",
      url: "string",
    },
  ],
});

export const souvenirsState = atom({
  key: "souvenirsState",
  default: [
    {
      id: 1,
      location_id: 5,
      name: "도쿄 바나나",
      url: "string",
    },
    {
      id: 2,
      location_id: 5,
      name: "로이스 초콜릿",
      url: "string",
    },
  ],
});

export const registersState = atom({
  key: "registersState",
  default: [
    {
      id: 1,
      name: "김철수",
      email: "string",
      phone: "string",
    },
    {
      id: 2,
      name: "홍길동",
      email: "string",
      phone: "string",
    },
  ],
});

export const signupMessageState = atom({
  key: "signupMessageState",
  default: "",
});
