import { selector, selectorFamily } from "recoil";
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
export const getThisTemplateById = selector({
  key: "getThisTemplateById",
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
export const getThisTemplateItemById = selectorFamily({
  key: "getThisTemplateItemById",
  get:
    (templateId) =>
    ({ get }) => {
      const templateItems = get(templateItemState);
      return templateItems.filter(
        (item) => String(item.templateId) === String(templateId)
      );
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
export const getBagDetailsById = selectorFamily({
  key: "getBagDetailsById",
  get:
    (bagId) =>
    ({ get }) => {
      const bags = get(bagState);
      const thisBag = bags.find((bag) => String(bag.id) === String(bagId));
      return thisBag ? thisBag : [];
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

// 8. 현재 가방 전체 아이템 목록 조회
export const getThisBagItemById = selectorFamily({
  key: "getThisBagItemById",
  get:
    (bagId) =>
    ({ get }) => {
      const bagItems = get(bagItemState);
      const thisBag = bagItems.find(
        (bagItem) => String(bagItem.bagId) === String(bagId)
      );
      return thisBag ? thisBag.items : [];
    },
});

// 현재 가방 카테고리별 아이템 목록 조회
export const getThisBagItemByCategory = selectorFamily({
  key: "getThisBagItemByCategory",
  get:
    (categoryId) =>
    ({ get }) => {
      const bagItems = get(bagItemState);
      const thisBag = bagItems.find((bag) =>
        bag.items.some((item) => item.categoryId === categoryId)
      );
      if (!thisBag) return [];
      const categoryItems = thisBag.items.find(
        (item) => item.categoryId === categoryId
      );
      return categoryItems ? categoryItems.item : [];
    },
  set:
    (categoryId) =>
    ({ set, get }, newValue) => {
      const bagItems = get(bagItemState);
      const thisBagIndex = bagItems.findIndex((bag) =>
        bag.items.some((item) => item.categoryId === categoryId)
      );

      if (thisBagIndex === -1) return;

      const updatedBagItems = [...bagItems];
      const categoryItemsIndex = updatedBagItems[thisBagIndex].items.findIndex(
        (item) => item.categoryId === categoryId
      );

      updatedBagItems[thisBagIndex].items[categoryItemsIndex].item = newValue;
      set(bagItemState, updatedBagItems);
    },
});

// 9. 가방 관련 reducer 함수
export const bagReducerSelector = selector({
  key: "bagReducerSelector",
  get: ({ get }) => {
    const bags = get(bagState);
    return bags;
  },
  set: ({ set, get }, action) => {
    const state = get(bagState);
    let nextState;
    switch (action.type) {
      case "CREATE": {
        const existingTemplate = state.find(
          (item) => String(item.id) === String(action.data.id)
        );
        if (existingTemplate) {
          return;
        }
        nextState = [action.data, ...state];
        break;
      }
      case "UPDATE_NAME": {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id)
            ? { ...item, title: action.data.title }
            : item
        );
        break;
      }
      case "UPDATE_ITEMS": {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id)
            ? { ...item, supplies: action.data.supplies }
            : item
        );
        break;
      }
      case "UPDATE_TEMPORARY": {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id)
            ? { ...item, temporary: action.data.temporary }
            : item
        );
        break;
      }
      case "DELETE": {
        nextState = state.filter(
          (item) => String(item.id) !== String(action.id)
        );
        break;
      }
      default: {
        nextState = state;
      }
    }
    return set(bagState, nextState);
  },
});

// 가방 카테고리별 아이템 관련 Reducer 함수
export const bagItemReducerSelector = selector({
  key: "bagItemReducerSelector",
  get: ({ get }) => {
    const bagItemsByCategory = get(getThisBagItemByCategory);
    return bagItemsByCategory;
  },
  set: ({ set, get }, action) => {
    const state = get(getThisBagItemByCategory);
    let nextState;
    switch (action.type) {
      case "CREATE": {
        const existingItemByCategory = state.find(
          (item) => String(item.name) === String(action.data.name)
        );
        if (existingItemByCategory) {
          return;
        }
        nextState = [action.data, ...state];
        break;
      }
      case "UPDATE_PACKED": {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id)
            ? { ...item, packed: action.data.packed }
            : item
        );
        break;
      }
      case "DELETE": {
        nextState = state.filter(
          (item) => String(item.id) !== String(action.id)
        );
        break;
      }
      default: {
        nextState = state;
      }
    }
    return set(getThisBagItemByCategory, nextState);
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
