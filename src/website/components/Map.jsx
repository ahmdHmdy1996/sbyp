import React from "react";
import MapImg from "/Icons/Map.svg";
const Map = () => {
  return (
    <section className=" p-8 text-center">
      <h2 className="text-sm text-menu mb-2">رحلة نمو مذهلة</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        شاهد كيف يتوسع تأثير SBYP على مستوى العالم
      </h1>
      <div className="relative mb-5">
        <img
          src={MapImg}
          alt="خريطة العالم بنمط نقطي"
          className="w-82 h-auto mx-auto"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-gray-900 text-start px-6 gap-8">
        <div >
          <p className="text-3xl font-bold">10,000+</p>
          <p className="text-sm mt-2 text-gray-400 px-1">منتج إلكتروني يدعمه نظامنا حول العالم</p>
        </div>
        <div >
          <p className="text-3xl font-bold">35%+</p>
          <p className="text-sm mt-2 text-gray-400 px-1">
            زيادة في مبيعات المستخدمين خلال أول 6 أشهر من استخدام النظام
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">50+</p>
          <p className="text-sm mt-2 text-gray-400 px-1">
            دولة تواجدنا فيما حول العالم، مما يمنح الفرصة للوصول إلى عملاء جدد.
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">95%+</p>
          <p className="text-sm mt-2 text-gray-400 px-1">رضا العملاء عن خدمات الدعم الفني لدينا</p>
        </div>
      </div>
    </section>
  );
};

export default Map;
