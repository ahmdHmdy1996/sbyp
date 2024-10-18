import React from "react";
import BrandPayPal from "/src/assets/Icons/brand-paypal-1.svg";
import ChartPie from "/src/assets/Icons/chart-pie-2.svg";
import DotVetrical from "/src/assets/Icons/dots-vertical.svg";
import Dollar from "/src/assets/Icons/currency-dollar-1.svg";

const WeeklyProfit = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 col-span-6 lg:col-span-3">
      {/*  */}
      <div className="flex justify-between  mb-7">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800">
            تقارير الأرباح
          </h2>
          <p className="text-sm text-gray-400">
            نظرة عامة على الأرباح الأسبوعية
          </p>
        </div>

        <div className="text-gray-400">
          <img src={DotVetrical} alt="" />
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex justify-around items-center mb-4">
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-5">
            <h3 className="text-2xl font-semibold text-gray-500">468 ر.س</h3>
            <div className="text-green-500 bg-green-100 px-2 py-1 rounded-md text-md mx-2">
              4.2%+
            </div>
          </div>

          <div className="">
            <p className="text-sm text-gray-400">
              زيادة في الأرباح مقارنة بالأسبوع الماضي
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto mb-4 mx-2 max-w-[240px]">
          <div className="w-full">
            <div className="flex justify-between items-end h-28">
              <div className="w-[7%] bg-purple-200 h-16 rounded-t-md"></div>
              <div className="w-[7%] bg-purple-200 h-20 rounded-t-md"></div>
              <div className="w-[7%] bg-purple-200 h-24 rounded-t-md"></div>
              <div className="w-[7%] bg-menu h-36 rounded-t-md"></div>
              <div className="w-[7%] bg-purple-200 h-20 rounded-t-md"></div>
              <div className="w-[7%] bg-purple-200 h-16 rounded-t-md"></div>
              <div className="w-[7%] bg-purple-200 h-20 rounded-t-md"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2 ">
              <span>السبت</span>
              <span className="mx-1 ">الأحد</span>
              <span>الاثنين</span>
              <span className="mx-1">الثلاثاء</span>
              <span>الأربعاء</span>
              <span className="mx-1">الخميس</span>
              <span>الجمعة</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex justify-between items-center border border-gray-200 p-4 rounded-lg">
        <div className="w-1/3">
          <div className="flex  items-center mb-3">
            <img
              src={BrandPayPal}
              alt=""
              className="p-1 bg-red-100 rounded-md mx-2"
            />
            <p className="text-sm text-gray-400">المصروفات</p>
          </div>

          <p className="text-xl font-semibold mb-3   ">74.19 ر.س</p>

          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-red-500 h-1.5 rounded-full dark:bg-blue-500 w-[25%] "></div>
          </div>
        </div>

        <div className="w-1/3 mx-5">
          <div className="flex items-center mb-3">
            <img
              src={ChartPie}
              alt=""
              className="p-1 bg-blue-100 rounded-md mx-2"
            />
            <p className="text-sm text-gray-400 ">صافي الأرباح</p>
          </div>

          <p className="text-xl font-semibold text-teal-500 mb-3 ">
            256.34 ر.س
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-300 h-1.5 rounded-full dark:bg-blue-500 w-[70%] "></div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex items-center mb-3">
            <img
              src={Dollar}
              alt=""
              className="p-1 bg-purple-100 rounded-md mx-2"
            />
            <p className="text-sm text-gray-400">المدفوعات</p>{" "}
          </div>

          <p className="text-xl font-semibold text-purple-500 mb-3">545.69 ر.س</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-menu h-1.5 rounded-full dark:bg-blue-500 w-[70%] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProfit;
