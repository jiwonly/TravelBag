import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/assets/LoginLogo.svg";
import { useContext, useEffect, useState } from "react";
import bag from "../../assets/sidebar/bag.svg";
import onbag from "../../assets/sidebar/onbag.svg";
import home from "../../assets/sidebar/home.svg";
import onhome from "../../assets/sidebar/onhome.svg";
import travel from "../../assets/sidebar/travel.svg";
import ontravel from "../../assets/sidebar/ontravel.svg";
import logout from "../../assets/sidebar/logout.svg";
import { EditStateContext } from "@/pages/Bag.jsx";
import { useParams } from "react-router-dom";
import { authState } from "@/api/auth.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { BagIdRefContext } from "@/App.jsx";
import { createBagAPI, getBagDetailsAPI, getBagsAPI } from "@/api/api.js";
import { bagsState, realBagsState } from "@/api/atom.js";
import { postLogoutAPI } from "@/api/auth.js";

function sidebarImage(id, isActive = false) {
  if (isActive) {
    switch (id) {
      case 0:
        return onhome;
      case 1:
        return onbag;
      case 2:
        return ontravel;
      case 3:
        return logout;
      default:
        return home;
    }
  } else
    switch (id) {
      case 0:
        return home;
      case 1:
        return bag;
      case 2:
        return travel;
      case 3:
        return logout;
      default:
        return home;
    }
}

const items = [
  {
    id: 0,
    title: "홈",
    icon: sidebarImage(0),
  },
  {
    id: 1,
    title: "챙길 것들",
    icon: sidebarImage(1),
  },
  {
    id: 2,
    title: "여행 팁",
    icon: sidebarImage(2),
  },
  {
    id: 3,
    title: "로그아웃",
    icon: sidebarImage(3),
  },
];

export function SideBar() {
  const nav = useNavigate();
  const location = useLocation();
  const isBag = location.pathname.includes("bag");

  const params = useParams();
  const [auth, setAuth] = useRecoilState(authState);
  const memberId = auth.kakaoId;
  const bagId = isBag ? params.id : null;
  const isEditing = useContext(EditStateContext);
  const [bags, setBags] = useRecoilState(bagsState);
  const [thisBag, setThisBag] = useState([]);
  const [realBags, setRealBags] = useRecoilState(realBagsState);

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

  useEffect(() => {
    const filteredBags = bags.filter((bag) => !bag.temporary); // temporary가 false인 가방만 필터링
    setRealBags(filteredBags); // realBags 상태 업데이트
  }, [bags, setRealBags]);
  const curId =
    realBags.length > 0 ? Math.max(...realBags.map((bag) => bag.id)) : 0;

  const onLogoutClick = async () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      try {
        setAuth({
          isAuthenticated: false,
          kakaoId: null,
          email: null,
          nickname: null,
        });
        localStorage.clear();
        sessionStorage.clear();

        alert("로그아웃 성공!");
        nav("/login");
      } catch (error) {
        alert("로그아웃 실패! 다시 시도해주세요.");
        console.error("Logout error", error);
      }
    }
  };

  const bagIdRef = useContext(BagIdRefContext);

  const handleBagCreate = async () => {
    try {
      const response = await createBagAPI(memberId, 1, "내 마음대로 시작하기");
      bagIdRef.current++;
      nav(`/bag/${response.id}`);
    } catch (error) {
      console.error("Error creating bag:", error);
    }
  };

  const getLink = (id) => {
    switch (id) {
      case 0:
        return "/";
      case 1:
        return realBags.length > 0
          ? `/bag/${curId}`
          : `/bag/${bagIdRef.current - 1}`;
      case 2:
        return "/tip";
      case 3:
        return null;
      default:
        return "/";
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <img
          src={Logo}
          alt="Logo"
          className="w-[130px] h-auto mt-5 cursor-pointer"
          onClick={() => {
            isEditing && !thisBag.temporary
              ? alert("물품 수정을 완료해주세요!")
              : nav("/");
          }}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu className="sidebarMenu gap-[15px]">
            {items.map((item) => {
              const isActive =
                item.id != 1 ? location.pathname === getLink(item.id) : isBag;
              return (
                <SidebarMenuItem key={item.title}>
                  {item.id === 3 ? (
                    <div
                      onClick={onLogoutClick}
                      className="logout flex mt-[10px] ml-[10px] items-center gap-[10px] cursor-pointer"
                    >
                      <img
                        src={sidebarImage(item.id)}
                        alt="icon"
                        className="h-4 w-4 mr-2"
                      />
                      <span className="w-full text-left">{item.title}</span>
                    </div>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      icon={item.icon}
                      className={
                        isActive
                          ? "button bg-white w-[200px] h-[45px] rounded-[10px] border-[1px] border-[#E5E7EB] hover:bg-white"
                          : "button w-[200px] h-[45px] rounded-[10px]"
                      }
                    >
                      <Link
                        to={getLink(item.id)}
                        onClick={(e) => {
                          if (item.id === 1 && realBags.length === 0) {
                            e.preventDefault(); // 기본 동작 방지
                            handleBagCreate("FREESTYLE"); // 새 가방 생성 후 이동
                            return;
                          }
                          if ((isEditing || isActive) && !thisBag.temporary) {
                            e.preventDefault(); // 이동 차단
                            if (isEditing && !thisBag.temporary) {
                              alert("물품 수정을 완료해주세요!");
                            }
                          }
                        }}
                      >
                        {item.icon && (
                          <img
                            src={sidebarImage(item.id, isActive)}
                            alt="icon"
                            className="h-4 w-4 mr-2"
                          />
                        )}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
