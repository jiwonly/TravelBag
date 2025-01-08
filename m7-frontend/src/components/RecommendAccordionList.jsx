import RecommendAccordionItem from "./RecommendAccordionItem";

const clothData = [
  {
    title: "상의",
  },
  {
    title: "하의",
  },
];

const cleanData = [
  {
    title: "칫솔",
  },
  {
    title: "클렌징폼",
  },
  {
    title: "로션",
  },
];

const electronicData = [
  {
    title: "충전기",
  },
  {
    title: "에어팟",
  },
];

const otherData = [
  {
    title: "생리대",
  },
  {
    title: "기타1",
  },
  {
    title: "기타2",
  },
];

const RecommendAccordionList = ({ title, data, setListData }) => {
  return (
    <div className="flex flex-col w-full">
      <RecommendAccordionItem
        title="의류 추가"
        data={clothData}
        setListData={setListData}
      />
      <RecommendAccordionItem title="세면도구 추가" data={cleanData} />
      <RecommendAccordionItem title="전자기기 추가" data={electronicData} />
      <RecommendAccordionItem title="기타 추가" data={otherData} />
    </div>
  );
};

export default RecommendAccordionList;
