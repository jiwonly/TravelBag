import { atom } from "recoil";

// Define Recoil atoms

// 1. 카테고리 목록
export const categoryState = atom({
  key: "categoryState",
  default: [
    {
      id: 1,
      name: "ESSENTIAL",
    },
    {
      id: 2,
      name: "CLOTHING",
    },
    {
      id: 3,
      name: "TOILETRIES",
    },
    {
      id: 4,
      name: "ELECTRONICS",
    },
    {
      id: 5,
      name: "MEDICALS",
    },
    {
      id: 6,
      name: "OTHER",
    },
  ],
});

// 2. 템플릿 목록
export const templateState = atom({
  key: "templateState",
  default: [
    {
      id: 1,
      name: "FREESTYLE",
    },
    {
      id: 2,
      name: "WOMAN_SOLO",
    },
    {
      id: 3,
      name: "MAN_SOLO",
    },
    {
      id: 4,
      name: "BUSINESS",
    },
  ],
});

// 3. 템플릿별 아이템 목록
export const templateItemState = atom({
  key: "templateItemState",
  default: [
    {
      templateId: 1,
      items: [
        {
          categoryId: 1,
          item: [],
        },
        {
          categoryId: 2,
          item: [],
        },
        {
          categoryId: 3,
          item: [],
        },
        {
          categoryId: 4,
          item: [],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [],
        },
      ],
    },
    {
      templateId: 2,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: false }],
        },
        {
          categoryId: 2,
          item: [{ id: 2, name: "반바지", packed: true }],
        },
        {
          categoryId: 3,
          item: [
            { id: 3, name: "아이라이너", packed: false },
            { id: 4, name: "블러셔", packed: true },
            { id: 5, name: "쿠션", packed: true },
          ],
        },
        {
          categoryId: 4,
          item: [],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [],
        },
      ],
    },
    {
      templateId: 3,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: false }],
        },
        {
          categoryId: 2,
          item: [
            { id: 1, name: "패딩", packed: false },
            { id: 2, name: "반바지", packed: true },
          ],
        },
        {
          categoryId: 3,
          item: [],
        },
        {
          categoryId: 4,
          item: [{ id: 3, name: "이어폰", packed: false }],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [{ id: 3, name: "볼펜", packed: true }],
        },
      ],
    },
    {
      templateId: 4,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: true }],
        },
        {
          categoryId: 2,
          item: [],
        },
        {
          categoryId: 3,
          item: [
            { id: 2, name: "아이라이너", packed: true },
            { id: 3, name: "블러셔", packed: false },
            { id: 4, name: "쿠션", packed: false },
          ],
        },
        {
          categoryId: 4,
          item: [{ id: 3, name: "이어폰", packed: false }],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [{ id: 3, name: "볼펜", packed: false }],
        },
      ],
    },
  ],
});

// 임시 가방 목록 - 지원
export const bagState2 = atom({
  key: "bagState2",
  default: [],
});

// 4. 가방 목록
export const bagState = atom({
  key: "bagState",
  default: [
    {
      id: 7,
      name: "신나는 유럽 여행",
      template: "WOMAN_SOLO",
      temporary: false,
    },
    {
      id: 6,
      name: "휴식이 필요해 떠나요",
      template: "MAN_SOLO",
      temporary: false,
    },
    {
      id: 5,
      name: "남자 혼자 여행",
      template: "MAN_SOLO",
      temporary: true,
    },
    {
      id: 4,
      name: "출장가기 싫다",
      template: "BUSINESS",
      temporary: false,
    },
    {
      id: 3,
      name: "중학교 친구들과 여행",
      template: "FREESTYLE",
      temporary: false,
    },
    {
      id: 2,
      name: "내 마음대로 시작하기",
      template: "FREESTYLE",
      temporary: true,
    },
    {
      id: 1,
      name: "연인과 오사카",
      template: "FREESTYLE",
      temporary: false,
    },
  ],
});

// 5. 가방별 아이템 목록
export const bagItemState = atom({
  key: "bagItemState",
  default: [
    {
      bagId: 1,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: true }],
        },
        {
          categoryId: 2,
          item: [{ id: 2, name: "패딩", packed: false }],
        },
        {
          categoryId: 3,
          item: [],
        },
        {
          categoryId: 4,
          item: [
            { id: 3, name: "카메라", packed: true },
            { id: 4, name: "휴대폰", packed: true },
          ],
        },
        {
          categoryId: 5,
          item: [{ id: 5, name: "종합감기약", packed: false }],
        },
        {
          categoryId: 6,
          item: [],
        },
      ],
    },
    {
      bagId: 2,
      items: [],
    },
    {
      bagId: 3,
      items: [
        {
          categoryId: 1,
          item: [],
        },
        {
          categoryId: 2,
          item: [{ id: 1, name: "반바지", packed: true }],
        },
        {
          categoryId: 3,
          item: [
            { id: 2, name: "파운데이션", packed: false },
            { id: 3, name: "아이라이너", packed: true },
            { id: 4, name: "쿠션", packed: true },
          ],
        },
        {
          categoryId: 4,
          item: [
            { id: 5, name: "이어폰", packed: true },
            { id: 6, name: "헤어드라이기", packed: true },
            { id: 7, name: "고데기", packed: true },
            { id: 8, name: "멀티어댑터", packed: true },
          ],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [],
        },
      ],
    },
    {
      bagId: 4,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: true }],
        },
        {
          categoryId: 2,
          item: [{ id: 2, name: "패딩", packed: false }],
        },
        {
          categoryId: 3,
          item: [
            { id: 3, name: "휴대폰", packed: false },
            { id: 4, name: "이어폰", packed: true },
          ],
        },
        {
          categoryId: 4,
          item: [],
        },
        {
          categoryId: 5,
          item: [{ id: 5, name: "삼각대", packed: true }],
        },
        {
          categoryId: 6,
          item: [{ id: 6, name: "종합감기약", packed: false }],
        },
      ],
    },
    {
      bagId: 5,
      items: [
        {
          categoryId: 1,
          item: [{ id: 1, name: "여권", packed: false }],
        },
        {
          categoryId: 2,
          item: [
            { id: 2, name: "패딩", packed: false },
            { id: 3, name: "반바지", packed: false },
          ],
        },
        {
          categoryId: 3,
          item: [],
        },
        {
          categoryId: 4,
          item: [{ id: 4, name: "이어폰", packed: true }],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [{ id: 5, name: "볼펜", packed: false }],
        },
      ],
    },
    {
      bagId: 6,
      items: [
        {
          categoryId: 1,
          item: [
            { id: 1, name: "여권", packed: true },
            { id: 2, name: "e-티켓", packed: true },
            { id: 3, name: "숙소 바우처", packed: true },
          ],
        },
        {
          categoryId: 2,
          item: [
            { id: 5, name: "패딩", packed: false },
            { id: 6, name: "반바지", packed: false },
          ],
        },
        {
          categoryId: 3,
          item: [],
        },
        {
          categoryId: 4,
          item: [],
        },
        {
          categoryId: 5,
          item: [{ id: 4, name: "종합감기약", packed: true }],
        },
        {
          categoryId: 6,
          item: [],
        },
      ],
    },
    {
      bagId: 7,
      items: [
        {
          categoryId: 1,
          item: [],
        },
        {
          categoryId: 2,
          item: [],
        },
        {
          categoryId: 3,
          item: [
            { id: 1, name: "파운데이션", packed: true },
            { id: 2, name: "아이라이너", packed: true },
            { id: 3, name: "블러셔", packed: true },
            { id: 4, name: "쿠션", packed: true },
          ],
        },
        {
          categoryId: 4,
          item: [],
        },
        {
          categoryId: 5,
          item: [],
        },
        {
          categoryId: 6,
          item: [
            { id: 5, name: "삼각대", packed: true },
            { id: 6, name: "카메라", packed: false },
          ],
        },
      ],
    },
  ],
});

// 6. 추천 아이템 목록
export const recommendItemState = atom({
  key: "recommendItemState",
  default: [
    {
      categoryId: 1,
      item: [
        { id: 1, name: "여권" },
        { id: 2, name: "e-티켓" },
        { id: 3, name: "숙소 바우처" },
      ],
    },
    {
      categoryId: 2,
      item: [
        { id: 1, name: "패딩" },
        { id: 2, name: "반바지" },
      ],
    },
    {
      categoryId: 3,
      item: [
        { id: 1, name: "파운데이션" },
        { id: 2, name: "아이라이너" },
        { id: 3, name: "블러셔" },
        { id: 4, name: "쿠션" },
      ],
    },
    {
      categoryId: 4,
      item: [
        { id: 1, name: "휴대폰" },
        { id: 2, name: "카메라" },
        { id: 3, name: "이어폰" },
        { id: 4, name: "헤어드라이기" },
        { id: 5, name: "고데기" },
        { id: 6, name: "멀티어댑터" },
      ],
    },
    {
      categoryId: 5,
      item: [{ id: 1, name: "종합감기약" }],
    },
    {
      categoryId: 6,
      item: [
        { id: 1, name: "삼각대" },
        { id: 2, name: "카메라" },
        { id: 3, name: "볼펜" },
        { id: 4, name: "향수" },
        { id: 5, name: "안경닦이" },
        { id: 6, name: "우산" },
      ],
    },
  ],
});
