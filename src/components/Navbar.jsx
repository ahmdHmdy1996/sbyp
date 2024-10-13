import React, { useEffect, useState } from "react";
import { TbWallet } from "react-icons/tb";
import { MdOutlineTranslate } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  changeToArabic,
  changeToEnglish,
} from "../redux/reducer/languageSlice";
import MobileMenu from "./MobileMenu";
import { MdMenu } from "react-icons/md";
import { useLocation } from 'react-router-dom';




const Navbar = () => {
  const [open , setOpen] = useState(false)
  const {pathname} = useLocation()
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("language");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir =
      lng === "ar" ? dispatch(changeToArabic()) : dispatch(changeToEnglish());
    document.body.dir = lng === "ar" ? "rtl" : "ltr"; // Set direction
    localStorage.setItem("language", lng); // Store language in localStorage
    console.log(lang);
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  return (
    <nav
      className={`${pathname === '/login' ?"hidden" :"flex"} bg-home px-4 pb-5  flex-col lg:flex-row justify-between  items-center content-center  ${
        language == "en" ? "right-0" : "left-0"
      }`}
    >

     {/* Mobile Menu */}

      <div className="flex lg:hidden flex justify-between  w-full items-center mb-4">
        <MdMenu className="text-4xl cursor-pointer bg-menu text-white p-1 rounded-xl " onClick={()=>setOpen(!open)}/>
        <MobileMenu open={open}/>
        <div
          className={`flex  w-[11rem] h-[3rem] rounded-full text-white bg-menu  relative justify-center items-center content-center ${
            language == "en" ? "pl-5" : "pr-5"
          } `}
        >
          <img
            className={`${
              language == "en" ? "left-0" : "right-0"
            }  absolute  h-[3rem] `}
            src="/Avatar.png"
            alt="avatar"
          />
          <span>{t("name")}</span>
        </div>
      </div>

      <div className="flex w-full justify-between lg:justify-center">
        <form class="w-[50%] ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none ">
              <svg
                class="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#444050"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class={` border py-3  ${
                language == "en" ? "pl-12" : "pr-12"
              }  border-[#DADADA] rounded-full w-full`}
              placeholder={language == "en" ? "Search" : "بحث"}
              required
            />
          </div>
        </form>
        <ul
          className={`${
            language == "en" ? "lg:border-r" : "lg:border-l"
          } flex justify-center items-center content-center  lg:border-gray-300   `}
        >
          <li
            className={`border bg-white text-gray-400 rounded-full border-[#DADADA] relative pr-8 pl-3 py-2 cursor-pointer min-w-32 mx-2`}
          >
            {language == "en" ? "$" : "ر.س"} 50.00{" "}
            <TbWallet
              className={`absolute text-xl text-gray-500 right-2 top-3`}
            />
          </li>
          <li className="text-xl border bg-white text-gray-500 rounded-full border-[#DADADA] px-3 py-3 mx-3 cursor-pointer">
            <MdOutlineTranslate
              onClick={() =>
                document.body.dir === "rtl"
                  ? changeLanguage("en")
                  : changeLanguage("ar")
              }
            />
          </li>
          <li className="text-xl border bg-white text-gray-500 rounded-full border-[#DADADA] px-3 py-3 ">
            <AiOutlineShoppingCart />
          </li>
          <li className="text-xl border bg-white text-gray-500 rounded-full border-[#DADADA] px-3 py-3 mx-3">
            <HiOutlineBell />
          </li>
        </ul>
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
          <span>{t("name")}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
