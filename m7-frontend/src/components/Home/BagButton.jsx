import { useNavigate } from "react-router-dom";

const BagButton = ({ id, name, style }) => {
  const nav = useNavigate();

  const onClick = () => {
    nav(`/bag/${id}`);
  };
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {name}
      </button>
    </div>
  );
};

export default BagButton;
