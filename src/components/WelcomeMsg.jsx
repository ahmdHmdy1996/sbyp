import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import WelcomImg from "/src/assets/Images/Frame-20.png"
import WellcomeHand from '/src/assets/Images/wellcome.png'
import { useSelector } from "react-redux";
import { t } from "i18next";
import { Link } from "react-router-dom";

const WelcomeMsg = () => {
  const {user} = useSelector((state)=>state.auth) ;
  
  
  return (
    <div className="relative col-span-3 lg:col-span-4  w-full m-auto">
      <img
        src={WelcomImg}
        alt=""
        className="min-h-[150px]  max-h-[300px]"
      />
      <div className="absolute top-1 right-4 lg:top-10 lg:right-10 flex items-center">
        <p className=" text-xl lg:text-4xl text-white">
          مرحبًا بعودتك , {user ? user.user_name || user.user.user_name : t("name")}
        </p>
        <img src={WellcomeHand} className="w-[60px]" />
      </div>
      <p className="absolute top-[3rem] right-3 lg:top-[6rem] lg:right-[2.5rem] text-sm text-white font-light">إجمالي معدل التحويلات 28.5%</p>
      <Link to='/dashboard/add-product' className="flex justify-between items-center bg-black w-48 py-3 rounded-full  px-3 absolute bottom-3 right-3 lg:bottom-12 lg:right-10 hover:bg-black/75">
        <span className=" mx-2 text-white">إضافة منتج جديد</span>
         <IoIosArrowBack className="w-8 h-8 bg-white rounded-full text-black "/>
      </Link>
    </div>
  );
};

export default WelcomeMsg;
