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
    ({ bagId, categoryId }) =>
    ({ get }) => {
      const bagItems = get(bagItemState);
      const thisBag = bagItems.find(
        (bag) => String(bag.bagId) === String(bagId)
      );
      if (!thisBag) return []; // 해당 bagId가 없을 경우 빈 배열 반환

      const categoryItems = thisBag.items.find(
        (item) => String(item.categoryId) === String(categoryId)
      );
      return categoryItems ? [...categoryItems.item] : []; // 불변성을 위해 새 배열 반환
    },
  set:
    ({ bagId, categoryId }) =>
    ({ set, get }, newValue) => {
      const bagItems = get(bagItemState); // 기존 상태 가져오기
      const thisBagIndex = bagItems.findIndex(
        (bag) => String(bag.bagId) === String(bagId)
      );

      if (thisBagIndex === -1) return; // 해당 bagId가 없으면 아무 작업도 하지 않음

      const updatedBagItems = bagItems.map((bag, index) => {
        if (index !== thisBagIndex) return bag; // 다른 가방은 변경하지 않음

        const updatedItems = bag.items.map((item) => {
          if (String(item.categoryId) !== String(categoryId)) return item; // 다른 카테고리는 변경하지 않음
          return {
            ...item,
            item: [...newValue], // 새 배열로 업데이트
          };
        });

        return {
          ...bag,
          items: updatedItems, // 변경된 items 배열 할당
        };
      });

      set(bagItemState, updatedBagItems); // 상태 업데이트
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
        nextState = state.map((bag) =>
          String(bag.id) === String(action.data.id)
            ? { ...bag, name: action.data.name }
            : bag
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
export const getRecommendItemsByCategory = selectorFamily({
  key: "getRecommendItemsByCategory",
  get:
    (categoryId) =>
    ({ get }) => {
      const recommendItems = get(recommendItemState);

      // categoryId에 해당하는 객체를 찾고 item만 반환
      const foundItem = recommendItems.find(
        (recommendItem) =>
          String(recommendItem.categoryId) === String(categoryId)
      );

      return foundItem ? foundItem.item : []; // 없으면 빈 배열 반환
    },
});
