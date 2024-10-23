import React from "react";

const TotalSalesMon = () => {
  return (
    <div className="col-span-6 lg:col-span-2 m-auto">
      <div className=" w-full bg-gray-100 h-full">
        <div className="bg-white rounded-3xl h-full">
          <h2 className="hidden lg:block text-gray-700 text-lg font-semibold pt-4 px-3 mb-2">
            متوسط المبيعات اليومية
          </h2>
          <p className="text-gray-500 lg:mb-4 pt-2 px-3">إجمالي المبيعات هذا الشهر</p>
          <div className="flex px-3">
            <p className="text-gray-800 text-2xl font-bold mx-1">28,450</p>
            <p className="text-gray-800 text-2xl font-bold ">ر.س </p>
          </div>

          <div className="mt-4 w-full h-auto">
            <svg
              className="w-full "
              viewBox="0 0 144 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24C24 24 24 0 48 0C72 0 72 48 96 48C120 48 120 24 144 24"
                stroke="#22C55E"
                strokeWidth="2"
                fill="none"
              />
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
              <path
                d="M0 24C24 24 24 0 48 0C72 0 72 48 96 48C120 48 120 24 144 24V48H0V24Z"
                fill="url(#gradient)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSalesMon;
