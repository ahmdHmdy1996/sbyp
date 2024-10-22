import React, { useState } from "react";

const Integrations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState("");
  const [apikey, setApikey] = useState("");
  const [storeName, setStoreName] = useState("");

  const items = [
    {
      src: "/src/assets/Images/woocommerce.png",
      alt: "WooCommerce logo",
      name: "WooCommerce",
      website: ".WooCommerce.com",
    },
    {
      src: "/src/assets/Images/twsaa.png",
      alt: "twsaa logo",
      name: "twsaa",
      website: ".twsaa.com",
    },
    {
      src: "/src/assets/Images/Shopify.png",
      alt: "Shopify logo",
      name: "Shopify",
      website: ".myshopify.com",
    },
    {
      src: "/src/assets/Images/Safqa.png",
      alt: "Safqa logo",
      name: "Safqa",
      website: ".myshopify.com",
    },
    {
      src: "/src/assets/Images/OpenCart.png",
      alt: "OpenCart logo",
      name: "OpenCart",
      website: ".opencart.com",
    },
    {
      src: "/src/assets/Images/Matajer.png",
      alt: "Matajer logo",
      name: "Matajer",
      website: ".matajer.com",
    },
    {
      src: "/src/assets/Images/salla.png",
      alt: "Salla logo",
      name: "Salla",
      website: ".salla.com",
    },
    {
      src: "/src/assets/Images/RZQ.png",
      alt: "RZQ logo",
      name: "RZQ",
      website: ".RZQ.com",
    },
    {
      src: "/src/assets/Images/Zid.png",
      alt: "Zid logo",
      name: "Zid",
      website: ".Zid.com",
    },
    {
      src: "/src/assets/Images/Magento.png",
      alt: "Magento logo",
      name: "Magento",
      website: ".Magento.com",
    },
    {
      src: "/src/assets/Images/InnoShop.png",
      alt: "InnoShop logo",
      name: "InnoShop",
      website: ".InnoShop.com",
    },
  ];

  const openModal = (name) => {
    setSelectedShop(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedShop("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedShop.name, apikey, storeName);
  };

  return (
    <div className="p-8">
      <h1 className="text-right text-xl font-bold mb-4">اكواد الربط</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center relative cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img src={item.src} alt={item.alt} className="w-[250px] " />
            <span className="absolute top-2 left-2 text-green-500">
              <i className="fas fa-link"></i>
            </span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
          <div className="bg-white p-8 rounded-3xl shadow-lg relative w-[40%]">
            <div className="flex  items-center justify-start mb-6 border-b-2">
              <h2 className="text-xl font-bold">الربط مع منصة</h2>
              <img
                src={selectedShop.src}
                alt="Shopify logo"
                className="mr-2 max-w-20"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">مفتاح API</label>
                <input
                  type="text"
                  name="apikey"
                  placeholder="أدخل مفتاح API الخاص بمتجرك"
                  className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:border-menu"
                  onChange={(e) => {
                    setApikey(e.target.value);
                  }}
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-700 mb-2">اسم المتجر</label>
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Your Store Name"
                    className="w-full text-left py-3 px-4 border border-gray-200 rounded-full focus:outline-none focus:border-menu "
                    onChange={(e) => {
                      setStoreName(e.target.value);
                    }}
                  />
                  <span className="absolute bottom-1 right-1 bg-cyan-200 text-cyan-500 py-2 px-4  rounded-full">
                    {selectedShop.website}
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-3 space-x-reverse">
                <button
                  type="submit"
                  className="bg-menu text-white py-2 px-12 rounded-full"
                >
                  حفظ
                </button>
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 py-2 px-12 rounded-full"
                  onClick={closeModal}
                >
                  الغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integrations;
