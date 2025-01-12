import { atom } from "recoil";

// Define Recoil atoms
export const bagState = atom({
  key: "templateState",
  default: [
    [
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
  ],
});

export const recommendItemState = atom({
  key: "recommendItemState",
  default: [],
});

export const itemState = atom({
  key: "itemState",
  default: [
    {
      bagId: 1,
      item: [
        {
          id: 1,
          name: "여권",
          category: "ESSENTIAL",
          packed: true,
        },
        {
          id: 2,
          name: "패딩",
          category: "CLOTHING",
          packed: false,
        },
        {
          id: 3,
          name: "카메라",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 4,
          name: "휴대폰",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 5,
          name: "종합감기약",
          category: "OTHER",
          packed: false,
        },
      ],
    },
    {
      bagId: 2,
      item: [],
    },
    {
      bagId: 3,
      item: [
        {
          id: 1,
          name: "반바지",
          category: "ClOTHING",
          packed: true,
        },
        {
          id: 2,
          name: "파운데이션",
          category: "TOILETRIES",
          packed: false,
        },
        {
          id: 3,
          name: "아이라이너",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 4,
          name: "쿠션",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 5,
          name: "이어폰",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 6,
          name: "헤어드라이기",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 7,
          name: "고데기",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 8,
          name: "멀티어댑터",
          category: "ELECTRONICS",
          packed: true,
        },
      ],
    },
    {
      bagId: 4,
      item: [
        {
          id: 1,
          name: "여권",
          category: "ESSENTIAL",
          packed: true,
        },
        {
          id: 2,
          name: "패딩",
          category: "CLOTHING",
          packed: false,
        },
        {
          id: 3,
          name: "휴대폰",
          category: "ELECTRONICS",
          packed: false,
        },
        {
          id: 4,
          name: "이어폰",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 5,
          name: "삼각대",
          category: "OTHER",
          packed: true,
        },
        {
          id: 6,
          name: "종합감기약",
          category: "MEDICAL",
          packed: false,
        },
      ],
    },
    {
      bagId: 5,
      item: [
        {
          id: 1,
          name: "여권",
          category: "ESSENTIAL",
          packed: false,
        },
        {
          id: 2,
          name: "패딩",
          category: "CLOTHING",
          packed: false,
        },
        {
          id: 3,
          name: "반바지",
          category: "CLOTHING",
          packed: false,
        },
        {
          id: 4,
          name: "이어폰",
          category: "ELECTRONICS",
          packed: true,
        },
        {
          id: 5,
          name: "볼펜",
          category: "OTHER",
          packed: false,
        },
      ],
    },
    {
      bagId: 6,
      item: [
        {
          id: 1,
          name: "여권",
          category: "ESSENTIAL",
          packed: true,
        },
        {
          id: 2,
          name: "e-티켓",
          category: "ESSENTIAL",
          packed: true,
        },
        {
          id: 3,
          name: "숙소 바우처",
          category: "ESSENTIAL",
          packed: true,
        },
        {
          id: 4,
          name: "종합감기약",
          category: "MEDICAL",
          packed: true,
        },
        {
          id: 5,
          name: "패딩",
          category: "CLOTHING",
          packed: false,
        },
        {
          id: 6,
          name: "반바지",
          category: "CLOTHING",
          packed: false,
        },
      ],
    },
    {
      bagId: 7,
      item: [
        {
          id: 1,
          name: "파운데이션",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 2,
          name: "아이라이너",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 3,
          name: "블러셔",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 4,
          name: "쿠션",
          category: "TOILETRIES",
          packed: true,
        },
        {
          id: 5,
          name: "삼각대",
          category: "OTHER",
          packed: true,
        },
        {
          id: 6,
          name: "카메라",
          category: "OTHER",
          packed: false,
        },
      ],
    },
  ],
});
