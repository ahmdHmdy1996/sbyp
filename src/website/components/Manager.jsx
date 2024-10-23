import React, { useState, useRef } from "react";
import Group1939 from "/src/assets/Images/Group1939.png";
import Group114 from "/src/assets/Images/Group114.png";
import Integrated from "/src/assets/Icons/Integrated.png";
import Sync from "/src/assets/Icons/Sync.png";
import support from "/src/assets/Icons/24-support.png";

const Manager = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 text-center lg:text-right">
      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-lg lg:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          اجعل تجارتك أكثر ذكاءً مع مميزاتنا المتطورة
        </h1>
        <div className="max-w-md mx-auto">
          {accordionItems.map((item, index) => (
            <div key={index} className={`mb-4 ${activeIndex === index ? "shadow-lg" : ""}`}>
              <button
                className="flex flex-col items-start py-4 px-4"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center ">
                  <img src={item.icon} alt="" className="ml-3" />
                  <span className="font-bold text-md lg:text-xl">{item.title}</span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-800 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  <div className="py-4 px-8 text-start">
                    <p className="text-sm lg:text-xl">{item.content}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full    lg:w-1/2 p-4">
        <div className="absolute right-0  xs:right-2 sm:right-0 sm:top-10 lg:top-0 lg:right-0 text-sm w-40 md:w-56 lg:w-80 animate-bounce">
          <img src={Group114} alt="" />
        </div>
        <img
          src={Group1939}
          alt="رجل يستخدم جهاز مسح الباركود على صندوق"
          className="w-full "
        />
      </div>
    </div>
  );
};

export default Manager;