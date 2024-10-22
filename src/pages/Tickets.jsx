import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import edit from "/src/assets/Icons/edit.svg";
import Shopping from "/src/assets/Icons/shopping-bag.svg";
import trash from "/src/assets/Icons/trash.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer } from "react-toastify";


const Tickets = () => {
  const { user } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://back.sbyp-sa.com/api/technical-support", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((res) => {
          setTickets(res.data.data);
          console.log(res.data.data);
          
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const language = localStorage.getItem("language");


  return (
    <div>
      <ToastContainer />
      <div className="flex justify-between align-center items-center my-3">
        <h3 className="text-2xl font-bold"> التذاكر</h3>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/src/assets/Icons/searchIconButton.png"
              alt=""
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            />

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
            {tickets.map((item) => (
              <tr key={item.id} className="border-t text-start">
                <td className="py-2">
                  <input type="checkbox" />
                </td>
                <td className="py-2 flex items-center ">
                  <span>{item.id}</span>
                </td>
                <td>
                  <h3>{item.name}</h3>
                </td>
                <td className="py-2 ">
                  <span>{item.store_name}</span>
                </td>
                <td>{item.problem_type}</td>
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
                      item.status == "بانتظار الرد" || item.status == "pending"
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
