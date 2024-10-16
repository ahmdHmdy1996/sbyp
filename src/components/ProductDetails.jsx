import React from "react";
import IconButton from "/Icons/IconButton.png";
import IconButtonlast from "/Icons/IconButtonlast.png";
import IconCenter from "/Icons/IconCenter.png";
import IconItalic from "/Icons/IconItalic.png";
import IconLeft from "/Icons/IconLeft.png";
import IconList from "/Icons/IconList.png";
import IconMiddle from "/Icons/IconMiddle.png";
import IconRight from "/Icons/IconRight.png";
import IconUnderLine from "/Icons/IconUnderLine.png";
const ProductDetails = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-8 rounded-3xl  w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-6">تفاصيل المنتج</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block text-gray-500 mb-2">اسم المنتج</label>
            <input
              type="text"
              placeholder="ادخل اسم المنتج"
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-500 mb-2">التصنيف</label>
            <div className="relative">
              <select className="w-full p-2 border text-gray-500 border-gray-200 rounded appearance-none">
                <option >اختر التصنيف</option>
              </select>
              <i className="fas fa-chevron-down absolute top-3 right-3 text-gray-500"></i>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-gray-500 mb-2">باركود المنتج</label>
            <input
              type="text"
              placeholder="باركود المنتج"
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-500 mb-2">رقم الصنف</label>
            <input
              type="text"
              placeholder="ادخل رقم الصنف"
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-2">
            وصف المنتج (اختياري)
          </label>
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center mb-4">
              <button className="p-2 text-gray-500 hover:text-gray-500">
                <img src={IconButton} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
                <img src={IconItalic} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconUnderLine} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconCenter} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconList} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconRight} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconMiddle} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconLeft} alt="" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-500">
              <img src={IconButtonlast} alt="" />
              </button>
            </div>
            <textarea
              className="w-full h-32 p-2 border border-gray-200 rounded"
              placeholder="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
