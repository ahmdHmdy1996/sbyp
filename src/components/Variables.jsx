import React from "react";
import Add from "/Icons/add-circle.png"
import Arrow from "/Icons/arrow-down.png"

const Variables = () => {
  return (
    <div className="relative bg-white p-6 rounded-3xl  w-full max-w-3xl mt-6">
      <h2 className="text-gray-800 text-lg my-5">المتغيرات</h2>
      <div className="border border-gray-200 rounded-2xl px-3  py-5 flex items-center space-x-4">
        <div className="w-1/4 mx-3">
          <label className="block text-gray-500 mb-1">اسم المتغير</label>
          <div className="relative">
            <select className="w-full border border-gray-200 rounded-lg p-2 text-gray-800 appearance-none">
              <option>المقاس</option>
            </select>
            <img src={Arrow} className=" absolute top-3 left-3 "/>
          </div>
        </div>
        <div className="flex-grow">
          <label className="block text-gray-500 mb-1">تفاصيل المتغير</label>
          <input
            type="text"
            placeholder="ادخل المقاسات المتاحة"
            className="w-full border border-gray-200 rounded-lg p-2 text-gray-500"
          />
        </div>
      </div>
      <div className="flex justify-end  mt-7">
        <button className="  bg-menu text-white py-2 px-4 rounded-xl flex items-center">
          <img src={Add} alt=""  className="mx-2"/>
          إضافة متغير جديد
        </button>
      </div>
    </div>
  );
};

export default Variables;
