import React, { useEffect, useState } from "react";
import RechargeWallet from "../components/RechargeWallet";

const Wallet = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [transactions, setTransactions] = useState([
    {
      date: "friday May 31 2024 07:20 GMT-0900",
      transactionId: "M118XDHR94928492",
      creditAmount: "238474",
      dueAmount: "99ر.س",
      pendingAmount: "99ر.س",
      balance: "99ر.س",
      notes: "تم تعليق خطة الاشتراك الاساسية بمبلغ 99 ر.س",
    },
    {
      date: "friday May 31 2024 07:20 GMT-0900",
      transactionId: "M118XDHR94928492",
      creditAmount: "238474",
      dueAmount: "99ر.س",
      pendingAmount: "99ر.س",
      balance: "99ر.س",
      notes: "تم تعليق خطة الاشتراك الاساسية بمبلغ 99 ر.س",
    },
    {
      date: "friday May 31 2024 07:20 GMT-0900",
      transactionId: "M118XDHR94928492",
      creditAmount: "238474",
      dueAmount: "99ر.س",
      pendingAmount: "99ر.س",
      balance: "99ر.س",
      notes: "تم تعليق خطة الاشتراك الاساسية بمبلغ 99 ر.س",
    },
  ]);

  useEffect(() => {
    // fetch('https://api.example.com/transactions') // Replace with your actual API endpoint
    //     .then(response => response.json())
    //     .then(data => setTransactions(data))
    //     .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2>المحفظة</h2>
        </div>
        <div className="flex justify-around items-center space-x-4 space-x-reverse">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن منتجات..."
              className="bg-white rounded-full py-2 px-4 pr-12 w-full"
            />
            <img
              src="/src/assets/Icons/searchIconButton.png"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <button onClick={openModal} className="bg-menu text-white py-2 px-4 rounded-full flex items-center">
            <img
              src="/src/assets/Icons/empty-wallet-change.svg"
              className="ml-2"
            />
            إعادة شحن المحفظة
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <img src="/src/assets/Icons/import.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="bg-white py-4 px-2 rounded-2xl">
        <table className="w-full mb-5 ">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2 px-3">
                <input type="checkbox" />
              </th>
              <th className="py-2 border-b-2" style={{ width: "20%" }}>
                تاريخ المعاملات
              </th>
              <th className="">رقم المعاملة</th>
              <th className="py-2">مبلغ الاعتماد</th>
              <th className="py-2">المبلغ المستحق</th>
              <th className="py-2">معلق</th>
              <th className="py-2">الرصيد</th>
              <th className="py-2" style={{ width: "25%" }}>
                ملاحظات
              </th>
            </tr>
          </thead>
          <tbody className="text-start ">
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-t text-start">
                <td className="py-2 px-3">
                  <input type="checkbox" />
                </td>
                <td className="py-2 flex items-center ">{transaction.date}</td>

                <td className="py-2 ">{transaction.transactionId}</td>
                <td className="text-gray-400">{transaction.creditAmount}</td>
                <td className="py-2 text-gray-400">{transaction.dueAmount}</td>
                <td className="py-2 text-gray-400">
                  {transaction.pendingAmount}
                </td>
                <td className="py-2 px-3 text-gray-400">
                  {transaction.balance}
                </td>
                <td className="py-2">{transaction.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-8">
          <span className="text-md text-gray-400">
            عرض 1 الى 7 منتج من اصل 250 منتجات
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
      {modalOpen && (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
                <RechargeWallet closeModal={closeModal}/>
            </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
