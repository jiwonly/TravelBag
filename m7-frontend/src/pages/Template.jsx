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
import { supplies } from "@/util/get-supplies-list";

export const SelectedSateData = createContext();
export const SelectedDisplatchData = createContext();

const Template = ({ children }) => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(TemplateStateContext);
  const template = data.find((item) => String(item.id) === String(params.id));
  const [input, setInput] = useState(template ? template.title : ""); // input state : 선택된 template의 제목 보관
  const [listData, setListData] = useState(supplies.contents);

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
