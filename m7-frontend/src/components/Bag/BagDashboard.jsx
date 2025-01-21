import BagHeader from "./BagHeader.jsx";
import { CheckList } from "./CheckList.jsx";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getBagItemsAPI } from "@/api/api.js";
import { useRecoilState, useRecoilValue } from "recoil";
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
  const [bagItems, setBagItems] = useRecoilState(bagItemsState);
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    const fetchBagItems = async () => {
      try {
        const response = await getBagItemsAPI(memberId, bagId); // 서버에서 가방 데이터 가져오기
        const itemsByCategory = response.items.reduce((acc, categoryData) => {
          const { categoryId, item } = categoryData; // JSON 데이터 구조에 맞게 변경
          acc[categoryId] = { item }; // categoryId를 키로, item 배열을 값으로 저장
          return acc;
        }, {});

        setBagItems(itemsByCategory); // 가져온 데이터를 Recoil 상태에 업데이트
      } catch (error) {
        console.error("Error fetching bag items:", error);
      }
    };

    if (bagId && memberId) {
      fetchBagItems(); // bagId와 memberId가 유효할 때만 호출
    }
  }, [bagId, memberId, setBagItems]);

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
                    {Object.keys(bagItems).map((categoryId) => (
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
