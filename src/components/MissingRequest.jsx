import React from "react";

const MissingRequest = ({closeMissingModal}) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-white p-8 rounded-3xl shadow-lg  w-[35%]">
        <h1 className="text-2xl font-bold mb-6 text-right border-b pb-4">طلب مفقود</h1>
        <div className="mb-4">
          <label className="block text-right mb-2">رقم الطلب</label>
          <input
            type="text"
            placeholder="من فضلك ادخل رقم الطلب"
            className="w-full p-3 border border-gray-200 rounded-full text-right placeholder-gray-300 mb-6 "
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-menu text-white py-2 px-10 rounded-full mx-2">
            حفظ
          </button>
          <button onClick={closeMissingModal} className="bg-gray-300 text-white py-2 px-10 rounded-full">
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissingRequest;
