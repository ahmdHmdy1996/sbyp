import React from "react";

import HeroPng from "/Images/Hero(2).png";
import barChart from "/Images/bar-chart-2 1.png";
import Frame45 from "/Images/Frame 45.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 ">
      <div className="md:w-1/2 text-center md:text-right md:mt-0 mr-2 ">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight  ">
          ابدأ رحلتك في التجارة الإلكترونية بسهولة مع نظام SBYP المتكامل!
        </h1>
        <p className="text-gray-500 mt-4 w-4/5 ">
          استمتع بالمرونة الكاملة في إدارة منتجاتك وطلبات عملائك مع SBYP. النظام
          الذي يمنحك كل ما تحتاجه لتنمية أعمالك بسرعة وفعالية.
        </p>
        <div className="relative mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start w-4/5">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="border border-gray-300 p-4 rounded-md w-full  md:mr-4 mb-4 md:mb-0"
          />
          <button className=" absolute bg-menu left-2 text-white px-6 py-2 rounded-md hover:bg-main">
            ابدأ الآن
          </button>
        </div>
        <p className="text-gray-500 mt-2 text-xs mr-3">
          * لا تقلق، لن نقوم بنشر بريدك الإلكتروني.
        </p>
        <div className="mt-8 flex justify-start md:justify-start w-2/3">
          <div className="text-center md:text-right">
            <p className="text-4xl font-bold text-gray-900 mb-2">+350</p>
            <p className="text-gray-400 ">أكثر من 500 شركة مدعومة من خلالنا</p>
          </div>
          <div className="text-center md:text-right mr-8">
            <p className="text-4xl font-bold text-gray-900 mb-2">4.8</p>
            <p className="text-gray-400 ">
              التقييم على منصات التطبيقات المختلفة
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        <img
          src={HeroPng}
          alt="امرأة تحمل صناديق"
          className="rounded-lg"
        />
        <div className="animate-bounce  absolute flex justify-between items-center top-10 left-10 bg-white p-2 rounded-lg shadow-lg w-52">
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">الاجمالي</span>
            <p className="mt-2">450 رس</p>
          </div>

          <button className="bg-menu text-white px-4 py-[2px] rounded-full text-xs h-6">
            إرسال
          </button>
        </div>

        <div className="animate-bounce  absolute bottom-10 left-10 bg-white p-2 rounded-lg shadow-lg w-32">
          <p className="text-xs text-gray-300">الإيرادات</p>
          <div className="flex justify-between items-center">
            <p className=" mt-2">5,000 رس</p>
            <img src={barChart} alt="" />
          </div>
        </div>
        <img src={Frame45}  className="absolute bottom-10 right-[-2.5rem]"/>
        
      </div>
    </div>
  );
};

export default Hero;
