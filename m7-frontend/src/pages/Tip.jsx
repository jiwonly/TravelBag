import { SideBar } from "@/components/common/SideBar.jsx";
import Tipboard from "@/components/Tip/Tipboard.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx";

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
