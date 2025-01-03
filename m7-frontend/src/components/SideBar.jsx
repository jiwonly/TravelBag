import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "@/assets/LoginLogo.svg";
import { useContext } from "react";
import { TemplateStateContext } from "@/App";
const items = [
  {
    id: 0,
    title: "홈",
    url: "/",
    icon: "home",
  },
  {
    id: 1,
    title: "챙길 것들",
    url: `/template`,
    icon: "home",
  },
  {
    id: 2,
    title: "여행 팁",
    url: "/tip",
    icon: "home",
  },
  {
    id: 3,
    title: "로그아웃",
    url: "/",
    icon: "home",
  },
];

export function SideBar() {
  const data = useContext(TemplateStateContext);
  const curId =
    data.length > 0 ? Math.max(...data.map((item) => item.id)) : null;
  const nav = useNavigate();

  const onLogoutClick = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      nav("/login");
    }
  };

  const getLink = (id) => {
    let url;
    switch (id) {
      case 0:
        url = "/";
        break;
      case 1:
        url = `template/${curId}`;
        break;
      case 2:
        url = "/tip";
        break;
      case 3:
        url = null;
        break;
      default:
        return "/";
    }
    return url;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <img
          src={LoginLogo}
          alt="loginLogo"
          className="w-[130px] h-auto mt-5 cursor-pointer"
          onClick={() => {
            nav("/");
          }}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  onClick={item.id === 3 ? onLogoutClick : undefined}
                  asChild={item.id !== 3}
                >
                  {item.id === 3 ? (
                    <button className="w-full text-left">{item.title}</button> // 로그아웃 버튼
                  ) : (
                    <Link to={getLink(item.id)}>
                      <span>{item.title}</span>
                    </Link>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
