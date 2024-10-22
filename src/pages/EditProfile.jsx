import axios from "axios";
import React, { useEffect, useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    commercialRecord: "",
    taxNumber: "",
    phoneNumber: "",
    email: "",
    name: "",
    snapchat: "",
    twitter: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    facebook: "",
    description: false,
    priceUpdate: false,
    tax: false,
    photoGallery: false,
    walletPoints: false,
    cod: false,
    ShippingPlusCost:false
  });
  
  const checkboxLabels = {
    description: "الوصف",
    priceUpdate: "تحديث السعر",
    tax: "ضريبة",
    photoGallery: "معرض الصور",
    walletPoints: "دعم نقاط من المحفظة",
    cod: "الدفع عند الاستلام (COD)",
    ShippingPlusCost: "التكلفة+الشحن"
  };
  const [checkboxStates, setCheckboxStates] = useState({
    description: formData.description,
    priceUpdate: formData.priceUpdate,
    tax: formData.tax,
    photoGallery: formData.photoGallery,
    walletPoints: formData.walletPoints,
    cod: formData.cod,
    ShippingPlusCost: formData.ShippingPlusCost
  });



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://back.sbyp-sa.com/api/user/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }, []);

//   Handle input type
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

//   handle checkbox select
  const handleCheckboxChange = (name) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };





  const handleSubmit = (e) => {
    e.preventDefault();

    // Send edited data to API
    // fetch("https://api.example.com/client-data", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("Success:", data))
    //   .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-3xl ">
      <h1 className="text-2xl font-bold mb-6">تعديل الملف الشخصي</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src="/src/assets/avatar2.png"
              alt="صورة الملف الشخصي"
              className="w-24 h-24 rounded-3xl "
            />
          </div>
          <div className="mr-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              إضافة صورة جديدة
            </button>
            <button className="mx-3 bg-gray-200 px-4 py-2 rounded-md">
              إزالة
            </button>
            <p className="text-gray-500 mt-3">
              تُقبل ملفات بصيغة PNG أو GIF أو JPG والحجم الأقصى هو 800 كيلوبايت
            </p>
          </div>
        </div>
        <div className=" p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">بيانات الملف الشخصي</h2>
          <div className="grid grid-cols-2 gap-8 border px-8 py-12 rounded-3xl">
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2 ">
                اسم المتجر
              </label>
              <input
                type="text"
                name="storeName"
                onChange={handleChange}
                value={formData.storeName}
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
                placeholder="ادخل اسم المتجر"
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2 ">
                السجل التجاري
              </label>
              <input
                type="text"
                name="commercialRecord"
                value={formData.commercialRecord}
                onChange={handleChange}
                placeholder="ادخل رقم السجل التجاري"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                الرقم الضريبي
              </label>
              <input
                type="text"
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleChange}
                placeholder="الرقم الضريبي"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                رقم الهاتف
              </label>
              <img
                src="https://www.worldometers.info/img/flags/sa-flag.gif"
                alt="علم الدولة"
                className=" rounded-full w-7 h-7 mx-2 z-10 "
              />
              <span className="ml-2 border-l pl-2">+966</span>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="رقم الجوال"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
              <span className="ml-2">📱</span>
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="الاسم"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-400 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                البريد الالكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">
            مواقع التواصل الاجتماعي
          </h2>

          <div className="grid grid-cols-3 gap-8 border px-8 py-12 rounded-3xl">
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                سناب شات
              </label>
              <input
                type="text"
                name="snapchat"
                value={formData.snapchat}
                onChange={handleChange}
                placeholder="سناب شات"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                تويتر (إكس)
              </label>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="تويتر (إكس)"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                إنستقرام
              </label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder=" إنستقرام"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                يوتيوب
              </label>
              <input
                type="text"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
                placeholder="يوتيوب"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                تيك توك
              </label>
              <input
                type="text"
                name="tiktok"
                value={formData.tiktok}
                onChange={handleChange}
                placeholder="تيك توك"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
            <div className="flex justify-end items-center p-3 border border-gray-300 rounded-lg w-full max-w-lg mx-auto relative inline-block">
              <label className="absolute top-[-10px] right-[10px] bg-white py-0 px-2">
                فيس بوك
              </label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="فيس بوك"
                className="w-full border-none focus:outline-none text-md text-gray-800 placeholder:text-gray-300 "
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">إعدادات إضافية</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.keys(checkboxStates).map((key) => (
              <label
                key={key}
                className="inline-flex relative items-center cursor-pointer mx-2 mb-4"
              >
                <input
                  type="checkbox"
                  checked={checkboxStates[key]}
                  onChange={() => handleCheckboxChange(key)}
                  className="sr-only"
                />
                <div
                  className={`w-11 h-6 rounded-full shadow-inner ${
                    checkboxStates[key] ? "bg-menu" : "bg-gray-200"
                  }`}
                ></div>
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform ${
                    checkboxStates[key]
                      ? "translate-x-[-1.50rem]"
                      : "translate-x-[-0.2rem]"
                  }`}
                ></div>
                <span className="mr-2">{checkboxLabels[key]}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-menu text-white px-12 py-2 rounded-full mx-2"
          >
            حفظ
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-12 py-2 rounded-full"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
