import React from "react";

import HeroPng from "/src/assets/Images/Hero2.png";
import barChart from "/src/assets/Images/bar-chart-2 1.png";
import Frame45 from "/src/assets/Images/Frame 45.png";

const Hero = () => {
  return (
    <section className="lg:container mx-auto flex flex-col lg:flex-row items-center justify-between pt-16 lg:pt-8 border-b-4 border-menu/75">
      <div className="w-[95%] lg:w-1/2 flex flex-col items-center lg:items-start  text-center lg:text-right mb-8 lg:mb-0 lg:mt-0 lg:mr-2 m-auto overflow-hidden	">
        <h1 className="text-xl lg:text-5xl font-bold text-gray-900 leading-tight  ">
          ابدأ رحلتك في التجارة الإلكترونية بسهولة مع نظام SBYP المتكامل!
        </h1>
        <p className="text-gray-500 mt-4 w-4/5 text-sm lg:text-md">
         خلال منصة سبايب يمكنك ربط متجرك الالكتروني بالعديد من الموردين وإضافة منتجاتهم بغضطة زر والانطلاق للتسويق لمتجرك
        </p>
        <div className="relative mt-6 flex flex-col lg:flex-row items-center  justify-center lg:justify-start w-4/5">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="border border-gray-300 p-2 lg:p-4 rounded-md w-full lg:mr-4 mb-2 lg:mb-4  stroke-menu"
          />
          <button className="lg:absolute bg-menu lg:left-2 lg:top-2 text-white text-sm md:text-md  px-8 lg:px-6 py-2 lg:py-3 rounded-md hover:bg-main mb-1 ">
            ابدأ الآن
          </button>
        </div>
        <p className="text-gray-400 lg:mt-2 text-xs lg:mr-3 ">
          * لا تقلق، لن نقوم بنشر بريدك الإلكتروني.
        </p>
        <div className="mt-8 flex justify-start md:justify-start w-[90%] lg:w-2/3">
          <div className="text-center md:text-right">
            <p className="text-xl lg:text-4xl font-bold text-gray-900 mb-2">+350</p>
            <p className="text-gray-400 text-xs ">أكثر من 500 متجر الكتروني</p>
          </div>
          <div className="text-center md:text-right mr-8">
            <p className="text-xl lg:text-4xl font-bold text-gray-900 mb-2">4.8</p>
            <p className="text-gray-400 text-xs">
              التقييم على منصات التطبيقات المختلفة
            </p>
          </div>
        </div>
      </div>

      <div className="w-[95%] lg:w-1/2 flex justify-center relative  overflow-hidden md:overflow-visible">
        <img
          src={HeroPng}
          alt="رجل يحمل صناديق"
          className="rounded-lg min-w-64"
        />
        <div className="animate-bounce  absolute lg:flex flex justify-between items-center top-10 left-0 lg:left-10 bg-white p-2 rounded-lg shadow-lg w-32 lg:w-52">
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">الاجمالي</span>
            <p className="mt-2 text-xs ">450 رس</p>
          </div>

          <button className="bg-menu text-white px-4 py-[2px] rounded-full text-xs h-6">
            إرسال
          </button>
        </div>

        <div className="animate-bounce  absolute bottom-1 lg:bottom-10 left-6 lg:left-10 bg-white p-2 rounded-lg shadow-lg w-32">
          <p className="text-xs text-gray-300">الإيرادات</p>
          <div className="flex justify-between items-center">
            <p className=" mt-2 text-xs">5,000 رس</p>
            <img src={barChart} alt="" />
          </div>
        </div>
        <img src={Frame45}  className="absolute bottom-1 lg:bottom-[-1.5rem] right-1 lg:right-[-1rem] w-[25%] lg:w-[35%] bor"/>
        
      </div>
    </section>
  );
};

export default Hero;
