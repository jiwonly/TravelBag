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
    title: "홈",
    url: "/",
    icon: "home",
  },
  {
    title: "챙길 것들",
    url: `/template`,
    icon: "home",
  },
  {
    title: "여행 팁",
    url: "/tip",
    icon: "home",
  },
  {
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
                <SidebarMenuButton asChild>
                  <Link
                    to={
                      item.title === "챙길 것들"
                        ? curId
                          ? `${item.url}/${curId}`
                          : "/new"
                        : item.url
                    }
                  >
                    {/* <item.icon /> */}
                    <span>{item.title}</span>
                  </Link>
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
