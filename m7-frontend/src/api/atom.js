import { atom } from "recoil";

// 회원 카카오 ID 상태
export const kakaoIdState = atom({
  key: "kakaoIdState",
  default: [],
});

export const membersState = atom({
  key: "membersState",
  default: [],
});

export const locationsState = atom({
  key: "locationsState",
  default: [],
});

export const exchangeRatesState = atom({
  key: "exchangeRatesState",
  default: [],
});

export const airlinesState = atom({
  key: "airlinesState",
  default: [],
});

export const restaurantsState = atom({
  key: "restaurantsState",
  default: [],
});

export const attractionsState = atom({
  key: "attractionsState",
  default: [],
});

export const souvenirsState = atom({
  key: "souvenirsState",
  default: [],
});

export const registersState = atom({
  key: "registersState",
  default: [],
});

export const signupMessageState = atom({
  key: "signupMessageState",
  default: "",
});

export const bagsState = atom({
  key: "bagsState",
  default: [],
});

export const realBagsState = atom({
  key: "realBagsState",
  default: [],
});

export const sortedRealBagsState = atom({
  key: "sortedRealBagsState",
  default: [],
});

export const thisBagItemsState = atom({
  key: "itemsByCategory",
  default: [],
});

export const recommendItemsState = atom({
  key: "recommendItemsState",
  default: [],
});
