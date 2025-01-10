import RecommendPlusItem from "./RecommendPlusItem";

const RecommendPlusList = ({ listId, data, setListData }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <RecommendPlusItem
          key={item.id}
          listId={listId}
          id={item.id}
          content={item.content}
          setListData={setListData}
        />
      ))}
    </div>
  );
};

export default RecommendPlusList;
