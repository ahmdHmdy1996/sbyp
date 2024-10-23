import React from "react";
import DotVetrical from "/src/assets/Icons/dots-vertical.svg";
import Ticket from "/src/assets/Icons/ticket.svg";
import Check from "/src/assets/Icons/check.svg";
import Clock from "/src/assets/Icons/clock.svg";

const SupportMonitor = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-6  col-span-6 lg:col-span-3 ">
      <div className="min-w-[95%] ">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-500 text-sm  lg:text-lg font-semibold">مراقب الدعم</div>
          <div className="text-gray-400">
            <img src={DotVetrical} alt="" />
          </div>
        </div>
        <div className="text-gray-400 text-xs lg:text-sm mb-4">آخر 7 أيام</div>
        <div className="flex items-center justify-between">
          <div className="">
            <div className="text-sm lg:text-4xl font-bold text-gray-700 mb-2">164</div>
            <div className="text-gray-500 mb-4 text-sm lg:text-md">مجموع تذاكر الدعم</div>
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-2 rounded-md ml-3">
                <img src={Ticket} alt=""  />
              </div> 
              <div>
                <div className="text-xs lg:text-lg font-semibold">تذاكر دعم جديدة</div>
                <div className="text-sm lg:text-lg text-gray-300">142</div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="bg-green-100 p-2 rounded-md ml-3">
                <img src={Check} alt="" />
              </div>
              <div>
                <div className="text-xs lg:text-lg font-semibold">تذاكر مفتوحة</div>
                <div className="text-xs lg:text-lg text-gray-300">28</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-md ml-3">
                <img src={Clock} alt="" />
              </div>
              <div>
                <div className="text-xs lg:text-lg font-semibold">وقت الاستجابة</div>
                <div className="text-xs lg:text-lg text-gray-300"> 1Day </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <svg className="w-36 h-36 lg:w-60 lg:h-60 mx-6 ">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#A78BFA"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="42"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xs lg:text-lg text-gray-500 ">المهام المكتملة</div>
              <div className="text-xs lg:text-3xl font-bold text-gray-700">85%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMonitor;
