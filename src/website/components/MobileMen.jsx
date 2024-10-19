import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

const MobileMenu = ({ open }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-20 left-0 w-full h-screen z-20 `}
        >
          <div className="text-xl font-semibold  text-white py-10  rounded-3xl  ">
            <ul className="flex flex-col justify-center p-6 items-center gap-10 cursor-pointer bg-menu  ">
              <Scroll className="hover:scale-120" to="join">كيف نعمل؟</Scroll>
              <Scroll to="partner">مميزاتنا</Scroll>
              <Scroll to="testimonials">آراء عملائنا</Scroll>
              <Link to="/subscription"> باقاتنا</Link>
              <Scroll to="footer">تواصل معنا</Scroll>
            </ul>
            <button className="w-full h-16  bg-red-500">تسجيل الخروج</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
