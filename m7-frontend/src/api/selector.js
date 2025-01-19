import { selector, selectorFamily } from "recoil";
import {
  locationsState,
  exchangeRatesState,
  airlinesState,
  restaurantsState,
  attractionsState,
  souvenirsState,
  bagsState,
} from "./atom";

export const selectLocations = selector({
  key: "selectLocations",
  get: ({ get }) => {
    const locations = get(locationsState);
    return locations;
  },
});

export const selectExchangeRates = selector({
  key: "selectExchangeRates",
  get: ({ get }) => {
    const exchangeRates = get(exchangeRatesState);
    return exchangeRates;
  },
});

export const selectAirlines = selector({
  key: "selectAirlines",
  get: ({ get }) => {
    const airlines = get(airlinesState);
    return airlines;
  },
});

export const selectRestaurants = selector({
  key: "selectRestaurants",
  get: ({ get }) => {
    const restaurants = get(restaurantsState);
    return restaurants;
  },
});

export const selectAttractions = selector({
  key: "selectAttractions",
  get: ({ get }) => {
    const attractions = get(attractionsState);
    return attractions;
  },
});

export const selectSouvenirs = selector({
  key: "selectSouvenirs",
  get: ({ get }) => {
    const souvenirs = get(souvenirsState);
    return souvenirs;
  },
});

// 현재 가방을 ID로 가져오는 selectorFamily
export const selectThisBag = selectorFamily({
  key: "selectThisBag",
  get:
    (bagId) =>
    ({ get }) => {
      const allBags = get(bagsState);
      return allBags.find((bag) => bag.id === bagId) || null;
    },
});
