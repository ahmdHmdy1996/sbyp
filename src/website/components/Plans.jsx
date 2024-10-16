import React from "react";
import externalImageUrl from "/Images/Frame-20.png";
import image1 from "/Images/image1.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";



const Plans = () => {
  return (
    <section className="w-full m-auto flex items-center justify-center pt-36 pb-16">
      <div
        className="relative lg:bg-cover text-white rounded-2xl p-6 m-12  m-auto flex items-center justify-between  w-5/6 h-auto"
        style={{ backgroundImage: "url(" + externalImageUrl + ")" }}
      >
        <div className="flex-col lg:px-10 lg:py-16 lg:w-2/3">
          <h1 className="text-lg lg:text-4xl  font-bold mb-4">
            اختر باقتك المثالية اليوم وارتقِ بأعمالك إلى المستوى التالي!
          </h1>
          <p className="mb-6 w-4/5 ">
            استفد من مجموعة واسعة من الباقات المصممة خصيصًا لتلبية احتياجاتك
            التجارية، وأبدأ في تحقيق الأهداف التي طالما حلمت بها!
          </p>
          <Link to="/subscription" className="bg-black w-40 text-white py-3 px-4 rounded-full flex items-center text-sm  hover:scale-110 hover:bg-blue-900">
            تصفح باقاتنا الآن
          <IoIosArrowBack className="w-6 h-6 mr-2 bg-white rounded-full text-black p-1"/>
          </Link>
        </div>
        <div className="flex w-1/3">
          <img
        src={image1}
        alt="رجل يحمل صندوقًا وينظر إلى هاتفه"
        className="hidden lg:inline-block h-auto  absolute bottom-0 left-10 " 
    />
        </div>
      </div>
    </section>
  );
};

export default Plans;
