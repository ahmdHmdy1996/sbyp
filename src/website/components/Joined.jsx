import React, { useEffect } from "react";
import GetData from "/src/assets/Images/GetData.png";
import Connect from "/src/assets/Images/Connect.png";
import Login from "/src/assets/Images/Login.png";
import DirectionLine from "/src/assets/Images/Direction Line.png";
import DirectionLine2 from "/src/assets/Images/DirectionLine.png";
import { Element } from "react-scroll";

const Joined = () => {
  return (
    <Element name="join">
      <section id="join" className="container mx-auto px-4 py-12">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-4">
          استمتع بتجربة سهلة ومبسطة ✨
        </h1>
        <h2 className="text-xl lg:text-3xl font-bold text-center text-indigo-900 mb-12">
          كيف تستخدم نظام SBYP لتحقيق أهدافك
        </h2>
        <div className="flex flex-col lg:flex-row justify-center  items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center text-center px-3">
            <img
              src={Login}
              alt="Login and account creation icons"
              className="mb-4"
            />
            <h3 className="text-md lg:text-xl font-bold mb-2">
              تسجيل الدخول أو إنشاء حساب للوصول إلى منصتنا
            </h3>
            <p className="text-gray-400 text-sm lg:text-lg">
              قم بتسجيل الدخول أو إنشاء حساب جديد لتتمكن من استخدام منصتنا
              والاستفادة من مميزاتها.
            </p>
          </div>

          <div className="items-start hidden lg:inline-block">
            <img src={DirectionLine} alt="" className="mb-28 " />
          </div>
          <div className="flex flex-col items-center text-center px-3">
            <img
              src={Connect}
              alt="Icons representing different platforms"
              className="mb-4  w-56"
            />
            <h3 className="text-md lg:text-xl font-bold mb-2">
              ربط موقعك الإلكتروني بنقرات قليلة
            </h3>
            <p className="text-sm lg:text-lg text-gray-400">
              اختر التطبيق الذي ترغب في ربطه بموقعك الإلكتروني بكل سهولة ونقرات
              بسيطة.
            </p>
          </div>
          <div className="mt-8 items-start hidden lg:inline-block">
            <img src={DirectionLine} alt="" className="mb-28" />
          </div>
          <div className="flex flex-col items-center text-center px-3">
            <img
              src={GetData}
              alt="Graph showing sales data"
              className="mb-4"
            />
            <h3 className="text-md lg:text-xl font-bold mb-2 p-1">
              احصل على بيانات المبيعات التي تحتاجها
            </h3>
            <p className="text-gray-400 text-sm lg:text-lg">
              يمكنك الوصول إلى بيانات مبيعات منتجاتك بكل تفاصيلها بما في ذلك
              المتغيرات التي ترغب بتحليلها.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Joined;
