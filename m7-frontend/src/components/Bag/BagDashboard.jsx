import BagHeader from "./BagHeader.jsx";
import { CheckList } from "./CheckList.jsx";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getBagItemsAPI } from "@/api/api.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@/api/auth.js";

export const NewItemsStateContext = createContext();
export const NewItemDispatchContext = createContext();
export const AddedItemStateContext = createContext();
export const AddedItemDispatchContext = createContext();

const BagDashboard = ({ icon }) => {
  const params = useParams();
  const auth = useRecoilValue(authState); // Recoil 상태 읽기만 사용
  const memberId = auth.kakaoId;
  const bagId = params.id;
  const [thisBagItems, setThisBagItems] = useState([]);
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    const fetchBagData = async () => {
      try {
        const bagDataResponse = await getBagItemsAPI(memberId, bagId);
        const bagItemsResponse = bagDataResponse.items;
        setThisBagItems(bagItemsResponse);
      } catch (error) {
        console.error("Error fetching bagItems:", error);
      }
    };

    fetchBagData(); // 함수 호출
  }, [bagId]); // 의존성에 bagId 포함

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
                        bagId={bagId}
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
