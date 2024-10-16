import React from "react";
import Receipt from "../../public/Icons/receipt.svg"
import Tags from "../../public/Icons/tags.svg"
import TruckTime from "../../public/Icons/truck-time.svg"
import Shop from "../../public/Icons/shop.svg"
import TickCircle from "../../public/Icons/tick-circle.svg"
import Frame93 from "../../public/Images/Frame93.png"


const Product = ({item}) => {
  return (
    <div className="bg-white rounded-3xl p-4 max-w-[350px] m-4">
      <div className="flex flex-col justify-center ">
        <div className="relative">
          <span className="absolute bg-yellow/65 text-white px-8 py-2 rounded-full left-4 top-4 ">
            جديد
          </span>
          <img className="rounded-3xl mb-2" src={item.image} />
          <span className="absolute bg-yellow/65 text-white px-8 py-2 rounded-full right-4 bottom-5 flex">
          <img src={Receipt} className="w-4 mx-1"/>
            بدون ضريبة
          </span>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-3">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <span className="text-xl font-bold"> {item.price} $</span>
        </div>
        <div className="flex justify-between text-gray-400 my-4">
          <div className="flex">
            <img src={Tags} alt="" className="w-5 mx-1"/>
            <p>{item.category}</p>
          </div>
          <div className="flex ">
            <img src={TruckTime} className="w-4 mx-1" />
            <p className="mx-1">3.8</p>
            <p>أيام </p>
          </div>
          <div className="flex ">
            <img src={Shop} alt="" className="w-5 mx-1" />
            <p>{item.quantity} قطع</p>
          </div>
        </div>
        <div className="flex justify-between align-center items-center border border-gray-300 rounded-full px-3 text-menu">
          <div className="flex  align-center items-center ">
            <img src={TickCircle} alt="" className="w-4 p-0 mx-1" />
            <p>مورد مضمون</p>
          </div>
          <img className="max-w-[70px]" src="/Alibaba-Logo.png" alt="" />
        </div>
        <button className="bg-menu mt-4 text-white py-2 px-4 rounded-full w-[98%] m-auto hover:scale-110">إضافة</button>
      </div>
    </div>
  );
};

export default Product;
