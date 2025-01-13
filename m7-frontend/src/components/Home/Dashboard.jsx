import BagList from "./BagList";
import CommonHeader from "../common/CommonHeader";
import TemplateList from "./TemplateList";

const Dashboard = () => {
  return (
    <div className="mt-[29px]">
      <CommonHeader icon="home" title="홈" memo="어서오세요!" />
      <div className="Main flex px-[30px] mb-[20px] flex-col items-start flex-[1_0_0] self-stretch rounded-b-[16px] border-[1px] bg-[var(--White,_#FFF)]">
        <BagList />
        <TemplateList />
      </div>
    </div>
  );
};

export default Dashboard;
