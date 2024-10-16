import React, { useEffect, useState } from "react";
import Linked from "/Images/Group441.png";
import logo from "/Images/logo-white.png";
import eye from "/Icons/eye.png";
import eyeSlash from "/Icons/eye-slash.png";
import { motion } from "framer-motion";
import externalImageUrl from "/Images/Rectangle2757.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/reducer/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user_name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibale, setVisibale] = useState(false);
  const full_name = "seller1";
  const lang = "ar";
  const { loading, error, user } = useSelector((state) => state.auth);

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ user_name, email, password, phone, full_name, lang }));
  };

  return (
    <div className="flex max-h-screen min-h-screen">
      <ToastContainer />

      <div className="w-0 lg:w-4/6 relative">
        <img
          src={Linked}
          alt="A man and a woman working together in a flower shop, scanning a package"
          className="w-full h-full object-cover mb-4"
        />

        <Link to="/" className="absolute right-5 top-5">
          <img src={logo} className="max-w-20" />
        </Link>
      </div>
      <div className="w-full lg:w-2/6 bg-white flex flex-col justify-center items-center my-20">
        <div className="w-full max-w-sm">
          <h1 className="text-xl font-bold mb-2"> مرحبًا بك في SBYP! 🎉</h1>
          <p className="text-sm text-gray-500 mb-6">
            اجعل التحكم في متجرك اسهل واسرع واكثر فاعلية.{" "}
          </p>
          <form className="space-y-4" onSubmit={HandleSubmit}>
            <div>
              <label className="block text-gray-500 text-sm">الأسم </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="أدخل الأسم بالكامل"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-menu"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm">الجوال</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="phone"
                id="phone"
                placeholder="أدخل رقم الجوال"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">
                البريد الإلكتروني
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <label className="block text-gray-500 text-sm">كلمة المرور</label>
            <div className="relative !mt-0 ">
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
                <input type="checkbox" className="form-checkbox text-menu" />
                <span className="mr-2 text-gray-500 text-sm">
                  أوافق على إتفاقيةالاستخدام وسياسة الخصوصية
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-menu text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              إنشاء حساب جديد{" "}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              لديك حساب؟
              <Link to="/login" className="text-menu">
                تسجيل الدخول
              </Link>
            </p>
          </div>
          {error && <p>{error}</p>}
          {loading && <p>Loading...</p>}
          {user && <p>Registration Successful</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
