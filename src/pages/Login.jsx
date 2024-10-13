import React, { useState } from "react";
import Linked from "/Images/linkedin-sales.png";
import logo from "/Images/logo-white.png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="flex max-h-screen min-h-screen">
      <div className="w-2/3 relative">
        <img
          src={Linked}
          alt="A man and a woman working together in a flower shop, scanning a package"
          className="w-full h-full object-cover mb-4"
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 w-[90%] h-44 m-auto left-0 right-0  bg-pattern p-6 text-white rounded-xl"
        >
          <motion.h2 variants={item} className="text-lg font-bold mb-4 bg-menu inline-block p-3  rounded-lg">
            أفضل نظام لتقديم متجرك في العالم العربي
          </motion.h2>
          <motion.p variants={item}>
            مرحباً بك في نظام SBYP المتكامل! نقدم لك حلًا مبتكرًا للتجارة
            الإلكترونية , يتيح لك إدارة متجرك بسهولة واحترافية. يمكنك توسيع نطاق
            أعمالك بسرعة والاتصال بموردين عالميين. ابدأ اليوم في بناء عملك
            الرقمي بمرونة وكفاءة.
          </motion.p>
        </motion.div>
        <div className="absolute right-5 top-5">
          <img src={logo} className="max-w-20" />
        </div>
      </div>
      <div className="w-1/3 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4"> مرحباً بعودتك!</h1>
          <p className="text-gray-500 mb-6">تسجيل دخولك للمتابعة إلى حسابك.</p>
          <form className="space-y-4" onSubmit={HandleSubmit}>
            <div>
              <label className="block text-gray-700">البريد الإلكتروني</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">كلمة المرور</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="current-password"
                autocomplete="current-password"
                type="password"
                placeholder="كلمة المرور"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-600"
                />
                <span className="ml-2 text-gray-700">تذكرني</span>
              </label>
              <a href="#" className="text-menu">
                نسيت كلمة المرور؟
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-menu text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              تسجيل الدخول
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{" "}
              <a href="#" className="text-menu">
                إنشاء حساب جديد
              </a>
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-600">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
