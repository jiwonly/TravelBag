import { useParams, useNavigate } from "react-router-dom";
import { InputWithLabel } from "@/components/InputWithLabel";
import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomTemplate from "@/components/CustomTemplate";
import { useState, useContext, useEffect } from "react";
import { TemplateStateContext } from "@/App";
import { createContext } from "react";
import RecommendBar from "@/components/RecommendBar";
import { templateList } from "@/util/get-template-list";
import { EditStateData } from "@/App";
import { EditDispatchData } from "@/App";

export const SelectedSateData = createContext();
export const SelectedDisplatchData = createContext();

const mockData = [
  { id: 1, title: "필수품", contents: [{ id: 1, content: "여권" }] },
  { id: 2, title: "의류", contents: [{ id: 1, content: "패딩" }] },
  { id: 3, title: "위생용품", contents: [] },
  {
    id: 4,
    title: "전자기기",
    contents: [{ id: 1, content: "휴대폰 충전기" }],
  },
  { id: 5, title: "의료품", contents: [] },
  { id: 6, title: "기타", contents: [] },
];

const Template = ({ children }) => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(TemplateStateContext);
  const template = data.find((item) => String(item.id) === String(params.id));
  const [input, setInput] = useState(template ? template.title : ""); // input state : 선택된 template의 제목 보관
  const [listData, setListData] = useState(mockData.contents);

  const onChange = (title) => {
    // 다른 template이 선택됐을 때 호출되는 함수
    setInput(title);

    const selectedId = data.find((item) => item.title === title).id;
    nav(`/template/${selectedId}`);
  };

  let basicTitle;

  if (params.id < 4) {
    basicTitle = templateList.find(
      (item) => String(item.id) === String(params.id)
    ).title;
  }

  return (
    <div className="flex">
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}

          <SelectedSateData.Provider value={input}>
            <SelectedDisplatchData.Provider value={{ onChange }}>
              <CustomTemplate
                isTemplate={true}
                icon="bag"
                id={template.id}
                title={params.id < 4 ? basicTitle : input}
                data={data}
              />
            </SelectedDisplatchData.Provider>
          </SelectedSateData.Provider>
        </main>
      </SidebarProvider>
      <RecommendBar
        icon="inventory"
        title="추천 준비물"
        setListData={setListData}
      />
    </div>
  );
};

export default Template;
