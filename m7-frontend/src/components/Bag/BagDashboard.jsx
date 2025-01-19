import BagHeader from "./BagHeader.jsx";
import { CheckList } from "./CheckList.jsx";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getBagItemsAPI } from "@/api/api.js";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "@/api/auth.js";
import { bagItemsState } from "@/api/atom.js";

export const NewItemsStateContext = createContext();
export const NewItemDispatchContext = createContext();
export const AddedItemStateContext = createContext();
export const AddedItemDispatchContext = createContext();

const BagDashboard = ({ icon }) => {
  const params = useParams();
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
  const bagId = params.id;
  const [thisBagItems, setThisBagItems] = useRecoilState(bagItemsState);
  const setBagItems = useSetRecoilState(bagItemsState);
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    const fetchBagItems = async () => {
      try {
        const response = await getBagItemsAPI(memberId, bagId); // API 호출
        const itemsByCategory = response.items.reduce((acc, item) => {
          const { categoryId, ...itemData } = item;
          acc[categoryId] = acc[categoryId] || [];
          acc[categoryId].push(itemData);
          return acc;
        }, {});

        setBagItems(itemsByCategory); // Recoil 상태 업데이트
      } catch (error) {
        console.error("Error fetching bag items:", error);
      }
    };

    fetchBagItems();
  }, [bagId, setBagItems]);

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
                    {Object.keys(thisBagItems).map((categoryId) => (
                      <CheckList
                        key={categoryId}
                        bagId={bagId}
                        categoryId={categoryId}
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
