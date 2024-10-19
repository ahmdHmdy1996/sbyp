import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useTranslation } from "react-i18next";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import shadow from "/src/assets/Icons/shadow.svg";
import globe from "/src/assets/Icons/globe.svg";
import mail from "/src/assets/Icons/mail.svg";
import star from "/src/assets/Icons/star.svg";


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: ["4.25", "2.47", "6.25", "3.25", "5.58", "4.24"],
      backgroundColor: "transparent",
      borderColor: "#000",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
    },
  },
};






const SourceVisits = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("language");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  
  const Array = [
    {
      name: t("DirectSource"),
      subName: t("DirectLinkClick"),
      num: "1.5K",
      num2: "4.2%+",
      icon: <img src={shadow} alt="shadow " className="w-full" />,
    },
    {
      name: t("SocialNetworks"),
      subName: t("SocialChannels"),
      num: "31.5K",
      num2: "8.2%+",
      icon: <img src={globe} alt="globe" />,
    },
    {
      name: t("EmailNewsletter"),
      subName: t("MailCampaigns"),
      num: "893",
      num2: "2.4%+",
      icon: <img src={mail} alt="mail" />,
    },
    {
      name: t("Other"),
      subName: t("ManySources"),
      num: "12.5K",
      num2: "6.2%+",
      icon: <img src={star} alt="star" />,
    },
  ];

  return (
    <div className="col-span-6 lg:col-span-2 ">
      <div className=" bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-1">{t("SourceVisits")}</h2>
        <p className="text-gray-500 mb-4">38.4 {t("Visitors")}</p>
        <div className="mb-6 w-[100%] ">
          <Line data={data} options={options} ></Line>
        </div>

        <div className="">
          {Array.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-6 gap-2 items-center justify-items-start  mb-2"
            >
              <div className={`bg-gray-200 p-1 w-7 h-7 rounded-md `}>
                {item.icon}
              </div>
              <div className="col-span-3">
                <span className="text-sm">{item.name}</span>
                <div className="text-sm text-gray-400">{item.subName}</div>
              </div>
              <span className="text-sm text-gray-500 ">{item.num}</span>
              <span className="text-green-500 bg-green-100 px-2 py-0.5 rounded-md text-sm mx-2">{item.num2}</span>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default SourceVisits;
