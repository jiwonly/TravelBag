import { useNavigate } from "react-router-dom";

const HeaderButton = ({
  isBasic,
  id,
  title,
  temporary,
  style,
  imageSrc,
  onClick,
  isEditing,
}) => {
  const nav = useNavigate();

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
        ) : temporary ? (
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
