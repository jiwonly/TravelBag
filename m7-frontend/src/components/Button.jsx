import { useNavigate } from "react-router-dom";
import { TemplateDispatchContext } from "@/App";
import { useContext } from "react";
import { templateList } from "@/util/get-template-list";
import { IdRefContext } from "@/App";

const Button = ({ isBasic, id, title, style }) => {
  const idRef = useContext(IdRefContext);
  const { onCreate } = useContext(TemplateDispatchContext);
  const nav = useNavigate();

  const onClick = () => {
    if (isBasic) {
      const template = templateList.find(
        (item) => String(item.id) === String(id)
      );
      onCreate(template.title, template.supplies);
      const newId = idRef.current - 1;
      nav(`/template/${newId}`);
    } else {
      nav(`/template/${id}`);
    }
  };
  return (
    <div>
      <button onClick={onClick} className={`Button ${style}`}>
        {isBasic ? "+" : title}
      </button>
    </div>
  );
};

export default Button;
