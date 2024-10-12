import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChevronUp from "/Icons/chevron-up.svg";
import ChevronDown from "/Icons/chevron-down.png";
import DotVetrical from "/Icons/dots-vertical.svg";

const SalesByCountries = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("language");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  const data = [
    {
      country: t("UnitedStates"),
      sales: "8.45k",
      change: "25.8%",
      flag: "us",
      changeType: "up",
    },
    {
      country: t("Brazil"),
      sales: "7.78k",
      change: "16.2%",
      flag: "br",
      changeType: "down",
    },
    {
      country: t("India"),
      sales: "6.48k",
      change: "12.3%",
      flag: "in",
      changeType: "up",
    },
    {
      country: t("Australia"),
      sales: "5.12k",
      change: "11.9%",
      flag: "au",
      changeType: "down",
    },
    {
      country: t("France"),
      sales: "4.45k",
      change: "16.2%",
      flag: "fr",
      changeType: "up",
    },
    {
      country: t("China"),
      sales: "3.90k",
      change: "14.8%",
      flag: "cn",
      changeType: "up",
    },
  ];
  const Flag = ({ code }) => (
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      alt={`${code} flag`}
      className="w-6 h-6 rounded-full"
    />
  );

  const ChangeIcon = ({ type }) =>
    type === "up" ? <img src={ChevronUp} /> : <img src={ChevronDown} />;

  const SalesItem = ({ country, sales, change, flag, changeType }) => (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <Flag code={flag} />
        <div className={`${language == "en" ? "ml-3 " : "mr-3"}`}>
          <div className="text-gray-800 font-semibold">
            {sales} {t("curr")}
          </div>
          <div className="text-gray-500 text-sm">{country}</div>
        </div>
      </div>
      <div className="flex items-center">
        <ChangeIcon type={changeType} />
        <div
          className={`ml-1 ${
            changeType === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-white rounded-lg shadow-md p-4 col-span-6 lg:col-span-2">
      <div className="mb-4 flex justify-between">
        <div>
          <div className="text-gray-800 font-semibold">{t("SalesByCountries")}</div>
          <div className="text-gray-500 text-sm">{t("MonthlySalesOverview")}</div>
        </div>
        <img src={DotVetrical} alt="" />
      </div>
      {data.map((item, index) => (
        <SalesItem key={index} {...item} />
      ))}
    </div>
  );
};

export default SalesByCountries;
