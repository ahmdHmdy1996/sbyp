import React, { useState } from "react";
import Group1939 from "/Images/Group1939.png";
import Group114 from "/Images/Group114.png";
import Integrated from "/Icons/Integrated.png";
import Sync from "/Icons/Sync.png";
import support from "/Icons/24-support.png";

const Manager = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "إدارة شاملة وسهلة",
      content:
        "يتيح لك نظامنا إدارة متجرك الإلكتروني بكل سهولة من خلال واجهة مستخدم بسيطة ومرنة. يمكنك إضافة منتجات، تتبع الطلبات، وتحليل الأداء بسرعة وكفاءة، مما يوفر لك الوقت للتركيز على استراتيجيات النمو.",
      icon: Integrated,
    },
    {
      title: "تحليلات دقيقة لرؤية متكاملة",
      content:
        "يوفر نظامنا تقارير وتحليلات شاملة لمبيعاتك وأداء المنتجات في الوقت الحقيقي. يمكنك الاطلاع على البيانات الحيوية وفهم سلوك العملاء، مما يساعدك في اتخاذ قرارات استراتيجية مدروسة لتحسين أداء متجرك وزيادة الأرباح.",
      icon: Sync,
    },
    {
      title: "تواصل مستمر لتوفير دعم شامل",
      content:
        "نحن نقدم دعمًا فنيًا على مدار الساعة لمساعدتك في أي استفسارات أو مشكلات قد تواجهها. فريقنا المخصص جاهز لتقديم المشورة والمساعدة، مما يضمن لك تجربة سلسة وناجحة في إدارة متجرك الإلكتروني.",
      icon: support,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 text-center lg:text-right">
      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          اجعل تجارتك أكثر ذكاءً مع مميزاتنا المتطورة
        </h1>
        <div className="max-w-md mx-auto">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`mb-4	${activeIndex === index ? "shadow-lg" : ""} `}
            >
              <button
                className={`flex flex-col items-start  py-4 px-4  ${
                  activeIndex === index ? "" : ""
                }  `}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center ">
                  <img src={item.icon} alt="" className="ml-3 " />
                  <span className="font-bold text-xl">{item.title}</span>
                </div>

                {activeIndex === index && (
                  <div className="py-4 px-8 text-start">
                    <p>{item.content}</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
       
      </div>
      <div className="relative w-full md:w-1/2 p-4">
        <div className="absolute top-8 right-0  text-sm animate-bounce">
          <img src={Group114} alt="" />
        </div>
        <img
          src={Group1939}
          alt="رجل يستخدم جهاز مسح الباركود على صندوق"
          className="w-full  "
        />
      </div>
    </div>
  );
};

export default Manager;
