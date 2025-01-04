import { useNavigate } from "react-router-dom";

const HeaderButton = ({ id, title, style, imageSrc, onClick, isEditing }) => {
  let onUpdated = false;
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
        ) : isEditing ? (
          id < 4 ? (
            "추가"
          ) : (
            "완료"
          )
        ) : (
          "수정"
        )}
      </button>
    </div>
  );
};

export default HeaderButton;
