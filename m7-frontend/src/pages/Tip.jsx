import { SideBar } from "@/components/common/SideBar";
import Tipboard from "@/components/Tip/Tipboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Tip = ({ children }) => {
  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <Tipboard />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Tip;
