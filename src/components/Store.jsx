import React from "react";

const Store = () => {
  return (
    <div className="flex justify-center items-center mt-6 ">
      <div className="bg-white p-8 rounded-2xl w-full">
        <h1 className="text-xl font-bold mb-4">المخزن</h1>
        <div className="border rounded-lg px-6 py-4 ">
          <div className="flex items-center  mt-4 mb-6">
            <input
              type="text"
              placeholder="أدخل الكمية في المخزن"
              className="border ml-4 p-3 rounded-md flex-grow"
            />
            <button className="bg-menu text-white px-7 py-3 rounded-md">
              تأكيد
            </button>
          </div>
          <div className="text-gray-900 my-8 space-y-4">
            <p>المنتجات المتوفرة الآن: 8</p>
            <p>المنتجات قيد الشحن: 62</p>
            <p>آخر إعادة تخزين: 24 يونيو 2023</p>
            <p>إجمالي المخزون: 2,430</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
