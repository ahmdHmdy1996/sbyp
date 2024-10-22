import React, { useState } from "react";
import iconpackage from "/src/assets/Icons/package.png";
import chart from "/src/assets/Icons/chart.svg";
import bubble from "/src/assets/Icons/bubble.svg";
import profile from "/src/assets/Icons/profile.svg";
import card from "/src/assets/Icons/card.svg";
import cardslash from "/src/assets/Icons/card-slash.svg";
import free from "/src/assets/Images/free.png";
import trueIcon from "/src/assets/Icons/true.png";
import spaceRocket from "/src/assets/Images/space-rocket.png";
import dollarCoin from "/src/assets/Images/dollar-coin.png";
import safeBox from "/src/assets/Images/safe-box.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SubscriptionPlan = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  

  const plansArray = [
    {
      id:"p1",
      title: "المجانية",
      price: 0,
      description: "تناسب جميع الأعمال ",
      features: ["احصائيات ومعلومات عن المبيعات"],
      buttonText: "باقتك الحالية",
      image: safeBox,
    },
    {
      id:"p2",
      title: "الأساسية",
      price: "99",
      priceYearly: "990",
      description: "مناسبة للأعمال الصغيرة والمتوسطة",
      features: [
        "شحن المنتجات بواسطة j&t , مخازن اكسبرس",
        "تغليف مجاني لأول ٣٠٠ شحنة شهرياً",
        "احصائيات ومعلومات عن المبيعات",
        "إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة",
      ],
      person: 1,
      buttonText: "اشترك الآن",
      image: safeBox,
    },
    {
      id:"p3",
      title: "تمكين",
      description: "مناسبة للتجار المبتدئين",
      price: "299",
      priceYearly: "2990",
      features: [
        "العدد المسموح لرفع المنتجاج اليا",
        "شحن المنتجات بواسطة j&t , مخازن اكسبرس",
        "تغليف مجاني لأول ٣٠٠ شحنة شهرياً",
        "احصائيات ومعلومات عن المبيعات",
        "إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة",
        "الجرد الآلي للمنتجات",
        "الدفع عند الاستلام وفق الشروط",
      ],
      person: 3,
      count: 2500,
      buttonText: "اشترك الآن",
      image: spaceRocket,
    },
    {
      id:"p4",
      title: "الأعمال",
      description: "مناسبة للأعمال الكبيرة والشركات",
      price: "599",
      priceYearly: "5990",
      features: [
        "العدد المسموح لرفع المنتجات: 2500",
        "شحن المنتجات بواسطة j&t , مخازن اكسبرس",
        "تغليف مجاني لأول ٣٠٠ شحنة شهرياً",
        "احصائيات ومعلومات عن المبيعات",
        "إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة",
        "الجرد الآلي للمنتجات",
        "الدفع عند الاستلام وفق الشروط",
        "مكانية تخصيص شركة شحن خاصة بالتاجر وإصدار البوليصات من خلاله",
        "إمكانية تزويدنا بالتغليف الخاص بالمتجر وتخزينه لدينا برسوم إضافية",
        "إمكانية تخزين المنتجات الخاصة بالتاجر في مخازن برسوم إضافية",
      ],
      person: 10,
      count: 2500,
      buttonText: "اشترك الآن",
      image: dollarCoin,
    },
  ];
  const handleClick = (e) => {
    const current_plan_id = e.target.value;
    plansArray.map((item)=>{
      if(item.id === current_plan_id){
        console.log(item);
        navigate('/dashboard/subscription-plan/subscripe',{state:item})
        }
     })
    
   
  };

  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl">خطة الإشتراك</h1>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4">عدد المنتجات</p>
          <div className="flex items-center mb-3">
            <div className={`text-3xl bg-red-100 p-2 rounded-lg`}>
              <img src={iconpackage} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">
              1300 <span className="text-gray-300 text-sm ">/2500</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4">نسبة الربح</p>
          <div className="flex items-center mb-3">
            <div className={`text-3xl bg-orange-100 p-2 rounded-lg`}>
              <img src={chart} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">70.00%</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4">نوع الاشتراك</p>
          <div className="flex items-center">
            <div className={`text-3xl bg-purple-100 p-2 rounded-lg`}>
              <img src={bubble} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">شهري</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4"> المستخدمين</p>
          <div className="flex items-center">
            <div className={`text-3xl bg-green-100 p-2 rounded-lg`}>
              <img src={profile} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">
              2 <span className="text-gray-300 text-xs">/4</span>2500
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4">تاريخ الاشتراك</p>
          <div className="flex items-center">
            <div className={`text-3xl bg-purple-400 p-2 rounded-lg`}>
              <img src={card} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">7 أكتوبر 2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-col items-center justify-between">
          <p className="text-gray-500 my-4">تاريخ الانتهاء</p>
          <div className="flex items-center">
            <div className={`text-3xl bg-gray-100 p-2 rounded-lg`}>
              <img src={cardslash} alt="" />
            </div>
            <p className="text-2xl font-semibold mx-3">7 أكتوبر 2025</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 text-center bg-white rounded-2xl mt-6  ">
        <h1 className="text-3xl font-bold mb-2 mt-6">تفاصيل الباقات</h1>
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
          <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-64 max-w-64 mb-5 ">
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
            <button
              value={"p1"}
              onClick={handleClick}
              className=" absolute bottom-5 right-2 bg-green-100 text-green-500 py-2 px-4 rounded w-[90%]"
            >
              باقتك الحالية
            </button>
          </div>

          {/* second Plan */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-64 max-w-64 border-2 border-menu mb-5 min-h-[800px]">
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
              مناسبة للأعمال الصغيرة والمتوسطة
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
                شحن المنتجات بواسطة j&t , مخازن اكسبرس
              </p>
              <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
            </div>
            <div className="flex justify-between items-center mb-3 text-start ">
              <p className="text-gray-400 text-xs">
                تغليف مجاني لأول ٣٠٠ شحنة شهرياً
              </p>
              <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
            </div>
            <div className="flex justify-between items-center mb-3 text-start ">
              <p className="text-gray-400 text-xs">
                احصائيات ومعلومات عن المبيعات
              </p>
              <img src={trueIcon} alt="" className="max-w-4 max-h-4" />
            </div>
            <div className="flex justify-between items-center mb-3 text-start ">
              <p className="text-gray-400 text-xs">
                إمكانية إضافة مستخدمين إلى حسابك بصلاحيات محدودة
              </p>
              <p className="text-sm mx-1"> 1 </p>
            </div>

            <button
              value={"p2"}
              onClick={handleClick}
              className="absolute bottom-5 right-2 bg-menu text-white py-2 px-4 rounded w-[90%] "
            >
              اشترك الآن
            </button>
          </div>

          {/* third Plan */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-64 max-w-64 mb-5 min-h-[800px]">
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

            <button
              value={"p3"}
              onClick={handleClick}
              className="absolute bottom-5 right-2 bg-gray-200 text-menu py-2 px-4 rounded w-[90%]"
            >
              اشترك الآن
            </button>
          </div>

          {/* fourth Plan */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-64 max-w-64 mb-5 min-h-[800px]">
            <img
              src={dollarCoin}
              alt="Rocket icon"
              className="mx-auto mb-3 max-w-24"
            />
            <h2 className="text-xl font-bold mb-2"> الأعمال</h2>
            <p className="text-gray-400 mb-9 text-sm">
              مناسبة للأعمال الكبيرة والشركات
            </p>

            {isChecked ? (
              <>
                <p className="text-4xl font-bold text-menu ">
                  5990
                  <span className="text-lg text-gray-400 ">رس / سنوياً</span>
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
                إمكانية تزويدنا بالتغليف الخاص بالمتجر وتخزينه لدينا برسوم
                إضافية{" "}
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
            <button
              value={"p4"}
              onClick={handleClick}
              className="absolute bottom-5 right-2 bg-gray-200 text-menu py-2 px-4 rounded w-full"
            >
              اشترك الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
