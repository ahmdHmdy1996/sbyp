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
          <div className="text-xl font-semibold bg-menu text-white py-10 m-6 rounded-3xl  ">
            <ul className="flex flex-col justify-center items-center gap-10 cursor-pointer">
              <Scroll to="join">كيف نعمل؟</Scroll>
              <Scroll to="partner">مميزاتنا</Scroll>
              <Scroll to="testimonials">آراء عملائنا</Scroll>
              <Link to="/subscription"> باقاتنا</Link>
              <Scroll to="footer">تواصل معنا</Scroll>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
