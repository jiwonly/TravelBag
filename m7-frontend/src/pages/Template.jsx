import { useParams, useNavigate } from "react-router-dom";
import { InputWithLabel } from "@/components/InputWithLabel";
import { SideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomTemplate from "@/components/CustomTemplate";
import { useState, useContext } from "react";
import { TemplateStateContext } from "@/App";
import { createContext } from "react";

export const SelectedSateData = createContext();
export const SelectedDisplatchData = createContext();

const Template = ({ children }) => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(TemplateStateContext);
  const template = data.find((item) => String(item.id) === String(params.id));
  const [input, setInput] = useState(template ? template.title : ""); // input state : 선택된 template의 제목 보관

  const onChange = (title) => {
    // 다른 template이 선택됐을 때 호출되는 함수
    setInput(title);

    const selectedId = data.find((item) => item.title === title).id;
    nav(`/template/${selectedId}`);
  };

  return (
    <div>
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <SelectedSateData.Provider value={input}>
            <SelectedDisplatchData.Provider value={{ onChange }}>
              <CustomTemplate isTemplate={true} icon="bag" title={input} />
            </SelectedDisplatchData.Provider>
          </SelectedSateData.Provider>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Template;
