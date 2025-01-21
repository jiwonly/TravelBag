import { SideBar } from "@/components/common/SideBar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx";
import Dashboard from "@/components/Home/Dashboard.jsx";

const Home = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <SideBar />
        <main>
          <SidebarTrigger />
          {children}
          <Dashboard />
        </main>
      </SidebarProvider>
    </>
  );
};

export default Home;
