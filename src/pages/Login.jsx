import React from "react";
import Linked from "/Images/linkedin-sales.png";

const Login = () => {
  return (
    <div className="flex max-h-screen">
      <div className="w-1/2 relative">
        <img
          src={Linked}
          alt="A man and a woman working together in a flower shop, scanning a package"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h2 className="text-lg font-bold mb-2">
            أفضل نظام لتقديم متجرك في العالم العربي
          </h2>
          <p>
            مرحباً بك في نظام SBYP المتكامل! نقدم لك هذا المتجر الإلكتروني لبيع
            إدارة متجرك بسهولة واحترافية. يمكنك توسيع نطاق أعمالك بسرعة والاتصال
            بموردين عالميين. ابدأ اليوم في بناء عملك الرقمي بمرونة وكفاءة.
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4"> مرحباً بعودتك!</h1>
          <p className="text-gray-600 mb-6">تسجيل دخولك للمتابعة إلى حسابك.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">كلمة المرور</label>
              <input
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
              <a href="#" className="text-purple-600">
                نسيت كلمة المرور؟
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              تسجيل الدخول
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{" "}
              <a href="#" className="text-purple-600">
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
