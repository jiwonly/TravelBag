import { useParams, useNavigate } from "react-router-dom";
import { SideBar } from "@/components/common/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import BagDashboard from "@/components/Bag/BagDashboard";
import { createContext, useState } from "react";
import RecommendBar from "@/components/Bag/RecommendBar";
import { useRecoilState } from "recoil";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { bagsState } from "@/api/atom";
import { getBagDetailsAPI, getBagsAPI } from "@/api/api";

export const SelectedSateData = createContext();
export const SelectedDisplatchData = createContext();
export const EditStateContext = createContext();
export const EditDispatchContext = createContext();

const Bag = ({ children }) => {
  const nav = useNavigate();
  const memberId = 1;
  const params = useParams();
  const bagId = params.id;
  const [bags, setBags] = useRecoilState(bagsState);
  const [thisBag, setThisBag] = useState([]);
  const [newBagName, setNewBagName] = useState(thisBag.name);
  const [isEditing, setIsEditing] = useState(false);

  // 가방 데이터 가져오기
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await getBagsAPI(memberId); // API 호출
        if (Array.isArray(response)) {
          setBags(response); // bags 상태 업데이트
        } else {
          console.error("Invalid bags response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bags:", error);
      }
    };

    fetchBags();
  }, [memberId, setBags]); // memberId가 변경될 때만 실행

  // 현재 가방 데이터 가져오기
  useEffect(() => {
    const fetchThisBag = async () => {
      try {
        const response = await getBagDetailsAPI(memberId, bagId); // API 호출
        if (response) {
          setThisBag(response); // thisBag 상태 업데이트
        } else {
          console.error("Invalid bagDetails response format:", response);
        }
      } catch (error) {
        console.error("Error fetching bag details:", error);
      }
    };

    if (bagId) {
      fetchThisBag(); // bagId가 존재할 때만 호출
    }
  }, [memberId, bagId]); // memberId와 bagId 변경 시 호출

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
      <EditStateContext.Provider value={isEditing}>
        <EditDispatchContext.Provider value={{ onSetEditing }}>
          <SidebarProvider>
            <SideBar />
            <main>
              <SidebarTrigger />
              {children}

              <SelectedSateData.Provider value={newBagName}>
                <SelectedDisplatchData.Provider value={{ onChangeBagName }}>
                  <BagDashboard icon="bag" />
                </SelectedDisplatchData.Provider>
              </SelectedSateData.Provider>
            </main>
          </SidebarProvider>
          <RecommendBar className={"flex"} icon="inventory" />
        </EditDispatchContext.Provider>
      </EditStateContext.Provider>
    </div>
  );
};

export default Bag;
