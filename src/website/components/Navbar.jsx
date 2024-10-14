import React from "react";
import logo from "/Images/logo.png";
const Navbar = () => {
  const borderStyle = "relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-menu after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
  return (
    <div className="flex justify-between items-center p-4 bg-white ">
      <div className="flex md:hidden">

      </div>

      <div className="hidden md:flex items-center space-x-8 space-x-reverse">
        <div className="flex items-center space-x-1">
          <img src={logo} alt="" className="max-w-20" />
        </div>
        <a href="#" className={`text-black font-semibold ${borderStyle}`}>
          كيف نعمل؟
        </a>
        <a href="#" className={`text-black font-semibold ${borderStyle}`}>
          مميزاتنا
        </a>
        <a href="#" className={`text-black font-semibold ${borderStyle}`}>
          آراء عملائنا
        </a>
        <a href="#" className={`text-black font-semibold ${borderStyle}`}>
          باقاتنا
        </a>
        <a href="#" className={`text-black font-semibold ${borderStyle}`}>
          تواصل معنا
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-8 space-x-reverse">
        <button className="bg-menu hover:bg-main text-white px-4 py-2 rounded">
          حساب جديد
        </button>
        <a href="/login" className="text-black">
          تسجيل الدخول
        </a>
      </div>
    </div>
  );
};

export default Navbar;
