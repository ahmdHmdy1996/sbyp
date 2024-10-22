import React from "react";
import Group28 from "/src/assets/Images/Group28.svg";
import Chart2 from "/src/assets/Icons/Chart2.svg";
import Rocket from "/src/assets/Icons/Rocket.svg";
import Security from "/src/assets/Icons/Security.svg";
import Dashboard from "/src/assets/Icons/Dashboard.svg";
import { Element } from "react-scroll";

const Partner = () => {
  return (
    <Element name="partner">
      <section className="lg:container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
          <div className="lg:w-1/2 my-8 lg:mt-0 flex justify-center relative">
            <img src={Group28} alt="" className="" />
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="text-md lg:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 !leading-normal ">
              شريكك المثالي في رحلة التجارة الإلكترونية 🛒
            </h1>
            <p className="text-sm lg:text-lg text-gray-400 mb-8">
              نظام SBYP هو شريكك المثالي في رحلة التجارة الإلكترونية. نقدم لك
              منصة متكاملة تجمع بين سهولة الاستخدام والمرونة في الإدارة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="flex flex-col items-center lg:items-start">
                <img src={Chart2} alt="" className="mb-4" />
                <div>
                  <h2 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
                    سهولة الاستخدام
                  </h2>
                  <p className="text-gray-400 text-sm">
                    نظام SBYP يتيح لك إدارة متجرك دون الحاجة إلى خبرة تقنية.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  items-center lg:items-start">
                <img src={Rocket} alt="" className="mb-4" />
                <div>
                  <h2 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
                    تحليلات دقيقة وفعالة
                  </h2>
                  <p className="text-gray-400 text-sm">
                    تحليلات شاملة لمبيعاتك و أداء منتجاتك، مما يمكنك من اتخاذ
                    قرارات مستنيرة.
                  </p>
                </div>
              </div>

              <div className="flex flex-col  items-center lg:items-start">
                <img src={Security} alt="" className="mb-4" />
                <div>
                  <h2 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
                    ربط سهل مع التطبيقات
                  </h2>
                  <p className="text-gray-400 text-sm">
                    يمكنك ربط نظام SBYP بسهولة مع مجموعة متنوعة من التطبيقات
                    والأدوات ، مما يعزز من كفاءة إدارة متجرك.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  items-center lg:items-start">
                <img src={Dashboard} alt="" className="mb-4" />
                <div>
                  <h2 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
                    دعم فني متواصل
                  </h2>
                  <p className="text-gray-400 text-sm">
                    نحن هنا لدعمك على مدار الساعة ، اختر SBYP لتتمتع بطمأنينة في
                    رحلتك , فنحن شريكك في كل خطوة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Partner;
