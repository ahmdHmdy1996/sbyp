import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import deviceLaptop from "/src/assets/Icons/device-laptop.svg";
import edit from "/src/assets/Icons/edit.svg";
import Shopping from "/src/assets/Icons/shopping-bag.svg";
import trash from "/src/assets/Icons/trash.svg";
import oneplusPro from "/src/assets/Images/oneplus-7pro.png";
import magicMouse from "/src/assets/Images/magic-mouse.png";
import { Link } from "react-router-dom";
import Trolley from "/src/assets/Icons/trolley-01.png";
import axios from "axios";
import { ToastContainer } from "react-toastify";


  
    // pruductName: "اسم المنتج",
    // brand: "العلامة التجاريه",
    // caategory: "الكترونيات",
    // icon: deviceLaptop,
    // code: "238474",
    // price: "999",
    // quantity: "25",
    // status: "منشور",
    // statusType: "publish",
    // image: oneplusPro,
  
const Addedproducts = () => {
  const [productArray ,setProduct] = useState([])
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://back.sbyp-sa.com/api/products", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const language = localStorage.getItem("language");
  return (
    <div>
       <ToastContainer/>
      <div className="flex justify-between align-center items-center my-3">
        <h3 className="text-2xl font-bold"> منتجات مضافة</h3>
        <div className="flex justify-center">
          <Link
            to="/dashboard/add-product"
            className="bg-menu text-white text-gray-500 rounded-full  px-3 py-3 mx-3 flex min-w-32 hover:bg-hover"
          >
            <img src={Trolley} alt="" />
            <p className="mx-2">إضافة منتج </p>
          </Link>
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
      </div>
      <div className="bg-white py-4 px-2 rounded-2xl">
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
          <tbody className="text-start ">
            {productArray?.map((item,index) => (
              <tr key={index} className="border-t text-start">
                <td className="py-2">
                  <input type="checkbox" />
                </td>
                <td className="py-2 flex items-center ">
                  <img
                    src={"/src/assets/Images/product.jpg"}
                    alt={item.ar_title}
                    className="w-7 h-7 rounded-full ml-2"
                  />
                  <div className="flex flex-col">
                    <span>{item.ar_title}</span>
                    <span className="text-gray-300">{item.brand}</span>
                  </div>
                </td>

                <td className="py-2 ">
                  <div className="flex">
                    {/* <img
                      src={"/src/assets/Images/product.jpg"}
                      alt={item.category_ar_title}
                      className="w-7 h-7 rounded-full ml-2"
                    /> */}
                    <span>{item.category_ar_title}</span>
                  </div>
                </td>
                <td>{item.barcode}</td>
                <td>
                  {item.sale_price} {t("curr")}
                </td>
                <td>{item.stock}</td>
                <td className="py-2">
                  جديد
                    {/* <span
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
                    </span> */}
                </td>
                <td>
                  <div className="flex justify-around">
                    {/* <Link to={`/dashboard/my-product/${}`}> */}
                      <img src={edit} alt="" />
                    {/* </Link> */}
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

export default Addedproducts;
