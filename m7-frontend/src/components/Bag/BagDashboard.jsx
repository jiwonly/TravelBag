import BagHeader from "./BagHeader";
import { CheckList } from "./CheckList";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { createContext, useState } from "react";
import { getThisBagItemById, getBagDetailsById } from "@/api/Bag/selector";

export const NewItemsStateContext = createContext();
export const NewItemDispatchContext = createContext();
export const AddedItemStateContext = createContext();
export const AddedItemDispatchContext = createContext();

const BagDashboard = ({ icon }) => {
  const params = useParams();
  const thisBag = useRecoilValue(getBagDetailsById(params.id));
  const thisBagItems = useRecoilValue(getThisBagItemById(params.id));
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);
  const onSetAdded = (value) => {
    setAdded(value);
  };

  //API 연결시 사용!!!(14부터 지우고 사용)
  /**
   *   const params = useParams();
  const [thisBag, setThisBag] = useState(null);
  const [thisBagItems, setThisBagItems] = useState([]);
  const [newItemsList, setNewItemsList] = useState([]);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    const fetchBagData = async () => {
      try {
        const bagResponse = await api.get(`/members/bags/${params.id}`);
        setThisBag(bagResponse.data);

        const bagItemsResponse = await api.get(
          `/members/bags/${params.id}/items`
        );
        setThisBagItems(bagItemsResponse.data);
      } catch (error) {
        console.error("Error fetching bag data:", error);
      }
    };

    fetchBagData();
  }, [params.id]);

  const onSetAdded = (value) => {
    setAdded(value);
  };

  if (!thisBag) {
    return <div>Loading...</div>; // 데이터 로드 전 로딩 표시
  }
   */

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
