import React, { useState } from "react";

const AddTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    storeName: "",
    categories: [],
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        categories: checked
          ? [...prevData.categories, value]
          : prevData.categories.filter((category) => category !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("storeName", formData.storeName);
    data.append("categories", formData.categories);
    data.append("description", formData.description);
    if (formData.file) {
      data.append("file", formData.file);
    }

    // fetch("YOUR_API_ENDPOINT", {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });


    // log data 
    // data.forEach((value, key) => {
    //   console.log(key, value);
    // });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold my-6 text-right">تذكرة جديدة</h1>
      <div className="bg-white p-8 rounded-3xl shadow-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                name="name"
                placeholder="الاسم الكامل"
                className="w-full p-2 border rounded-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">رقم الجوال</label>
              <div className="flex relative  ">
                <div className="absolute right-0 top-1 flex items-center justify-center px-2  p-1 border-l ">
                  <img
                    src="https://www.worldometers.info/img/flags/sa-flag.gif"
                    alt="علم الدولة"
                    className=" rounded-full w-7 h-7 mx-2"
                  />
                  <span className="text-sm">966+</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="ادخل رقم الجوال"
                  className="w-full p-2 border rounded-full pr-24"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                placeholder="ادخل البريد الإلكتروني"
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">اسم المتجر</label>
              <input
                type="text"
                name="storeName"
                placeholder="اسم المتجر"
                className="w-full p-2 border rounded-md"
                value={formData.storeName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2">إرفاق مستند</label>
            <div className="flex items-center">
              <input
                type="file"
                name="document"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="bg-gray-200 p-2 rounded-md cursor-pointer"
              >
                تحميل ملف
              </label>
              <span className="mr-3 text-sm text-gray-500 ">
                {formData.file ? formData.file.name : "لا يوجد ملف مرفق"}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2">
              اختر تصنيف المشكلة
            </label>
            <div className="mt-2 space-y-6 ">
              {[
                "الاشتراك والفواتير",
                "إعدادات الحساب",
                "ربط الجهاز والتطبيقات",
                "تحديث الصفحة",
                "مشاكل تقنية",
                "استرداد مبلغ المدفوع",
                "استفسار عن جانب",
                "استفسار عن منتج",
                "المنتج غير مستلم",
              ].map((category, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    id={`category${index}`}
                    name="category"
                    type="checkbox"
                    value={category}
                    onChange={handleChange}
                    className="h-4 w-4 text-menu border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`category${index}`}
                    className="mr-3 block text-sm font-medium text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2">توضيح المشكلة</label>
            <textarea
              name="issue_description"
              placeholder="اكتب توضيح المشكلة، إن وجدت..."
              className="w-full p-2 border rounded-md h-32"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-menu text-white px-10 py-2 rounded-full"
            >
              إرسال
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-10 py-2 mx-4 rounded-full "
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTicket;
