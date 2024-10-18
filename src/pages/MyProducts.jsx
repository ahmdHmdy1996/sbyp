import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import DotVetrical from "/src/assets/Icons/dots-vertical.svg";
import deviceLaptop from "/src/assets/Icons/device-laptop.svg";
import edit from "/src/assets/Icons/edit.svg";
import Shopping from "/src/assets/Icons/shopping-bag.svg";
import trash from "/src/assets/Icons/trash.svg";
import oneplusPro from "/src/assets/Images/oneplus-7pro.png";
import magicMouse from "/src/assets/Images/magic-mouse.png";
import { Link } from "react-router-dom";

export const Array = [
  {
    pruductName: "اسم المنتج",
    brand: "العلامة التجاريه",
    caategory: "الكترونيات",
    icon: deviceLaptop,
    code: "238474",
    price: "999",
    quantity: "25",
    status: "منشور",
    statusType: "publish",
    image: oneplusPro,
  },
  {
    pruductName: "Magic Mouse",
    brand: "Google",
    caategory: "الكترونيات",
    icon: deviceLaptop,
    code: "647838",
    price: "89",
    quantity: "12",
    status: "مجدول",
    statusType: "classified",
    image: magicMouse,
  },
];

const MyProducts = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  const language = localStorage.getItem("language");

  return (
    <div className="mt-5 ">
      <div className="flex  justify-between items-center mb-4">
        <h1 className="mt-4 font-bold text-xl">منتجاتي</h1>
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
            placeholder="ابحث عن منتجات"
            required
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl">
        <table className="w-full mb-5 ">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2">
                <input type="checkbox" />
              </th>
              <th className="py-2">المنتج</th>
              <th className="py-2">التصنيف</th>
              <th className="py-2">كود المنتج</th>
              <th className="py-2">السعر</th>
              <th className="py-2">الكمية</th>
              <th className="py-2">الحالة</th>
              <th className="py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="text-start">
            {Array.map((item) => (
              <tr key={item.pruductName} className="border-t text-start">
                <td className="py-2">
                  <input type="checkbox" />
                </td>
                <td className="py-2 flex items-center ">
                  <img
                    src={item.image}
                    alt={item.pruductName}
                    className="w-7 h-7 rounded-full ml-2"
                  />
                  <div className="flex flex-col">
                    <span>{item.pruductName}</span>
                    <span className="text-gray-300">{item.brand}</span>
                  </div>
                </td>

                <td className="py-2 ">
                  <div className="flex">
                    <img
                      src={item.icon}
                      alt={item.caategory}
                      className="w-7 h-7 rounded-full ml-2"
                    />
                    <span>{item.caategory}</span>
                  </div>
                </td>
                <td>{item.code}</td>
                <td>
                  {item.price} {t("curr")}
                </td>
                <td>{item.quantity}</td>
                <td className="py-2">
                  <span
                    className={`${
                      item.statusType == "publish"
                        ? "text-green-500 bg-green-100 p-2 rounded-md"
                        : ""
                    } ${
                      item.statusType == "classified"
                        ? "text-orange-500 bg-orange-100 p-2 rounded-md"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="flex justify-around">
                    <Link to={`/dashboard/my-product/${item.code}`}>
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

export default MyProducts;
