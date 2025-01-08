import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RecommendBar from "@/components/RecommendBar";
import CustomStart from "@/components/CustomStart";
import { templateList } from "@/util/get-template-list";

const New = ({ children }) => {
  const data = templateList.find((item) => item.id === 0);

  const mockData = [
    { id: 1, title: "필수품", contents: [] },
    { id: 2, title: "의류", contents: [] },
    { id: 3, title: "위생용품", contents: [] },
    {
      id: 4,
      title: "전자기기",
      contents: [],
    },
    { id: 5, title: "의료품", contents: [] },
    { id: 6, title: "기타", contents: [] },
  ];

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
            data={mockData}
          />
        </main>
      </SidebarProvider>
      <RecommendBar icon="inventory" title="추천 준비물" />
    </div>
  );
};

export default New;
