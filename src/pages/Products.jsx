import React, { useEffect } from "react";
import Product from "../components/Product";
import { useTranslation } from "react-i18next";
import Frame91 from "/src/assets/Images/Frame91.png";
import Frame92 from "/src/assets/Images/Frame92.png";
import Frame93 from "/src/assets/Images/Frame93.png";
import Frame94 from "/src/assets/Images/Frame94.png";
import Frame95 from "/src/assets/Images/Frame95.png";
import Frame96 from "/src/assets/Images/Frame96.png";
import Frame97 from "/src/assets/Images/Frame97.png";

const productArray = [
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame91,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame92,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame93,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame94,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame95,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame96,
    quantity: "8",
  },
  {
    name: "أسم المنتج",
    price: 150,
    category: "اسم التصنيف",
    image: Frame97,
    quantity: "8",
  },
];

const Products = () => {
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
    <div className="flex flex-col ">
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
          <div className=" bg-white text-gray-500 rounded-full  px-3 py-3 mx-3">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5094 8.25078C19.0094 8.25078 19.4094 7.85078 19.4094 7.35078V2.70078C19.4094 2.20078 19.0094 1.80078 18.5094 1.80078C18.0094 1.80078 17.6094 2.20078 17.6094 2.70078V7.35078C17.6094 7.84078 18.0194 8.25078 18.5094 8.25078Z"
                fill="#292D32"
              />
              <path
                d="M11.9996 15.75C11.4996 15.75 11.0996 16.15 11.0996 16.65V21.3C11.0996 21.8 11.4996 22.2 11.9996 22.2C12.4996 22.2 12.8996 21.8 12.8996 21.3V16.65C12.8996 16.16 12.4996 15.75 11.9996 15.75Z"
                fill="#292D32"
              />
              <path
                d="M5.48984 8.25078C5.98984 8.25078 6.38984 7.85078 6.38984 7.35078V2.70078C6.38984 2.20078 5.98984 1.80078 5.48984 1.80078C4.98984 1.80078 4.58984 2.20078 4.58984 2.70078V7.35078C4.58984 7.84078 4.98984 8.25078 5.48984 8.25078Z"
                fill="#292D32"
              />
              <path
                d="M7.35047 10.1719H3.63047C3.13047 10.1719 2.73047 10.5719 2.73047 11.0719C2.73047 11.5719 3.13047 11.9719 3.63047 11.9719H4.59047V21.3019C4.59047 21.8019 4.99047 22.2019 5.49047 22.2019C5.99047 22.2019 6.39047 21.8019 6.39047 21.3019V11.9719H7.35047C7.85047 11.9719 8.25047 11.5719 8.25047 11.0719C8.25047 10.5719 7.84047 10.1719 7.35047 10.1719Z"
                fill="#292D32"
              />
              <path
                d="M20.37 10.1719H16.65C16.15 10.1719 15.75 10.5719 15.75 11.0719C15.75 11.5719 16.15 11.9719 16.65 11.9719H17.61V21.3019C17.61 21.8019 18.01 22.2019 18.51 22.2019C19.01 22.2019 19.41 21.8019 19.41 21.3019V11.9719H20.37C20.87 11.9719 21.27 11.5719 21.27 11.0719C21.27 10.5719 20.87 10.1719 20.37 10.1719Z"
                fill="#292D32"
              />
              <path
                d="M13.8602 12.0308H12.9002V2.70078C12.9002 2.20078 12.5002 1.80078 12.0002 1.80078C11.5002 1.80078 11.1002 2.20078 11.1002 2.70078V12.0308H10.1402C9.64023 12.0308 9.24023 12.4308 9.24023 12.9308C9.24023 13.4308 9.64023 13.8308 10.1402 13.8308H13.8602C14.3602 13.8308 14.7602 13.4308 14.7602 12.9308C14.7602 12.4308 14.3602 12.0308 13.8602 12.0308Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* products catalog */}
      <div className="grid grid-cols-3">
        {productArray.map((item,index) => (
          <Product item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
