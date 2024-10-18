import React from "react";
import Bars from "/src/assets/Images/Bars.png";
import DotVetrical from "/src/assets/Icons/dots-vertical.svg";
import BrandPaypal from "/src/assets/Icons/brand-paypal.svg";
import Dollar from "/src/assets/Icons/currency-dollar.svg";

const TotalEar = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 col-span-6 lg:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-700 font-bold text-lg">اجمالي الارباح</div>
        <div className="text-gray-500">
          <img src={DotVetrical} alt="" />{" "}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold">87%</span>
        <span className="text-green-500 text-sm mr-2">
          25.8% 
        </span>
      </div>
      <div className="mb-4">
        <img src={Bars} alt="Graph showing earnings" className="w-full" />
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="bg-purple-100 text-purple-500 p-2 rounded-md ">
          <img src={BrandPaypal} alt="" />
        </span>
        <div className="flex items-center w-[50%] mx-4">
          <div className="text-gray-700">
            <div>اجمالي الايرادات</div>
            <div className="text-sm text-gray-500">مدفوعات العملاء</div>
          </div>
        </div>
        <div className="text-green-500 font-bold">$126+</div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="bg-purple-300 text-purple-500 p-2 rounded-md ">
          <img src={Dollar} alt="" />
        </span>
        <div className="flex items-center w-[50%] mx-4">
          <div className="text-gray-700">
            <div>اجمالي المبيعات</div>
            <div className="text-sm text-gray-500">استرداد</div>
          </div>
        </div>
        <div className=" flex-end text-green-500 font-bold">$98+</div>
      </div>
    </div>
  );
};

export default TotalEar;
