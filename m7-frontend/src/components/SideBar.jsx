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
import { Link } from "react-router-dom";
import LoginLogo from "@/assets/LoginLogo.svg";

const items = [
  {
    title: "홈",
    url: "/",
    icon: "home",
  },
  {
    title: "챙길 것들",
    url: "/template",
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
  return (
    <Sidebar>
      <SidebarHeader>
        <img
          src={LoginLogo}
          alt="loginLogo"
          className="w-[130px] h-auto mt-5"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
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
