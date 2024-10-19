import React, { useEffect, useState } from "react";
import dollarCoin from "/Images/dollar-coin.png";
import safeBox from "/Images/safe-box.png";
import spaceRocket from "/Images/space-rocket.png";
import Icon from "/Images/Icon.png";
import trueIcon from "/Icons/true.png";
import falseIcon from "/Icons/false.png";
import free from "/Images/free.png";
import { LuDot } from "react-icons/lu";
import ScrollToTop from "./components/ScrollToTop";


const Subscription = () => {
  const [isChecked, setIsChecked] = useState(false);
  

  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="container mx-auto p-4 text-center">
       <ScrollToTop/>
      <h1 className="text-3xl font-bold mb-2">تفاصيل الباقات</h1>
      <p className="text-gray-400 px-5 mb-4 w-1/3 m-auto">
        تتضمن جميع الخطط أكثر من ميزة مقدمة لتعزيز منتجاتك. اختر الخطة الأفضل
        لتلبية احتياجاتك.
      </p>
      <div className="flex  justify-center items-center mb-8">
        <span className="text-gray-600 mr-2">شهري</span>
        <div className="flex flex items-center">
          <label className="inline-flex relative items-center cursor-pointer mx-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div
              className={`w-10 h-4  rounded-full shadow-inner ${
                isChecked ? "bg-menu" : "bg-gray-400"
              } `}
            ></div>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform ${
                isChecked ? "translate-x-[-1.5rem]" : "translate-x-1 "
              }`}
            ></div>
          </label>
        </div>

        <span className="text-gray-600 ml-2">سنوي</span>
      </div>

      <div className=" flex flex-wrap justify-center space-x-4 w-full min-h-[768px]">
        {/* first Plan */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-60 max-w-72 mb-5 ">
          <img
            src={free}
            alt="Money bag icon"
            className="mx-auto mb-4 max-w-24"
          />
          <h2 className="text-xl font-bold mb-2"> المجانية </h2>
          <p className="text-gray-400 mb-8"> تناسب جميع الأعمال </p>
          <p className="text-5xl font-bold text-menu mb-12  ">
            0<span className="text-lg text-gray-400 ">رس / شهرياً</span>
          </p>

          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              احصائيات ومعلومات عن المبيعات
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <button className=" absolute bottom-5 right-2 bg-gray-200 text-menu py-2 px-4 rounded w-[90%]">
            اشترك الآن
          </button>
        </div>

        {/* second Plan */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-60 max-w-72 border-2 border-menu mb-5 min-h-[768px]">
          <div className="relative">
            <img
              src={safeBox}
              alt="Safe icon with coins"
              className="mx-auto mb-4 max-w-24"
            />
            <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded">
              الأكثر شيوعاً
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2"> الأساسية </h2>
          <p className="text-gray-400 mb-4">
            {" "}
            مناسبة للأعمال الصغيرة والمتوسطة{" "}
          </p>

          {isChecked ? (
            <>
              <p className="text-4xl font-bold text-menu ">
                990<span className="text-lg text-gray-400">رس / سنوياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">99 رس شهرياً</p>
            </>
          ) : (
            <>
              <p className="text-4xl font-bold text-menu ">
                99<span className="text-lg">رس / شهرياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">990 رس سنوياً</p>
            </>
          )}

          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              شحن المنتجات بواسطة j&t , مخازن اكسبرس{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              غليف مجاني لأول ٣٠٠ شحنة شهرياً{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              احصائيات ومعلومات عن المبيعات
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة
            </p>
            <p className="text-sm mx-1"> 1 </p>
          </div>

          <button className="absolute bottom-5 right-2 bg-menu text-white py-2 px-4 rounded w-[90%] ">
            اشترك الآن
          </button>
        </div>

        {/* third Plan */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-60 max-w-72 mb-5 min-h-[768px]">
          <img
            src={spaceRocket}
            alt="Rocket icon"
            className="mx-auto mb-4 max-w-24"
          />
          <h2 className="text-xl font-bold mb-2"> تمكين </h2>
          <p className="text-gray-400 mb-10"> مناسبة للتجار المبتدئين </p>
          {isChecked ? (
            <>
              <p className="text-4xl font-bold text-menu ">
                2990<span className="text-lg text-gray-400">رس / سنوياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">299 رس شهرياً</p>
            </>
          ) : (
            <>
              <p className="text-4xl font-bold text-menu ">
                299<span className="text-lg text-gray-400">رس / شهرياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">2990 رس سنوياً</p>
            </>
          )}

          <div className="flex justify-between items-center mb-3 text-start">
            <p className="text-gray-400 text-xs ">
              {" "}
              العدد المسموح لرفع المنتجات آلياً{" "}
            </p>
            <p className="text-xs">2500</p>{" "}
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              شحن المنتجات بواسطة j&t , مخازن اكسبرس{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              غليف مجاني لأول ٣٠٠ شحنة شهرياً{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              احصائيات ومعلومات عن المبيعات
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة
            </p>
            <p className="text-sm mx-1"> 3 </p>
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs"> الجرد الآلي للمنتجات</p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              الدفع عن الاستلام وفق الشروط{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>

          <button className="absolute bottom-5 right-2 bg-gray-200 text-menu py-2 px-4 rounded w-[90%]">
            اشترك الآن
          </button>
        </div>

        {/* fourth Plan */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-60 max-w-72 mb-5 min-h-[768px]">
          <img
            src={dollarCoin}
            alt="Rocket icon"
            className="mx-auto mb-4 max-w-24"
          />
          <h2 className="text-xl font-bold mb-2"> الأعمال</h2>
          <p className="text-gray-400 mb-10">مناسبة للأعمال الكبيرة والشركات</p>

          {isChecked ? (
            <>
              <p className="text-4xl font-bold text-menu ">
              5990<span className="text-lg text-gray-400 ">رس / سنوياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">599 رس شهرياً</p>
            </>
          ) : (
            <>
              <p className="text-4xl font-bold text-menu ">
                599<span className="text-lg text-gray-400">رس / شهرياً</span>
              </p>
              <p className="text-gray-400 mb-10 text-xs">5990 رس سنوياً</p>
            </>
          )}    

          <div className="flex justify-between items-center mb-3 text-start">
            <p className="text-gray-400 text-xs ">
              {" "}
              العدد المسموح لرفع المنتجات آلياً{" "}
            </p>
            <p className="text-xs">2500</p>{" "}
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              شحن المنتجات بواسطة j&t , مخازن اكسبرس{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              غليف مجاني لأول ٣٠٠ شحنة شهرياً{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              احصائيات ومعلومات عن المبيعات
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة
            </p>
            <p className="text-sm mx-1"> 10 </p>
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs"> الجرد الآلي للمنتجات</p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              الدفع عن الاستلام وفق الشروط{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية تخصيص شركة شحن خاصة بالتاجر وإصدار البوليصات من خلاله{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start ">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية تزويدنا بالتغليف الخاص بالمتجر وتخزينه لدينا برسوم إضافية{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <div className="flex justify-between items-center mb-3 text-start mb-10">
            <p className="text-gray-400 text-xs">
              {" "}
              إمكانية تخزين المنتجات الخاصة بالتاجر في مخازن برسوم إضافية{" "}
            </p>
            <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
          </div>
          <button className="absolute bottom-5 right-2 bg-gray-200 text-menu py-2 px-4 rounded w-full">
            اشترك الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
