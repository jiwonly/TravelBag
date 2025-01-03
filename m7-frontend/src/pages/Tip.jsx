import { SideBar } from "@/components/SideBar";
import Tipboard from "@/components/Tipboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Tip = ({ children }) => {
  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <Tipboard
            icon="travel"
            title="여행 팁"
            memo="원하는 여행지를 선택하세요."
          />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Tip;
