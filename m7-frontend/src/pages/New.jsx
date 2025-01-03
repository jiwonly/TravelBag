import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RecommendBar from "@/components/RecommendBar";
import CustomStart from "@/components/CustomStart";
import { templateList } from "@/util/get-template-list";
import { useContext, useEffect } from "react";
import { pageDispatchContext } from "@/App";

const New = ({ children }) => {
  const data = templateList.find((item) => item.id === 0);
  const { onSetPage } = useContext(pageDispatchContext);
  useEffect(() => {
    onSetPage("1");
  }, [onSetPage]);
  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <CustomStart
            isTemplate={true}
            icon="bag"
            id={data.id}
            title={data.title}
          />
        </main>
      </SidebarProvider>
      <RecommendBar icon="inventory" title="추천 준비물" />
    </div>
  );
};

export default New;
