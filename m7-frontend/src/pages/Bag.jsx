import { useParams, useNavigate } from "react-router-dom";
import { SideBar } from "@/components/common/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import BagDashboard from "@/components/Bag/BagDashboard";
import { createContext, useState, useRef } from "react";
import RecommendBar from "@/components/Bag/RecommendBar";
import { useRecoilValue } from "recoil";
import { getBagDetailsById } from "@/api/Bag/selector";
import { bagState } from "@/api/Bag/atom";
import { getThisBagItemById } from "@/api/Bag/selector";
import NotFound from "./NotFound";

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
  const thisBagItemsById = useRecoilValue(getThisBagItemById(thisBag.id));
  const [newBagName, setNewBagName] = useState(thisBag.name);
  const [isEditing, setIsEditing] = useState(false);

  //API 연결 시 사용!!!!!!(20line부터 지우고 쓰면 됨)
  /*
  const nav = useNavigate();
  const params = useParams();
  const [bags, setBags] = useState([]);
  const [thisBag, setThisBag] = useState(null);
  const [thisBagItemsById, setThisBagItemsById] = useState([]);
  const [newBagName, setNewBagName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // 가방 데이터 및 상세 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bagsResponse = await api.get("/members/bags");
        setBags(bagsResponse.data);

        const bagDetailsResponse = await api.get(`/members/bags/${params.id}`);
        setThisBag(bagDetailsResponse.data);
        setNewBagName(bagDetailsResponse.data.name);

        const bagItemsResponse = await api.get(
          `/members/bags/${params.id}/items`
        );
        setThisBagItemsById(bagItemsResponse.data);
      } catch (error) {
        console.error("Error fetching bag data:", error);
      }
    };
    fetchData();
  }, [params.id]);
   */

  // thisBagItemsById가 배열인지 확인
  const maxItemId = Array.isArray(thisBagItemsById)
    ? thisBagItemsById.reduce((maxId, category) => {
        // category.item이 배열인지 확인
        const maxInCategory = Array.isArray(category.item)
          ? category.item.reduce((categoryMaxId, item) => {
              return Math.max(categoryMaxId, item.id || 0);
            }, 0)
          : 0;
        return Math.max(maxId, maxInCategory);
      }, 0)
    : 0;

  // Ref 초기화
  const thisBagItemByCategoryIdRef = useRef(maxItemId + 1);

  const onSetEditing = (value) => {
    setIsEditing(value);
  };

  const onChangeBagName = (name) => {
    // 다른 template이 선택됐을 때 호출되는 함수
    setNewBagName(name);

    const selectedId = bags.find((bag) => bag.name === name)?.id;
    nav(`/bag/${selectedId}`);
  };

  // API 연결 시 위 onChangeBagName 지우고 사용!!!!
  /*
  const onChangeBagName = async (name) => {
    setNewBagName(name);

    try {
      const selectedBag = bags.find((bag) => bag.name === name);
      if (selectedBag) {
        await api.patch(`/members/bags/${selectedBag.id}/name`, { name });
        nav(`/bag/${selectedBag.id}`);
      }
    } catch (error) {
      console.error("Error updating bag name:", error);
    }
  };
  */

  // 가방 ID 검증
  const bagExists = bags.some((bag) => String(bag.id) === params.id);

  // 존재하지 않는 가방으로 접근 시 NotFound 페이지로 리다이렉트
  if (!bagExists) {
    return <NotFound />;
  }

  return (
    <div className="flex">
      <EditStateContext.Provider value={isEditing}>
        <EditDispatchContext.Provider value={{ onSetEditing }}>
          <thisBagItemByCategoryIdRefContext.Provider
            value={thisBagItemByCategoryIdRef}
          >
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
          </thisBagItemByCategoryIdRefContext.Provider>
        </EditDispatchContext.Provider>
      </EditStateContext.Provider>
    </div>
  );
};

export default Bag;
