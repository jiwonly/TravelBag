import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomStart from "@/components/CustomStart";

const New = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <CustomStart icon="bag" title="내 마음대로 시작하기" />
        </main>
      </SidebarProvider>
    </>
  );
};

export default New;
