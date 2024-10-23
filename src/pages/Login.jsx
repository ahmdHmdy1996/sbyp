import React, { useEffect, useState } from "react";
import Linked from "/src/assets/Images/linkedin-sales.png";
import logo from "/src/assets/Images/logo-white (2).png";
import eye from "/src/assets/Icons/eye.png";
import eyeSlash from "/src/assets/Icons/eye-slash.png";
import { motion } from "framer-motion";
import externalImageUrl from "/src/assets/Images/Rectangle2757.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducer/authSlice";
import { toast, ToastContainer } from "react-toastify";
import logoo from "/src/assets/Images/logo.png";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [identifier, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibale, setVisibale] = useState(false);

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const lang = "ar";
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      return toast.error("كل الخانات مطلوبة");
    }
    if (password < 8) {
      return toast.error("الباسورد اكثر من 7 حروف او ارقام");
    }

    dispatch(login({ identifier, password, lang }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast("login Success");
    }
    if (isAuthenticated) {
      navigate("/dashboard");
    }
    if (error) {
      toast.error(error);
    }
    if (loading) {
      toast.info(loading);
    }
  }, [error, isAuthenticated, navigate]);

  return (
    <div className="flex max-h-screen min-h-screen  ">
      <ToastContainer />
      <div className="w-2/3 relative hidden lg:block ">
        <img
          src={Linked}
          alt="A man and a woman working together in a flower shop, scanning a package"
          className="w-full h-full object-cover mb-4 "
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="absolute  bottom-8 w-[90%] h-44 m-auto left-0 right-0  bg-pattern p-6 text-white rounded-xl"
          style={{ backgroundImage: "url(" + externalImageUrl + ")" }}
        >
          <motion.h2
            variants={item}
            className="text-lg font-bold mb-4 bg-menu inline-block p-3  rounded-lg"
          >
            أفضل نظام لتقديم متجرك في العالم العربي
          </motion.h2>
          <motion.p variants={item}>
            مرحباً بك في نظام SBYP المتكامل! نقدم لك حلًا مبتكرًا للتجارة
            الإلكترونية , يتيح لك إدارة متجرك بسهولة واحترافية. يمكنك توسيع نطاق
            أعمالك بسرعة والاتصال بموردين عالميين. ابدأ اليوم في بناء عملك
            الرقمي بمرونة وكفاءة.
          </motion.p>
        </motion.div>
        <Link to="/" className="hidden lg:block absolute right-5 top-5">
          <img src={logo} className="max-w-20" />
        </Link>
      </div>
      <div className="w-[95%] lg:w-1/3 bg-white flex flex-col justify-center items-center py-6 px-4 m-auto">
        <Link to="/" className="lg:hidden absolute right-5 top-5">
          <img src={logoo} className="max-w-20" />
        </Link>
        <div className="w-full max-w-sm mt-20 ">
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
                autoComplete="email" // Add autocomplete attribute
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <label className="block text-gray-700">كلمة المرور</label>
            <div className="relative mt-0">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="current-password"
                autocomplete="current-password"
                type={visibale ? "text" : "password"}
                placeholder="كلمة المرور"
                className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div
                className="p-2 absolute left-1 top-1"
                onClick={() => setVisibale(!visibale)}
              >
                {visibale ? <img src={eye} /> : <img src={eyeSlash} />}
              </div>
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
              ليس لديك حساب؟
              <Link to="/register" className="text-menu">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
