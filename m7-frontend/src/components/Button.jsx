import { useNavigate } from "react-router-dom";

const Button = ({ isBasic, id, title, style }) => {
  const nav = useNavigate();

  const onClick = () => (isBasic ? nav(`/new/${id}`) : nav(`/template/${id}`));
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {isBasic ? "+" : title}
      </button>
    </div>
  );
};

export default Button;
