import { selector } from "recoil";
import {
  categoryState,
  templateState,
  templateItemState,
  bagState,
  bagItemState,
  recommendItemState,
} from "./atom";

// 1. 템플릿 목록 조회
export const getTemplates = selector({
  key: "getTemplates",
  get: ({ get }) => {
    const templates = get(templateState);
    return templates;
  },
});

// 2. 현재 템플릿 조회
export const getTemplateById = selector({
  key: "getTemplateById",
  get: ({ get }) => {
    return (templateId) => {
      const templates = get(templateState);
      return templates.find(
        (template) => String(template.id) === String(templateId)
      );
    };
  },
});

// 3. 템플릿 아이템 목록 조회
export const getTemplateItems = selector({
  key: "getTemplateItems",
  get: ({ get }) => {
    const templateItems = get(templateItemState);
    return templateItems;
  },
});

// 4. 현재 템플릿 아이템 목록 조회
export const getTemplateItemById = selector({
  key: "getTemplateItemById",
  get: ({ get }) => {
    return (templateId) => {
      const templateItems = get(templateItemState);
      return templateItems.find(
        (templateItem) => String(templateItem.templateId) === String(templateId)
      );
    };
  },
});

// 5. 가방 목록 조회
export const getBags = selector({
  key: "getBags",
  get: ({ get }) => {
    const bags = get(bagState);
    return bags;
  },
});

// 6. 가방 상세 조회
export const getBagDetailsById = selector({
  key: "getBagDetailsById",
  get: ({ get }) => {
    return (bagId) => {
      const bags = get(bagState);
      return bags.find((bag) => String(bag.id) === String(bagId));
    };
  },
});

// 7. 가방 아이템 목록 조회
export const getBagItems = selector({
  key: "getItems",
  get: ({ get }) => {
    const items = get(bagItemState);
    return items;
  },
});

// 8. 현재 가방 아이템 목록 조회
export const getBagItemById = selector({
  key: "getBagItemById",
  get: ({ get }) => {
    return (bagId) => {
      const bagItems = get(bagItemState);
      return bagItems.find(
        (bagItem) => String(bagItem.bagId) === String(bagId)
      );
    };
  },
});

// 9. 카테고리 조회
export const getCategory = selector({
  key: "getCategory",
  get: ({ get }) => {
    const category = get(categoryState);
    return category;
  },
});

// 10. 카테고리별 아이템 조회
export const getCategoryItems = selector({
  key: "getCategoryItems",
  get: ({ get }) => {
    return (categoryId) => {
      const categoryItems = get(categoryState);
      return categoryItems.find(
        (categoryItem) => String(categoryItem.id) === String(categoryId)
      );
    };
  },
});

// 11. 추천 아이템 조회
export const getRecommendItems = selector({
  key: "getRecommendItems",
  get: ({ get }) => {
    const recommendedItems = get(recommendItemState);
    return recommendedItems;
  },
});

// 12. 카테고리별 추천 아이템 조회
export const getRecommendItemsByCategory = selector({
  key: "getRecommendItemsByCategory",
  get: ({ get }) => {
    return (categoryId) => {
      const recommendItems = get(recommendItemState);
      return recommendItems.find(
        (recommendItem) => String(recommendItem.id) === String(categoryId)
      );
    };
  },
});
