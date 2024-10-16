import React, { useState } from "react";
import logo from "/Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMen";
import { MdMenu } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { logout } from "../../redux/reducer/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = localStorage.getItem("language");

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login", { replace: true }); // Redirect to login page
  };

  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const borderStyle =
    "relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-menu after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right";

  return (
    <nav className="flex justify-between items-center p-4 bg-white mx-16 m-auto">
      <div className="flex md:hidden justify-between w-full">
        <MdMenu
          className="text-4xl cursor-pointer bg-menu text-white p-1 rounded-xl "
          onClick={() => setOpen(!open)}
        />
        <MobileMenu open={open} />
        <img src={logo} alt="" className="max-w-20" />
      </div>

      <div className="hidden md:flex items-center space-x-8 space-x-reverse ">
        <Link to="/" className="flex items-center space-x-1">
          <img src={logo} alt="" className="max-w-20" />
        </Link>
        <Scroll
          to="join"
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer text-black font-semibold ${borderStyle}`}
        >
          كيف نعمل؟
        </Scroll>
        <Scroll
          to="partner"
          className={`cursor-pointer text-black font-semibold ${borderStyle}`}
        >
          مميزاتنا
        </Scroll>
        <Scroll
          to="testimonials"
          className={`cursor-pointer text-black font-semibold ${borderStyle}`}
        >
          آراء عملائنا
        </Scroll>
        <Link
          to="/subscription"
          className={`text-black font-semibold ${borderStyle}`}
        >
          باقاتنا
        </Link>
        <Scroll
          to="footer"
          className={`cursor-pointer text-black font-semibold ${borderStyle}`}
        >
          تواصل معنا
        </Scroll>
      </div>
      <div className="hidden md:flex items-center space-x-8 space-x-reverse">
        {user ? (
          <>
          <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ">
            Dashboard 
          </Link>
            <div
              className={`hidden  w-[13rem] h-[3rem] rounded-full text-white bg-menu lg:flex relative justify-center items-center content-center ${
                language == "en" ? "pl-5 ml-3" : "pr-5 mr-3"
              } `}
            >
              <img
                className={`${
                  language == "en" ? "left-0" : "right-0"
                }  absolute  h-[3rem] `}
                src="/Avatar.png"
                alt="avatar"
              />
              <span>{user ? user.user_name : t("name")}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-md   hover:bg-red-800 transition duration-300"
            >
              Logout
            </button>
            
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="bg-menu hover:bg-main text-white px-4 py-2 rounded"
            >
              حساب جديد
            </Link>
            <Link to="/login" className="text-black">
              تسجيل الدخول
            </Link>
          </>
        )}
        {/* <Link
          to="/register"
          className="bg-menu hover:bg-main text-white px-4 py-2 rounded"
        >
          حساب جديد
        </Link>
        <Link to="/login" className="text-black">
          تسجيل الدخول
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
