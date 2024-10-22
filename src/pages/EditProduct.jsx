import React, { useEffect, useState } from "react";
import { myProductArray } from "./MyProducts";
import { useLocation } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Vector from "/src/assets/Icons/Vector2.png";
import link from "/src/assets/Icons/link.svg";
import { productArray2 } from "./Products";

const label = { inputProps: { "aria-label": "Switch demo" } };

const EditProduct = () => {
  const { pathname } = useLocation();
  var id = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [product, setProduct] = useState("");

  useEffect(
    () => {
      myProductArray.map((item) => {
        if (item.code === id) {
          setProduct(item);
        }
      });
      productArray2.map((item) => {
        if (item.code === id) {
          setProduct(item);
        }
      });
    },
    { product }
  );

  console.log(product);

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 flex">
        <div className="w-2/3 pl-6">
          <h2 className="text-xl font-semibold mb-4">سعر المنتج</h2>
          <div className="border p-3 rounded-2xl">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">السعر الخاص</label>
                <input
                  type="text"
                  value="30"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  السعر على الموقع
                </label>
                <input
                  type="text"
                  value={product.price}
                  className="w-full border rounded-lg p-2"
                />
                <p className="text-red-500 text-sm mt-1">
                  اقل سعر للبيع 25 ر.س
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mb-4">
                <Switch {...label} />
                <label htmlFor="changeDescription" className="text-gray-700">
                  تم تغيير الوصف
                </label>
              </div>

              <div className="flex items-center mb-4">
                <Switch {...label} />
                <label htmlFor="changePrice" className="text-gray-700">
                  تغيير السعر
                </label>
              </div>
              <div className="flex items-center mb-4">
                <Switch {...label} />
                <label htmlFor="changeName" className="text-gray-700">
                  تغيير الإسم
                </label>
              </div>
            </div>
          </div>
          <h2 className="text-xl  my-6">تكاملات المنتج</h2>
          <div className="grid grid-cols-1 gap-4 border p-8">
            <div className="flex items-center justify-between">
              <div className="">
                <button className="bg-gray-200 px-2 py-3  rounded-lg ml-3">
                  <img src={Vector} alt="" />
                </button>
                <span className="text-gray-500">لم يتم الربط</span>
              </div>
              <img src={link} alt="" className="bg-green-100 p-2 rounded-md" />
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <button className="bg-gray-200 px-2 py-3  rounded-lg ml-3">
                  <img src={Vector} alt="" />
                </button>
                <span className="text-gray-500">لم يتم الربط</span>
              </div>
              <img src={link} alt="" className="bg-green-100 p-2 rounded-md" />
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <button className="bg-gray-200 px-2 py-3  rounded-lg ml-3">
                  <img src={Vector} alt="" />
                </button>
                <span className="text-gray-500">لم يتم الربط</span>
              </div>
              <img src={link} alt="" className="bg-green-100 p-2 rounded-md" />
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <button className="bg-gray-200 px-2 py-3  rounded-lg ml-3">
                  <img src={Vector} alt="" />
                </button>
                <span className="text-gray-500">لم يتم الربط</span>
              </div>
              <img src={link} alt="" className="bg-green-100 p-2 rounded-md" />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="border rounded-lg p-4 flex flex-col">
            <img
              src={product.image}
              alt="Product image"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">
              {product.pruductName}{" "}
            </h2>
            <p className="text-gray-500 mb-4">{product.code}</p>
            <p className="text-gray-500 mb-4">{product.caategory}</p>
          </div>
          <button className="bg-menu w-full py-2 text-white rounded-full mt-3">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
