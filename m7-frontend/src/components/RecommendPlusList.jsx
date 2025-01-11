import RecommendPlusItem from "./RecommendPlusItem";

const RecommendPlusList = ({
  isBasic,
  templateId,
  listId,
  data,
  setListData,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <RecommendPlusItem
          key={item.id}
          isBasic={isBasic}
          templateId={templateId}
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
