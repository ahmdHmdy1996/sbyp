import React from "react";
import DotVetrical from "/Icons/dots-vertical.svg";
import Mail from "/Icons/mail-1.svg";
import Link from "/Icons/link.svg";
import Mouse from "/Icons/mouse.svg";
import Users from "/Icons/users.svg";
import Alert from "/Icons/AlertReportProblem.svg";
import Ban from "/Icons/ban.svg";

const Array = [
  {
    icon: <img src={Mail} />,
    name: "رسائل البريد الإلكتروني ",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-green-100",
  },
  {
    icon: <img src={Link} />,
    name: "زيارات الموقع",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-blue-100",
  },
  {
    icon: <img src={Mouse} />,
    name: "نقرات الموقع",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-red-100",
  },
  {
    icon: <img src={Users} />,
    name: "اشتراكات",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-purple-100",
  },
  {
    icon: <img src={Alert} />,
    name: "الشكاوي",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-gray-200",
  },
  {
    icon: <img src={Ban} />,
    name: " الغاء الاشتراك",
    num: "12,346",
    num2: "0.3%",
    BgColor: "bg-red-100",
  },
];

const MarketingCampaigns = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 col-span-6 lg:col-span-2 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 text-lg font-bold">
          حملات التسويق الشهرية
        </h2>
        <img src={DotVetrical} alt="" />
      </div>
      <p className="text-gray-400 text-sm mb-4">8.52 ألف زائر</p>

      <div className="space-y-4 grid grid-cols-2 lg:grid-cols-1">
        {Array.map((item) => (
          <div
            key={item.name}
            className="grid grid-cols-6 gap-2 items-center justify-items-start"
          >
            <div className={`${item.BgColor} p-2 rounded-md ml-3 `}>
              {item.icon}
            </div>
            <span className="text-sm col-span-3">{item.name}</span>
            <span className="text-sm">{item.num}</span>
            <span className="text-green-500 text-sm">{item.num2}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingCampaigns;
