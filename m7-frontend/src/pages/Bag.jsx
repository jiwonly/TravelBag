import { useParams, useNavigate } from "react-router-dom";
import { SideBar } from "@/components/common/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import BagDashboard from "@/components/Bag/BagDashboard";
import { createContext, useState, useRef } from "react";
import RecommendBar from "@/components/Bag/RecommendBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getBagDetailsById } from "@/api/Bag/selector";
import { bagState } from "@/api/Bag/atom";
import { getThisBagItemById } from "@/api/Bag/selector";
import { bagItemReducerSelector } from "@/api/Bag/selector";

export const SelectedSateData = createContext();
export const SelectedDisplatchData = createContext();
export const thisBagItemByCategoryIdRefContext = createContext();
export const EditStateContext = createContext();
export const EditDispatchContext = createContext();

const Bag = ({ children }) => {
  const nav = useNavigate();
  const params = useParams();

  const bags = useRecoilValue(bagState);
  const thisBag = useRecoilValue(getBagDetailsById(params.id));

  const thisBagItemByCategoryDispatch = useSetRecoilState(
    bagItemReducerSelector
  );
  const thisBagItemByCategoryIdRef = useRef(
    thisBag.length > 0 ? Math.max(...thisBag.map((item) => item.id + 1)) : 1
  );

  const [newBagName, setNewBagName] = useState(thisBag.name);

  const [isEditing, setIsEditing] = useState(false);
  const onSetEditing = (value) => {
    setIsEditing(value);
  };

  const onChangeBagName = (name) => {
    // 다른 template이 선택됐을 때 호출되는 함수
    setNewBagName(name);

    const selectedId = bags.find((bag) => bag.name === name)?.id;
    nav(`/bag/${selectedId}`);
  };

  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <EditStateContext.Provider value={isEditing}>
            <EditDispatchContext.Provider value={{ onSetEditing }}>
              <thisBagItemByCategoryIdRefContext.Provider
                value={thisBagItemByCategoryIdRef}
              >
                <SelectedSateData.Provider value={newBagName}>
                  <SelectedDisplatchData.Provider value={{ onChangeBagName }}>
                    <BagDashboard icon="bag" />
                  </SelectedDisplatchData.Provider>
                </SelectedSateData.Provider>
              </thisBagItemByCategoryIdRefContext.Provider>
            </EditDispatchContext.Provider>
          </EditStateContext.Provider>
        </main>
      </SidebarProvider>
      {/* <RecommendBar className={"flex"} icon="inventory" /> */}
    </div>
  );
};

export default Bag;
