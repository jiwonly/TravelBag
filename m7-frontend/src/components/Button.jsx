import { useNavigate } from "react-router-dom";

const Button = ({ id, title, style }) => {
  const nav = useNavigate();
  const onClick = () => (id === 0 ? nav("/new") : nav(`/template/${id}`));
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {id < 4 ? "+" : title}
      </button>
    </div>
  );
};

export default Button;
