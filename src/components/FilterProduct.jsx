import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const FilterProduct = () => {
  const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-4 border rounded-md p-2" >
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-semibold">{title}</h3>
          {isOpen ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
        </div>
        {isOpen && <div className="pr-4">{children}</div>}
      </div>
    );
  };
  return (
    <div className="max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">تصفية</h2>
        <a href="#" className="text-red-500">
          مسح الكل
        </a>
      </div>
      <Section title="الفئة" >
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> الكل
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> رجال
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" checked /> نساء
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> أطفال
        </label>
      </Section>
      <Section title="التصنيفات">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> الكل
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" checked /> ملابس رياضية
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> أحذية
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> ساعات
        </label>
      </Section>
      <Section title="العلامة التجارية">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> الكل
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> adidas
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> Nike
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> PUMA
        </label>
      </Section>
      <Section title="الألوان">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> الكل
        </label>
        <label className="block mb-2 flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
          <input type="checkbox" className="mr-2"  /> أخضر
        </label>
        <label className="block mb-2 flex items-center">
          <span className="w-3 h-3 bg-orange-500 rounded-full inline-block mr-2"></span>
          <input type="checkbox" className="mr-2" /> أصفر
        </label>
        <label className="block mb-2 flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></span>
          <input type="checkbox" className="mr-2" /> برتقالي
        </label>
      </Section>
      <Section title="الأسعار">
        <input
          type="range"
          min="50"
          max="1000"
          value="150"
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>50 ريال</span>
          <span>1000 ريال</span>
        </div>
      </Section>
      <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center mt-48">
        <i className="fas fa-filter ml-2"></i> تصفية المنتجات
      </button>
    </div>
  );
};

export default FilterProduct;
