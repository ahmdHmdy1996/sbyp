import { useSelector } from "react-redux";
import MarketingCampaigns from "../components/MarketingCampaigns";
import SalesByCountries from "../components/SalesByCountries";
import SourceVisits from "../components/SourceVisits";
import SupportMonitor from "../components/SupportMonitor";
import TopSelling from "../components/TopSelling";
import TotalEar from "../components/TotalEar";
import TotalSalesMon from "../components/TotalSalesMon";
import WeeklyProfit from "../components/WeeklyProfit";
import WelcomeMsg from "../components/WelcomeMsg";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";



const Dashboard = () => {
 
 
  
  return (
    <div className="bg-home row-span-2 grid grid-cols-6 gap-5 place-items-center lg:place-items-stretch mt-5 w-full overflow-hidden">
      
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

export default Dashboard;
