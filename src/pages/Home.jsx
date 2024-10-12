import MarketingCampaigns from "../components/MarketingCampaigns";
import SalesByCountries from "../components/SalesByCountries";
import SourceVisits from "../components/SourceVisits";
import SupportMonitor from "../components/SupportMonitor";
import TopSelling from "../components/TopSelling";
import TotalEar from "../components/TotalEar";
import TotalSalesMon from "../components/TotalSalesMon";
import WeeklyProfit from "../components/WeeklyProfit";
import WelcomeMsg from "../components/WelcomeMsg";

const Home = () => {
  return (
    <div className="bg-home row-span-2 grid grid-cols-6 gap-5 mt-5 ">
      <WelcomeMsg />
      <TotalSalesMon />
      <WeeklyProfit />
      <SupportMonitor />
      <MarketingCampaigns />
      <TotalEar />
      <SalesByCountries/>
      <SourceVisits/>
      <TopSelling/>
    </div>
  );
};

export default Home;
