import { newSupplies, woman, man, business } from "./get-supplies-list";

export const templateList = [
  {
    title: "내 마음대로 시작하기",
    id: 0,
    supplies: newSupplies,
  },
  {
    title: "여자 혼자 여행",
    id: 1,
    supplies: woman,
  },
  {
    title: "남자 혼자 여행",
    id: 2,
    supplies: man,
  },
  {
    title: "비즈니스 여행",
    id: 3,
    supplies: business,
  },
];
