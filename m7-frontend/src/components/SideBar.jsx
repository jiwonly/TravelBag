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
import Logo from "@/assets/LoginLogo.svg";
import { useContext } from "react";
import { TemplateStateContext } from "@/App";
import { sidebarImage } from "@/util/get-sidebar-image";
const items = [
  {
    id: 0,
    title: "홈",
    url: "/",
    icon: sidebarImage(0),
  },
  {
    id: 1,
    title: "챙길 것들",
    url: `/template`,
    icon: sidebarImage(1),
  },
  {
    id: 2,
    title: "여행 팁",
    url: "/tip",
    icon: sidebarImage(2),
  },
  {
    id: 3,
    title: "로그아웃",
    url: "/",
    icon: sidebarImage(3),
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
          src={Logo}
          alt="Logo"
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
                  icon={item.icon}
                >
                  {item.id === 3 ? (
                    <button className="w-full text-left">{item.title}</button> // 로그아웃 버튼
                  ) : (
                    <Link to={getLink(item.id)}>
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt="icon"
                          className="h-4 w-4 mr-2"
                        />
                      )}
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
