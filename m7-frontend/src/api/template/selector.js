import { selector } from "recoil";
import { bagState, recommendItemState, itemState } from "./atom";

export const getBags = selector({
  key: "getBags",
  get: ({ get }) => {
    const bags = get(bagState);
    return bags;
  },
});

export const getRecommendItems = selector({
  key: "getRecommendItems",
  get: ({ get }) => {
    const recommendeditems = get(recommendItemState);
    return recommendeditems;
  },
});

export const getItems = selector({
  key: "getItems",
  get: ({ get }) => {
    const items = get(itemState);
    return items;
  },
});
