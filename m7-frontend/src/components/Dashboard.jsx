import BagList from "./BagList";
import Header from "./Header";
import TemplateList from "./TemplateList";
import TravelBag from "./TravelBag";

const Dashboard = ({ icon, title, memo }) => {
  return (
    <div className="Main flex px-[50px] flex-col items-start flex-[1_0_0] self-stretch rounded-[16px] border-[1px] bg-[var(--White,_#FFF)]">
      <Header icon={icon} title={title} memo={memo} />
      <BagList />
      <TemplateList />
    </div>
  );
};

export default Dashboard;
