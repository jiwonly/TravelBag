import BagHeader from "./BagHeader";
import { CheckList } from "./CheckList";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { createContext, useState } from "react";
import { getBagDetailsById } from "@/api/Bag/selector";
import { getThisBagItemById } from "@/api/Bag/selector";
import { bagState } from "@/api/Bag/atom";

export const NewItemsStateContext = createContext();
export const NewItemDispatchContext = createContext();
export const AddedItemStateContext = createContext();
export const AddedItemDispatchContext = createContext();

const BagDashboard = ({ icon }) => {
  const params = useParams();
  const thisBag = useRecoilValue(getBagDetailsById(params.id));
  const bags = useRecoilValue(bagState);
  // const thisBagItems = thisBag.temporary? thisBag.items :
  const thisBagItems = useRecoilValue(getThisBagItemById(params.id));
  // console.log(thisBagItemsById);
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);
  const onSetAdded = (value) => {
    setAdded(value);
  };

  return (
    <>
      <NewItemsStateContext.Provider value={newItemsList}>
        <NewItemDispatchContext.Provider value={{ setNewItemsList }}>
          <AddedItemStateContext.Provider value={added}>
            <AddedItemDispatchContext.Provider value={{ onSetAdded }}>
              <div className="mt-[29px]">
                <BagHeader icon={icon} />
                <div className="Custom px-[30px] py-[40px] flex flex-col items-start flex-[1_0_0] self-stretch rounded-b-[16px] border-[1px] bg-[var(--White,_#FFF)] min-h-[685px]">
                  <div className="grid grid-cols-2 gap-[25px] w-full">
                    {thisBagItems.map((item) => (
                      <CheckList
                        key={item.categoryId}
                        bagId={thisBag.id}
                        categoryId={item.categoryId}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AddedItemDispatchContext.Provider>
          </AddedItemStateContext.Provider>
        </NewItemDispatchContext.Provider>
      </NewItemsStateContext.Provider>
    </>
  );
};

export default BagDashboard;
