import React from "react";
import externalImageUrl from "/src/assets/Images/Frame-20.png";
import image1 from "/src/assets/Images/image1.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Plans = () => {
  return (
    <Element name="subscription">
      <section className="w-full m-auto flex items-center justify-center py-12 lg:pt-36 lg:pb-16">
        <div
          className="hidden lg:flex relative lg:bg-cover text-white rounded-2xl p-6 m-12  m-auto items-center justify-between  w-5/6 h-auto"
          style={{ backgroundImage: "url(" + externalImageUrl + ")" }}
        >
          <div className="flex-col lg:px-10 lg:py-16 lg:w-3/5 2xl:w-2/3">
            <h1 className="text-lg lg:text-2xl  font-bold mb-4">
              اختر باقتك المثالية اليوم وارتقِ بأعمالك إلى المستوى التالي!
            </h1>
            <p className="mb-6 w-4/5 ">
              استفد من مجموعة واسعة من الباقات المصممة خصيصًا لتلبية احتياجاتك
              التجارية، وأبدأ في تحقيق الأهداف التي طالما حلمت بها!
            </p>
            <Link
              to="/subscription"
              className="bg-black w-40 text-white py-3 px-4 rounded-full flex items-center text-sm  hover:scale-110 hover:bg-blue-900"
            >
              تصفح باقاتنا الآن
              <IoIosArrowBack className="w-6 h-6 mr-2 bg-white rounded-full text-black p-1" />
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



        <div className="flex justify-center items-center  text-center lg:hidden mx-4 ">
          <div className="flex-col justify-center items-center bg-gray-200 px-2 py-6 rounded-xl">
            <h1 className="text-lg font-bold mb-4 m-auto">
              اختر باقتك المثالية اليوم وارتقِ بأعمالك إلى المستوى التالي!
            </h1>
            <p className="mb-6 w-4/5 m-auto ">
              استفد من مجموعة واسعة من الباقات المصممة خصيصًا لتلبية احتياجاتك
              التجارية، وأبدأ في تحقيق الأهداف التي طالما حلمت بها!
            </p>
            <Link
              to="/subscription"
              className="bg-menu   w-40 text-white py-3 px-4 rounded-full flex items-center text-sm  hover:scale-110 hover:bg-blue-900 m-auto"
            >
              تصفح باقاتنا الآن
              <IoIosArrowBack className="w-6 h-6 mr-2 bg-white rounded-full text-black p-1" />
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Plans;
