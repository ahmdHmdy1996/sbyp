import React from "react";
import profile from "/Icons/Profile.png";
import profile1 from "/Icons/Profile1.png";
import profile2 from "/Icons/Profile2.png";
import { Element } from "react-scroll";
const Testimonials = () => {
  const TestimonialsArray = [
    {
      text: "كان قرار الانتقال إلى SBYB هو الأفضل بالنسبة لي. الدعم الفني متواصل، والإحصائيات الدقيقة ساعدتني في اتخاذ قرارات مستنيرة. أنا ممتن لفريق SBYB لمساعدتي في تعزيز أعمالي!",
      name: "رائد العلي",
      title: 'شريك في متجر "Furniture Hub"',
      img: profile,
      imgAlt: "صورة رائد العلي",
    },
    {
      text: "أحببت كيف ساعدني SBYB في ربط متجري بسهولة مع تطبيقات متعددة. النظام ليس فقط سهل الاستخدام، بل يوفر أيضًا دعمًا فنيًا رائعًا. أشعر بالثقة في قدرتي على توسيع نطاق أعمالي الآن!",
      name: "سارة محمود",
      title: "صاحبة متجر 'تسوقي'",
      img: profile1,
      imgAlt: "صورة سارة محمود",
    },
    {
      text: "استخدامي لنظام SBYB كان تجربة رائعة! واجهتي كانت سلسة، وسرعة التحليل وإمكانية الوصول إلى البيانات كانت مذهلة. لقد لاحظت زيادة ملحوظة في مبيعاتي خلال فترة قصيرة.",
      name: "أحمد مسعود",
      title: "صاحب متجر إلكتروني",
      img: profile2,
      imgAlt: "صورة أحمد مسعود",
    },
  ];
  return (
    <Element name="testimonials">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16">
          تجارب حقيقية تعكس قوة نظامنا
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {TestimonialsArray.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-400 mb-20">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.imgAlt}
                  className="w-12 h-12 rounded-full mx-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-menu">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Testimonials;
