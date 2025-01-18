import { useContext } from "react";
import Checkbox_Yes from "../../assets/Checkbox_Yes.svg";
import Checkbox_No from "../../assets/Checkbox_No.svg";
import CheckData_minus from "../../assets/CheckData_minus.svg";
import { EditStateContext } from "@/pages/Bag";

export function CheckData({
  itemId,
  categoryId,
  itemName,
  isPacked,
  onUpdateName,
  onToggle,
  onDelete,
}) {
  const isEditing = useContext(EditStateContext);

  const handleDelete = () => {
    onDelete(itemId);
  };

  const handleThisBagITemByCategoryUpdateName = (e) => {
    onUpdateName(itemId, e.target.value);
  };

  console.log(itemId, categoryId, itemName);

  return (
    <div
      className="flex justify-between items-center border bg-white w-[300px] h-[45px] px-3 py-1.5 rounded-lg"
      style={{ height: "45px", minHeight: "45px", maxHeight: "45px" }}
    >
      <div className="flex items-center gap-3">
        <img
          src={isPacked ? Checkbox_Yes : Checkbox_No}
          alt="checkbox"
          className="cursor-pointer"
          onClick={() => onToggle(itemId)}
        />
        {isEditing ? (
          <input
            className="text-gray-800 text-sm outline-none w-[200px]"
            value={itemName}
            onChange={handleThisBagITemByCategoryUpdateName}
          />
        ) : (
          <p className="text-sm text-gray-800">{itemName} </p>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleDelete}
          className="flex justify-center items-center rounded-md bg-white"
        >
          <img src={CheckData_minus} />
        </button>
      ) : null}
    </div>
  );
}
