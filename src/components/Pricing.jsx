import React, { useState } from "react";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bg-white p-6 rounded-3xl ">
      <h2 className="text-xl font-semibold mb-4 text-right">التسعير</h2>
      <div className="mb-4">
        <label className="block text-right mb-1">السعر</label>
        <input
          type="text"
          placeholder="ادخل السعر الأصلي للمنتج"
          className="w-full p-2 border border-gray-300 rounded-md text-right"
        />
      </div>
      <div className="mb-4">
        <label className="block text-right mb-1">السعر بعد الخصم</label>
        <input
          type="text"
          placeholder="ادخل السعر بعد الخصم"
          className="w-full p-2 border border-gray-300 rounded-md text-right"
        />
      </div>
      <div className="mb-4">
        <label className="block text-right mb-1">العمولة</label>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="ادخل نسبة العمولة"
            className="w-full p-3 border border-gray-300 rounded-md text-right"
          />
          <span className="absolute left-2 ml-2 bg-purple-100 text-menu px-4 py-1 rounded-md">
            %
          </span>
        </div>
      </div>
      <div className="mb-4 flex items-center ">
        <input type="checkbox" className="form-checkbox h-5 w-5 !text-menu" />
        <label className="text-right mx-2">تطبيق ضريبة القيمة المضافة</label>
      </div>
      <div className="flex items-center justify-between">
        <label className="text-right">متوفر في المخزن</label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <label className="inline-flex relative items-center cursor-pointer mx-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div
              className={`w-11 h-6  rounded-full shadow-inner ${
                isChecked ? "bg-menu" : "bg-gray-400"
              } `}
            ></div>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform ${
                isChecked ? "translate-x-[-1.50rem]" : "translate-x-[-0.2rem] "
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
