import RecommendPlusItem from "./RecommendPlusItem";

const RecommendPlusList = ({ data, setListData }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <RecommendPlusItem key={item.id} title={item.title} setListData={setListData} />
      ))}
    </div>
  );
};

export default RecommendPlusList;
