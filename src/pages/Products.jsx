import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useTranslation } from "react-i18next";
import Frame91 from "/src/assets/Images/Frame91.png";
import Frame92 from "/src/assets/Images/Frame92.png";
import Frame93 from "/src/assets/Images/Frame93.png";
import Frame94 from "/src/assets/Images/Frame94.png";
import Frame95 from "/src/assets/Images/Frame95.png";
import Frame96 from "/src/assets/Images/Frame96.png";
import Frame97 from "/src/assets/Images/Frame97.png";
import FilterProduct from "../components/FilterProduct";
import axios from "axios";

export const productArray2 = [
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame91,
    quantity: "8",
    stock: "50",
  },
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame92,
    quantity: "8",
    stock: "200",
  },
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame93,
    quantity: "8",
    stock: "100",
  },
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame94,
    quantity: "8",
    stock: "76",
  },
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame95,
    quantity: "8",
    stock: "66",
  },
  {
    ar_title: "أسم المنتج",
    sale_price: 150,
    category_ar_title: "اسم التصنيف",
    main_image: Frame96,
    quantity: "8",
    stock: "444",
  },
  
];

const Products = () => {
  const [Filter, setFilter] = useState(false);
  const [productArray ,setProduct] = useState([])

  const openFilter = () => {
    setFilter(!Filter);
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }

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
  }, [i18n]);
  console.log(productArray);
  
  const language = localStorage.getItem("language");
  return (
    <div className="grid grid-cols-4">
      <div className={` ${Filter ? "col-span-3" : "col-span-4"} `}>
        {/* title */}
        <div className="flex justify-between align-center items-center my-3">
          <h3 className="text-2xl font-bold"> كتالوج المنتجات</h3>
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
                placeholder="ابحث عن منتجات"
                required
              />
            </div>

            <button
              onClick={openFilter}
              className=" bg-white text-gray-500 rounded-full  p-3  mx-3"
            >
              <img src="/src/assets/Icons/setting-5.svg" alt="" />
            </button>
          </div>
        </div>

        {/* products catalog */}
        <div className={`grid  ${Filter ? "grid-cols-2" : "place-items-center lg:place-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}  `}>
          {productArray2.map((item, index) => (
            <>
              <Product item={item} key={index} />
            </>
          ))}
          {productArray.map((item, index) => (
            <>
          
              <Product item={item} key={index} />
            </>
          ))}
        </div>
      </div>
      <div className={`${Filter ? "col-span-1" : ""}`}>
        {Filter && <FilterProduct />}
      </div>
    </div>
  );
};

export default Products;
