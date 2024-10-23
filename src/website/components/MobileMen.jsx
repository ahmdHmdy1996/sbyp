import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as Scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/authSlice";

const MobileMenu = ({ open, onClose }) => {
  const [token, setToken] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference for the menu

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login", { replace: true }); // Redirect to login page
  };

  useEffect(() => {
    const localtoken = localStorage.getItem("token");

    if (localtoken) {
      setToken(localtoken);
    }
  }, []);

  // Function to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Close the menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const { t } = useTranslation();
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 left-0 w-full h-screen z-20"
        >
          <div ref={menuRef} className="text-xl font-semibold text-white my-8 rounded-3xl">
            <ul className="flex flex-col justify-center p-6 items-center gap-10 cursor-pointer bg-menu">
              <Scroll className="hover:scale-120" to="join" smooth={true} duration={500}>
                كيف نعمل؟
              </Scroll>
              <Scroll to="partner" smooth={true} duration={500}>
                مميزاتنا
              </Scroll>
              <Scroll to="testimonials" smooth={true} duration={500}>
                آراء عملائنا
              </Scroll>
              <Link to="/subscription">باقاتنا</Link>
              <Scroll to="footer" smooth={true} duration={500}>
                تواصل معنا
              </Scroll>
            </ul>
            {token && (
              <button onClick={handleLogout} className="w-full h-16 bg-red-500">
                تسجيل الخروج
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
