import React, { useState } from "react";

const RechargeWallet = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState("payment");
  const [amount, setAmount] = useState(0);
  const fee = amount * 0.01;
  const totalAmount = amount + fee;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md w-[35%] h-[90%] overflow-y-scroll scrollable-container ">
      <h2 className="text-center text-xl font-semibold mb-4">
        إعادة شحن المحفظة
      </h2>
      <div className="flex justify-center mb-4">
        <button
          className={`flex items-center justify-center p-3 w-[50%] rounded-r-full ${
            activeTab === "bank"
              ? "bg-menu text-white"
              : "bg-purple-200 text-white"
          }`}
          onClick={() => setActiveTab("bank")}
        >
          <img
            src="/src/assets/Icons/money-change.svg"
            alt=""
            className="mx-2"
          />
          <p>تحويل بنكي </p>
        </button>
        <button
          className={`flex items-center justify-center p-3 w-[50%] rounded-l-full ${
            activeTab === "payment"
              ? "bg-menu text-white"
              : "bg-purple-200 text-white"
          }`}
          onClick={() => setActiveTab("payment")}
        >
          <img
            src="/src/assets/Icons/security-card.svg"
            alt=""
            className="mx-2"
          />
          <p>الدفع بالبطاقة</p>
        </button>
      </div>
      {activeTab === "payment" ? (
        <div>
          <div className="mb-4">
            <h3 className="text-gray-600 mb-2">اختر طريقة الدفع</h3>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img
                src="/src/assets/Icons/Maestro.svg"
                alt="Maestro logo"
                className="border p-2 rounded-md"
              />
              <img
                src="/src/assets/Icons/Mastercard.svg"
                alt="MasterCard logo"
                className="border p-2 rounded-md"
              />
              <img
                src="/src/assets/Icons/visa-logo.svg"
                alt="Visa logo"
                className="border py-3 px-2 rounded-md"
              />
              <button>
                <img src="/src/assets/Icons/add-square.png" />
              </button>
            </div>
            <label htmlFor="amount">المبلغ</label>
            <input
              type="text"
              name="amount"
              placeholder="من فضلك ادخل المبلغ المراد شحن المحفظة به"
              className="w-full p-2 border rounded-full mb-4 mt-2 focus:outline-none focus:border-menu"
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </div>
          <div className="text-gray-600 mb-10">
            <p>رسوم الخدمة : {fee} ريال سعودي</p>
            <p>إجمالي المبلغ: {totalAmount} ريال سعودي</p>
          </div>
          <div className="flex justify-end ">
            <button className="bg-menu text-white mx-2 py-2 px-10 rounded-full ">
              إرسال
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-200 text-white  py-2 px-10 rounded-full"
            >
              الغاء
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4 pb-3 border-b ">
            <h3 className="font-bold my-4">قم بإختيار البنك</h3>
            <div className="flex items-center space-x-2 space-x-reverse mb-2 border p-3 rounded-2xl">
              <img
                src="/src/assets/Icons/Vector.svg"
                alt="BNI Mobile Banking logo"
                className="w-8 h-8"
              />
              <span>BNI Mobile Banking</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse mb-2 border p-3 rounded-2xl">
              <img
                src="/src/assets/Icons/Vector-1.svg"
                alt="BRImo logo"
                className="w-8 h-8"
              />
              <span>BRImo</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse mb-2 border p-3 rounded-2xl">
              <img
                src="/src/assets/Icons/shape.svg"
                alt="Bank Indonesia logo"
                className="w-8 h-8"
              />
              <span>Bank Indonesia</span>
            </div>
          </div>
          <div className="text-gray-500 mb-6 space-y-2 ">
            <p className="font-semibold">
              # رقم الحساب:
              <span className="tracking-widest text-sm font-normal">
                926323674
              </span>
            </p>
            <p className="flex">
              <img src="/src/assets/Icons/lock.svg" className="ml-1" alt="" />
              رقم الايبان :
              <span className="tracking-widest text-sm font-normal">
                1465 - 95311
              </span>
            </p>
            <p className="font-semibold">
              اسم المستفيد:{" "}
              <span className="font-normal text-md">اسم المستفيد</span>
            </p>
          </div>
          <label htmlFor="amount">المبلغ</label>
          <input
            name="amount"
            type="text"
            placeholder="من فضلك ادخل المبلغ المراد شحن المحفظة به"
            className="w-full p-2 border rounded-full mb-2 mt-2"
          />
          <p className="text-gray-600 mb-4"></p>
          <div className="text-gray-600 mb-4">
            <div className="flex items-center mb-4">
              <img src="/src/assets/Icons/notification-bing.svg" className="" />
              <p className="text-menu font-bold">ملاحظة</p>
            </div>
            <p className="mb-3">
              الرجاء التأكد من أن الإيصال يحتوي على التالي:
            </p>
            <ul className="list-disc pr-7 text-sm  text-gray-400 space-y-2 mb-8">
              <li>الحوالة من STC Pay غير مقبولة</li>
              <li>ظهور التاريخ والوقت بالتفصيل</li>
              <li>ظهور اخر 3 او 4 ارقام من رقم حساب المرسل مع الاسم</li>
              <li>ظهور رقم واسم حساب المستلم</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <button className="bg-menu text-white py-2 px-12 rounded-full mx-2">
              إرسال
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-white py-2 px-12 rounded-full"
            >
              الغاء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeWallet;
