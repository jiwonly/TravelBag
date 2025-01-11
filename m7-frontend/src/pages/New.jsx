import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RecommendBar from "@/components/RecommendBar";
import CustomStart from "@/components/CustomStart";
import { templateList } from "@/util/get-template-list";
import { useParams } from "react-router-dom";

const New = ({ children }) => {
  const params = useParams();
  const data = templateList.find(
    (item) => String(item.id) === String(params.id)
  );

  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar isTemplate={true} />
        <main>
          <SidebarTrigger />
          {children}
          <CustomStart
            isTemplate={true}
            icon="bag"
            id={data.id}
            title={data.title}
            data={templateList}
          />
        </main>
      </SidebarProvider>
      <RecommendBar isBasic={true} id={0} icon="inventory" />
    </div>
  );
};

export default New;
