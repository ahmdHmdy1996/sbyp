import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";





const MobileMenu = ({ open }) => {
    const { t } = useTranslation();
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 , y: -100 }}
          animate={{ opacity: 1 , y: 0}}
          exit={{ opacity: 0 ,y: -100}}
          transition={{duration: 0.3}}
          className={`absolute top-20 left-0 w-full h-screen z-20 ` }
        >
          <div className="text-xl font-semibold bg-menu text-white py-10 m-6 rounded-3xl  ">
            <ul className="flex flex-col justify-center items-center gap-10 cursor-pointer">
              <Link to="/dashboard">{t("Dashboards")}</Link>
              <Link to="/dashboard/products">{t("ProductsCatalog")}</Link>
              <Link to="/dashboard/my-products">{t("MyProducts")}</Link>
              <Link to="/dashboard/orders"> {t("Orders")}</Link>
              <Link to="/dashboard/subscription-plan">{t("SubscriptionPlan")}</Link>
              <Link to="/dashboard/wallet">{t("Wallet")}</Link>
              <Link to="/dashboard/integrations"> {t("Integrations")}</Link>
              <Link to="/dashboard/tickets">{t("MyTickets")}</Link>
              
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
