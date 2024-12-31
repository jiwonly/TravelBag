import RecommendPlusItem from "./RecommendPlusItem";

const RecommendPlusList = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <RecommendPlusItem key={item.id} title={item.title} />
      ))}
    </div>
  );
};  

export default RecommendPlusList;