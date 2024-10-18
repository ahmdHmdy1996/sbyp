import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import deviceLaptop from "/src/assets/Icons/device-laptop.svg";
import edit from "/src/assets/Icons/edit.svg";
import Shopping from "/src/assets/Icons/shopping-bag.svg";
import trash from "/src/assets/Icons/trash.svg";
import oneplusPro from "/src/assets/Images/oneplus-7pro.png";
import magicMouse from "/src/assets/Images/magic-mouse.png";
import { Link } from "react-router-dom";
import Trolley from "/src/assets/Icons/trolley-01.png";
import { useSelector } from "react-redux";

const Tickets = () => {
  const { user } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  const language = localStorage.getItem("language");

  const ticketsArray = [
    {
      ticketNumber: "#TICK001",
      ticketName: "اسم التذكرة",
      storeName: "اسم المتجر",
      errorType: " تصنيف المشكلة",
      status: "محلولة",
    },
    {
      ticketNumber: "#TICK002",
      ticketName: "اسم التذكرة",
      storeName: "اسم المتجر",
      errorType: " تصنيف المشكلة",
      status: "جديد",
    },
    {
      ticketNumber: "#TICK003",
      ticketName: "اسم التذكرة",

      storeName: "اسم المتجر",
      errorType: " تصنيف المشكلة",
      status: "بانتظار الرد",
    },
    {
      ticketNumber: "#TICK004",
      ticketName: "اسم التذكرة",
      storeName: "اسم المتجر",
      errorType: " تصنيف المشكلة",
      status: "بانتظار الرد",
    },
    {
      ticketNumber: "#TICK005",
      ticketName: "اسم التذكرة",
      storeName: "اسم المتجر",
      errorType: " تصنيف المشكلة",
      status: "مغلق",
    },
  ];

  return (
    <div>
      <div className="flex justify-between align-center items-center my-3">
        <h3 className="text-2xl font-bold"> التذاكر</h3>
        <div className="flex justify-center">
          <div className="relative">
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
              class={`${
                language == "en" ? "pl-12" : "pr-12"
              }   py-3  rounded-full w-[300px]`}
              placeholder="بحث..."
              required
            />
          </div>
          <Link
            to="/dashboard/add-ticket"
            className="bg-menu text-white text-3xl py-1 px-4 w-12 mx-2  rounded-full hover:bg-hover "
          >
           +
          </Link>
        </div>
      </div>
      <div className="bg-white py-4 px-2 rounded-2xl">
        <table className="w-full mb-5 ">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2">
                <input type="checkbox" />
              </th>
              <th className="py-2">رقم التذكرة</th>
              <th className="py-2">الاسم</th>
              <th className="py-2">اسم المتجر</th>
              <th className="py-2">تصنيف المشكلة</th>
              <th className="py-2">الحالة</th>
              <th className="py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="text-start ">
            {ticketsArray.map((item) => (
              <tr key={item.ticketNumber} className="border-t text-start">
                <td className="py-2">
                  <input type="checkbox" />
                </td>
                <td className="py-2 flex items-center ">
                  <span>{item.ticketName}</span>
                </td>
                <td>
                  <h3>
                    {user ? user.user_name || user.user.user_name : t("name")}
                  </h3>
                </td>
                <td className="py-2 ">
                  <span>{item.storeName}</span>
                </td>
                <td>{item.errorType}</td>
                <td className="py-2">
                  <span
                    className={`${
                      item.status == "محلولة"
                        ? "text-green-500 bg-green-100 py-1 px-3 rounded-md"
                        : ""
                    } ${
                      item.status == "جديد"
                        ? "text-menu bg-purple-100 py-1 px-3 rounded-md"
                        : ""
                    }  ${
                      item.status == "بانتظار الرد"
                        ? "text-cyan-500 bg-cyan-100 py-1 px-3 rounded-md"
                        : ""
                    }
                       ${
                         item.status == "مغلق"
                           ? "text-red-500 bg-red-100 py-1 px-3 rounded-md"
                           : ""
                       }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="flex justify-around">
                    <Link to={`/my-product/${item.code}`}>
                      <img src={edit} alt="" />
                    </Link>
                    <button>
                      <img src={Shopping} alt="" />
                    </button>
                    <button>
                      <img src={trash} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-8">
          <span className="text-sm text-gray-500">
            عرض 1 الى 7 من 10 منتجات
          </span>
          <div className="flex items-center space-x-2 space-x-reverse">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-500">
              «
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm bg-menu text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm ">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm ">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm ">
              4
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm ">
              5
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-500">
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
