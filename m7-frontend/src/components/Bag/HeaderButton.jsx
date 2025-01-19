const HeaderButton = ({
  bagTemporary,
  style,
  imageSrc,
  onClick,
  isEditing,
}) => {
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="button icon"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        ) : bagTemporary ? (
          "추가"
        ) : isEditing ? (
          "완료"
        ) : (
          "수정"
        )}
      </button>
    </div>
  );
};

export default HeaderButton;
