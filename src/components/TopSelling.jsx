import React from "react";
import Avatar from "/Images/Avatar.png";
import Avatar1 from "/Images/Avatar-1.png";
import Avatar2 from "/Images/Avatar-2.png";
import Avatar3 from "/Images/Avatar-3.png";
import Avatar4 from "/Images/Frame93.png";
import DotVetrical from "/Icons/dots-vertical.svg";

const TopSelling = () => {
  const Array = [
    {
      pruductName: "اسم المنتج",
      caategory: "اسم التصنيف",
      sales: "25.8%",
      salesType: "up",
      image: Avatar,
    },
    {
      pruductName: "اسم المنتج",
      caategory: "اسم التصنيف",
      sales: "16.2%",
      salesType: "down",
      image: Avatar1 ,
    },
    {
      pruductName: "اسم المنتج",
      caategory: "اسم التصنيف",
      sales: "25.8%",
      salesType: "up",
      image: Avatar2,
    },
    {
      pruductName: "اسم المنتج",
      caategory: "اسم التصنيف",
      sales: "16.2%",
      salesType: "down",
      image: Avatar3,
    },
    {
      pruductName: "اسم المنتج",
      caategory: "اسم التصنيف",
      sales: "25.8%",
      salesType: "up",
      image:Avatar4,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-6 lg:col-span-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">المنتجات الاكثر مبيعا</h2>
        <input
          type="text"
          placeholder="ابحث عن المنتجات"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm lg:w-72"
        />
      </div>
      <table className="w-full mb-5">
        <thead >
          <tr className="text-gray-500 text-sm">
            <th className="py-2">
              <input type="checkbox" />
            </th>
            <th className="py-2">المنتجات</th>
            <th className="py-2">التصنيف</th>
            <th className="py-2">المبيعات</th>
            <th className="py-2">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {Array.map((item) => (
            <tr key={item.pruductName} className="border-t text-start">
              <td className="py-2">
                <input type="checkbox" />
              </td>
              <td className="py-2 flex items-center">
                <img
                  src={item.image}
                  alt={item.pruductName}
                  className="w-7 h-7 rounded-full mx-2"
                />
                <span>{item.pruductName}</span>
              </td>
              <td className="py-2">{item.caategory}</td>
              <td className="py-2">
                <span className={`${item.salesType=="up"?"text-green-500":"text-red-500"}`}>{item.sales}</span>
              </td>
              <td >
                <img src={DotVetrical} alt="" />
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
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-500">
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
