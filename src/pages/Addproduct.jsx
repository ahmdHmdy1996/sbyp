import React, { useEffect, useState } from "react";
import IconButton from "/src/assets/Icons/IconButton.png";
import IconButtonlast from "/src/assets/Icons/IconButtonlast.png";
import IconCenter from "/src/assets/Icons/IconCenter.png";
import IconItalic from "/src/assets/Icons/IconItalic.png";
import IconLeft from "/src/assets/Icons/IconLeft.png";
import IconList from "/src/assets/Icons/IconList.png";
import IconMiddle from "/src/assets/Icons/IconMiddle.png";
import IconRight from "/src/assets/Icons/IconRight.png";
import IconUnderLine from "/src/assets/Icons/IconUnderLine.png";
import uplaod from "/src/assets/Icons/uplaod.png";
import Add from "/src/assets/Icons/add-circle.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Addproduct = () => {
  const [categories, setCategories] = useState();
  const [selectedObject, setSelectedObject] = useState({});
  const [access_token, setAccessToken] = useState();
  const navigate = useNavigate();
  const [size, setSize] = useState();

  const initialFormData = {
    ar_title: "",
    en_title: "",
    store_id: "2",
    description: "",
    main_image: null,
    brand: "",
    barcode: "",
    sale_price: "",
    suggested_price: "",
    shipping_cost: "",
    stock: "",
    attributes: {
      1: [],
    },
    lang: "ar",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked, select } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      main_image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    // Ensure that the size value is included in attributes
    if (size) {
      formData.attributes[1].push(size);
    }

    data.append("ar_title", formData.ar_title);
    data.append("en_title", formData.en_title);
    data.append("description", formData.description);
    data.append("brand", formData.brand);
    data.append("barcode", formData.barcode);
    data.append("sale_price", formData.sale_price);
    data.append("suggested_price", formData.suggested_price);
    data.append("shipping_cost", formData.shipping_cost);
    data.append("stock", formData.stock);

    // Append each attribute separately in the expected array format
    Object.entries(formData.attributes).forEach(([key, values]) => {
      values.forEach((value) => {
        data.append(`attributes[${key}][]`, value); // Array format for each attribute
      });
    });

    data.append("lang", "ar");
    data.append("category_id", selectedObject.id);
    data.append("store_id", 1);
    data.append("sku", "a145");
    data.append("weight", 10);

    if (formData.main_image) {
      data.append("main_image", formData.main_image);
    }

    // Send data to API
    axios
      .post("https://back.sbyp-sa.com/api/products", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(access_token)}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message);
        navigate("/dashboard/added-products");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        if(error.response.data.errors){
          error.response.data.errors.map((e)=>toast.error(e)
          )
        }
      });
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSelect = (e) => {
    const currentCategory = categories.map((el) => {
      console.log();
      if (Number(e.target.value) === el.id) setSelectedObject(el);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAccessToken(token);
    if (token) {
      try {
        axios
          .get("https://back.sbyp-sa.com/api/categories", {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
          .then((res) => {
            setCategories(res.data.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div className="mt-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold">أضافة منتج جديد</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
            {/* first section */}
            <div className="flex justify-center items-center ">
              <div className="bg-white p-8 rounded-3xl  w-full max-w-3xl">
                <h2 className="text-xl font-semibold mb-6">تفاصيل المنتج</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="col-span-1">
                    <label className="block text-gray-500 mb-2">
                      اسم المنتج بالعربي
                    </label>
                    <input
                      type="text"
                      name="ar_title"
                      placeholder="ادخل اسم المنتج"
                      className="w-full p-2 border border-gray-200 rounded"
                      value={formData.ar_title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-gray-500 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="en_title"
                      placeholder="Enter Product Name"
                      className="w-full p-2 border border-gray-200 rounded"
                      value={formData.en_title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="block text-gray-500 mb-2">التصنيف</label>
                    <div className="relative">
                      <select
                        name="category_name"
                        className="w-full p-2 border text-gray-500 border-gray-200 rounded appearance-none"
                        // value={formData.category_name}
                        onChange={handleSelect}
                      >
                        <option value="">اختر التصنيف</option>
                        {categories?.map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.ar_title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-gray-500 mb-2">
                      باركود المنتج
                    </label>
                    <input
                      type="text"
                      name="barcode"
                      placeholder="باركود المنتج"
                      className="w-full p-2 border border-gray-200 rounded"
                      value={formData.barcode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="block text-gray-500 mb-2">
                      اسم البراند
                    </label>
                    <input
                      type="text"
                      name="brand"
                      placeholder="ادخل اسم البراند"
                      className="w-full p-2 border border-gray-200 rounded"
                      value={formData.brand}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 mb-2">
                    وصف المنتج (اختياري)
                  </label>
                  <div className="border border-gray-200 rounded p-4">
                    <div className="flex items-center mb-4">
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconButton} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconItalic} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconUnderLine} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconCenter} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconList} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconRight} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconMiddle} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconLeft} alt="" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-500">
                        <img src={IconButtonlast} alt="" />
                      </button>
                    </div>
                    <textarea
                      className="w-full h-32 p-2 border border-gray-200 rounded"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* end first section */}

            {/* second section */}
            <div className="bg-white p-6 rounded-3xl w-full mt-6">
              <div className="flex justify-between items-center mb-4 ">
                <span className="text-gray-900 text-lg">صورة المنتج</span>
                <a href="#" className="text-menu text-sm">
                  إضافة الوسائط من خلال رابط
                </a>
              </div>
              <div className="flex-col bg-white  rounded-xl   mb-6">
                <div className="border-2 border-dashed border-gray-200 rounded-md p-6 text-center">
                  <img src={uplaod} alt="" className="m-auto my-5" />
                  <p className="text-gray-500 mb-4">اسحب وأفلت الصورة هنا</p>
                  <span className="text-gray-400 ">أو</span>
                  <input
                    type="file"
                    name="main_image"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="bg-menu mt-5 text-white px-4 py-2 rounded cursor-pointer block max-w-44 m-auto mb-4"
                  >
                    تحميل
                  </label>
                  <span className="mr-3 text-sm text-gray-300 ">
                    {formData.main_image
                      ? formData.main_image.name
                      : "لا يوجد ملف مرفق"}
                  </span>
                </div>
              </div>
            </div>
            {/* end second section */}

            {/* third section */}
            <div className="relative bg-white p-6 rounded-3xl  w-full max-w-3xl mt-6">
              <h2 className="text-gray-800 text-lg my-5">المتغيرات</h2>
              <div className="border border-gray-200 rounded-2xl px-3  py-5 flex items-center space-x-4">
                <div className="w-1/4 mx-3">
                  <label className="block text-gray-500 mb-1">
                    اسم المتغير
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg p-2 text-gray-800 appearance-none">
                      <option>المقاس</option>
                    </select>
                    <img
                      src="/src/assets/Icons/arrow-down.png"
                      className=" absolute top-3 left-3 "
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <label className="block text-gray-500 mb-1">
                    تفاصيل المتغير
                  </label>
                  <input
                    type="text"
                    name="size"
                    placeholder="ادخل المقاسات المتاحة"
                    className="w-full border border-gray-200 rounded-lg p-2 text-gray-500"
                    id="1"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-end  mt-7">
                <button className="  bg-menu text-white py-2 px-4 rounded-xl flex items-center">
                  <img src={Add} alt="" className="mx-2" />
                  إضافة متغير جديد
                </button>
              </div>
            </div>
            {/* end third section */}

            {/* fourth section */}
            <div className="flex justify-center items-center mt-6 w-full ">
              <div className="bg-white p-8 rounded-2xl w-full">
                <h1 className="text-xl font-bold mb-4">المخزن</h1>
                <div className="border rounded-lg px-6 py-4 ">
                  <div className="flex items-center  mt-4 mb-6">
                    <input
                      type="text"
                      name="stock"
                      placeholder="أدخل الكمية في المخزن"
                      className="border ml-4 p-3 rounded-md flex-grow"
                      value={formData.stock}
                      onChange={handleChange}
                    />
                    <button
                      type=""
                      className="bg-menu text-white px-7 py-3 rounded-md"
                    >
                      تأكيد
                    </button>
                  </div>
                  <div className="text-gray-900 my-8 space-y-4">
                    <p>المنتجات المتوفرة الآن: 8</p>
                    <p>المنتجات قيد الشحن: 62</p>
                    <p>آخر إعادة تخزين: 24 يونيو 2023</p>
                    <p>إجمالي المخزون: 2,430</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end fourth section */}
          </div>

          {/* left Section */}
          <div className="col-spn-1">
            <div className="bg-white p-6 rounded-3xl ">
              <h2 className="text-xl font-semibold mb-4 text-right">التسعير</h2>
              <div className="mb-4">
                <label className="block text-right mb-1">السعر</label>
                <input
                  type="text"
                  name="sale_price"
                  placeholder="ادخل السعر الأصلي للمنتج"
                  className="w-full p-2 border border-gray-300 rounded-md text-right"
                  value={formData.sale_price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-right mb-1">السعر بعد الخصم</label>
                <input
                  type="text"
                  name="suggested_price"
                  placeholder="ادخل السعر بعد الخصم"
                  className="w-full p-2 border border-gray-300 rounded-md text-right"
                  value={formData.suggested_price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-right mb-1">تكلفة الشحن</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="shipping_cost"
                    placeholder="ادخل تكلفة الشحن"
                    className="w-full p-3 border border-gray-300 rounded-md text-right"
                    value={formData.shipping_cost}
                    onChange={handleChange}
                  />
                  {/* <span className="absolute left-2 ml-2 bg-purple-100 text-menu px-4 py-1 rounded-md">
                    %
                  </span> */}
                </div>
              </div>
              <div className="mb-4 flex items-center ">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 !text-menu"
                />
                <label className="text-right mx-2">
                  تطبيق ضريبة القيمة المضافة
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-right">متوفر في المخزن</label>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <label className="inline-flex relative items-center cursor-pointer mx-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-11 h-6  rounded-full shadow-inner ${
                        isChecked ? "bg-menu" : "bg-gray-400"
                      } `}
                    ></div>
                    <div
                      className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform ${
                        isChecked
                          ? "translate-x-[-1.50rem]"
                          : "translate-x-[-0.2rem] "
                      }`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Ens Fifth Section */}
          <div className="col-span-3 flex justify-center item-center">
            <button
              type="submit"
              className="px-20 py-3 text-white bg-menu hover:bg-main m-auto"
            >
              احفظ المنتج
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
