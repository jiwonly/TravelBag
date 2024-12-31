import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RecommendBar from "@/components/RecommendBar";
import CustomStart from "@/components/CustomStart";

const New = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <CustomStart
            isTemplate={false}
            icon="bag"
            title="내 마음대로 시작하기"
          />
        </main>
      </SidebarProvider>
      <RecommendBar icon="inventory" title="추천 준비물" />
    </>
  );
};

export default New;
