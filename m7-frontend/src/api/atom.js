import { atom } from "recoil";

// Define Recoil atoms
export const locationsState = atom({
  key: "locationsState",
  default: [
    {
      id: 1,
      name: "string",
      country: "string",
      currency_unit: "string",
    },
  ],
});

export const exchangeRatesState = atom({
  key: "exchangeRatesState",
  default: [
    {
      country: "string",
      currency_unit: "string",
      exchange_rate: 0,
    },
  ],
});

export const airlinesState = atom({
  key: "airlinesState",
  default: [
    {
      id: 1,
      name: "string",
      url: "string",
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
