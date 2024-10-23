import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Subscripe = () => {
  const location = useLocation();
  const plan = location.state;
  const [activeTab, setActiveTab] = useState("credit");
  console.log(plan);
  const final_price = Math.round(plan.price);
  const original_price = Math.round(final_price / (1 + 0.15));

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full  p-6">
        <h1 className="text-xl font-bold text-right mb-6">خطة الإشتراك</h1>
        <div className="flex justify-between items-start">
          {/* plans Details */}
          <div className="w-1/3 bg-gray-50 p-6 bg-white  rounded-3xl">
            <h2 className="text-xl font-bold text-center mb-4">{plan.title}</h2>
            <p className="text-center mb-4">{plan.description}</p>
            <div className="  text-center mb-4 flex-col ">
              <p className="font-bold text-menu text-5xl">{plan.price} </p>
              <p className="text-lg text-gray-400">ر.س / شهرياً</p>
              <p className="text-gray-300 mb-4 text-sm">يشمل 15% ضريبة</p>
            </div>
            <ul className="text-right list-disc list-inside text-gray-900 space-y-4">
              {plan.features.map((e, index) => (
                <li className="" key={index}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Order Details */}
          <div className="w-2/3 bg-gray-50 px-6">
            <div className="flex justify-between  items-center  mb-6">
              <div className="flex bg-gray-200 p-3 rounded-full w-[50%]">
                <button
                  className={`flex items-center justify-center py-2 px-4 w-[50%] rounded-full ${
                    activeTab === "credit"
                      ? "bg-menu text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("credit")}
                >
                  <p>البطاقة الائتمانية</p>
                </button>
                <button
                  className={`flex items-center justify-center p-1 px-4 w-[50%] rounded-full ${
                    activeTab === "wallet"
                      ? "bg-menu text-white"
                      : "bg-gray-200 "
                  }`}
                  onClick={() => setActiveTab("wallet")}
                >
                  <p>الدفع من المحفظة</p>
                </button>
              </div>
              {activeTab === "wallet" && (
                <p className="text-green-500">
                  الرصيد المتاح في المحفظة: 300 ر.س
                </p>
              )}
            </div>
            {activeTab === "credit" ? (
              <div className="bg-white p-6  shadow-md rounded-3xl">
                <h2 className="text-lg font-bold text-right mb-4">
                  تفاصيل الطلب
                </h2>
                <div className="flex justify-between border-b-2 border-gray-200">
                  <div className="mb-4 space-y-2 text-right ">
                    <p>السعر</p>
                    <p>بوابة الدفع (رسوم الخدمة)</p>
                    <p>الضريبة (15%)</p>
                    <p>خصم</p>
                    <p className="font-bold text-xl">الإجمالي</p>
                  </div>
                  <div className="mb-4 space-y-2 text-left">
                    <p>{original_price} ر.س</p>
                    <p className="text-gray-400">0 ر.س</p>
                    <p>{Math.round(original_price * 0.15)} ر.س</p>
                    <p className="text-gray-400">0 ر.س</p>
                    <p className="font-bold">{plan.price} ر.س</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="كود خصم"
                      className="border border-gray-200 rounded-md py-2 px-4 text-right "
                    />
                    <button className="bg-purple-100 text-menu py-2 px-5 mx-3 rounded-md ">
                      تأكيد
                    </button>
                  </div>
                  <div>
                    <button className="bg-menu text-white mx-2 py-2 px-10 rounded-full">
                      إرسال
                    </button>
                    <button className="bg-gray-200 text-gray-500 py-2 px-10 rounded-full">
                      إلغاء
                    </button>
                  </div>
                </div>
                <p className="text-xs text-red-500 text-right mt-2">
                  *الرجاء عدم الخروج من صفحة التحميل حتى إكتمال الدفع
                </p>
              </div>
            ) : (
              <div className="bg-white p-6  shadow-md rounded-3xl">
                <h2 className="text-lg font-bold text-right mb-4">
                  تفاصيل الطلب
                </h2>
                <div className="flex justify-between border-b-2 border-gray-200">
                  <div className="mb-4 space-y-2 text-right ">
                    <p>السعر</p>
                    <p>بوابة الدفع (رسوم الخدمة)</p>
                    <p>الضريبة (15%)</p>
                    <p>خصم</p>
                    <p className="font-bold text-xl">الإجمالي</p>
                  </div>
                  <div className="mb-4 space-y-2 text-left">
                    <p>{original_price} ر.س</p>
                    <p className="text-gray-400">0 ر.س</p>
                    <p>{Math.round(original_price * 0.15)} ر.س</p>
                    <p className="text-gray-400">0 ر.س</p>
                    <p className="font-bold">{plan.price} ر.س</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="كود خصم"
                      className="border border-gray-200 rounded-md py-2 px-4 text-right "
                    />
                    <button className="bg-purple-100 text-menu py-2 px-5 mx-3 rounded-md ">
                      تأكيد
                    </button>
                  </div>
                  <div>
                    <button className="bg-menu text-white mx-2 py-2 px-10 rounded-full">
                      إرسال
                    </button>
                    <button className="bg-gray-200 text-gray-500 py-2 px-10 rounded-full">
                      إلغاء
                    </button>
                  </div>
                </div>
                <p className="text-xs text-red-500 text-right mt-2">
                  *الرجاء عدم الخروج من صفحة التحميل حتى إكتمال الدفع
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscripe;
