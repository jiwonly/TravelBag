import { useParams } from "react-router-dom";
import { InputWithLabel } from "@/components/InputWithLabel";
import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomStart from "@/components/CustomStart";

const Template = ({ children }) => {
  const params = useParams();
  return (
    <div>
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <CustomStart isTemplate={true} icon="bag" title="여자 혼자 여행" />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Template;
