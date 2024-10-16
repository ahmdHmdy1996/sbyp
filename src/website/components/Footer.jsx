import React from "react";
import logo from "/Images/logo-white.png";
import linkedin from "/Images/akar-icons_linkedin-fill.png";
import twitter from "/Images/akar-icons_twitter-fill.png";
import instagram from "/Images/bx_bxl-instagram-alt.png";
import Pattern from "/Icons/Pattern.svg";
import mail from "/Icons/mail-1.svg";
import { Element } from "react-scroll";
const Footer = () => {
  return (
    <Element name="footer">
      <footer className="relative flex flex-col items-center justify-center  mt-12 bg-blue-900  text-white pt-16 pb-3 ">
        <img src={Pattern} alt="" className="absolute right-0" />
        <div className="w-4/5">
          <div className="grid  grid-col-1 lg:grid-cols-5 gap-20 text-center lg:text-start ">
            <div className="lg:col-span-2  ">
              <h2 className="text-xl font-bold mb-4 ">
                <img src={logo} alt="" className="max-w-20  m-auto lg:m-0" />
              </h2>
              <p className="mb-4 text-gray-300">
                نظام SBYP هو الحل المتكامل للتجارة الإلكترونية. يقدم لك أدوات
                مبتكرة لتحسين أداء متجرك، وزيادة المبيعات، وتسهيل إدارة العمليات
                بكل يسر وفعالية.
              </p>
              <div className="flex justify-center lg:justify-start items-center text-gray-300">
                <img src={mail} alt="" className="" />
                <p className="lg:mr-2 ">info@sbyb.com</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">القائمة</h2>
              <ul className="text-md text-gray-300">
                <li className="mb-2 ">
                  <a href="#">كيف نعمل؟</a>
                </li>
                <li className="mb-2">
                  <a href="#">مميزاتنا</a>
                </li>
                <li className="mb-2">
                  <a href="#">آراء عملائنا</a>
                </li>
                <li className="mb-2">
                  <a href="#">باقاتنا</a>
                </li>
                <li className="mb-2">
                  <a href="#">تواصل معنا</a>
                </li>
              </ul>
            </div>

            <div className="text-start mb-8 lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">انضم إلى مجتمعنا</h1>
              <p className="mb-6 text-gray-300">
                اشترك الآن لتكون جزءًا من مجتمعنا النابض بالحياة واستفد من أحدث
                التحديثات، والعروض الحصرية، ونصائح الخبراء التي ستساعدك على
                تحقيق أهدافك في التجارة الإلكترونية
              </p>
              <div className=" relative ">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="p-4 rounded-md border-none focus:outline-none w-full"
                />
                <button className="absolute bg-menu text-white py-2 px-8 rounded-md left-2 top-2">
                  ابدأ الآن
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full  mt-8 border-t border-gray-600 pt-4">
            <p className="text-sm text-gray-300">
              © SBYP 2024 جميع الحقوق محفوظة{" "}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#">
                <img src={linkedin} alt="" className="hover:scale-110" />
              </a>
              <a href="#">
                <img src={twitter} alt="" className="hover:scale-110" />
              </a>
              <a href="#">
                <img src={instagram} alt="" className="hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
