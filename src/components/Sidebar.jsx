import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashWhite from "/src/assets/Icons/element-4.svg";
import DashDark from "/src/assets/Icons/element-4-1.svg";
import ArchiveWhite from "/src/assets/Icons/archive-book.svg";
import ArchiveDark from "/src/assets/Icons/archive-book-1.svg";
import ShopWhite from "/src/assets/Icons/shop-1.svg";
import ShopDark from "/src/assets/Icons/shop-2.svg";
import BoxWhite from "/src/assets/Icons/box.svg";
import BoxDark from "/src/assets/Icons/box-1.svg";
import StarWhite from "/src/assets/Icons/star.svg";
import StarDark from "/src/assets/Icons/star-1.svg";
import ShapesWhite from "/src/assets/Icons/shapes.svg";
import ShapesDark from "/src/assets/Icons/shapes-1.svg";
import TicketWhite from "/src/assets/Icons/ticket-2.svg";
import TicketDark from "/src/assets/Icons/ticket-2-1.svg";
import Trolley from "/src/assets/Icons/trolley-01.png";
import settings from "/src/assets/Icons/settings.svg";
import userlogout from "/src/assets/Icons/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducer/authSlice";

const Sidebar = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login", { replace: true }); // Redirect to login page
  };

  const Array = [
    {
      text: t("Dashboards"),
      iconWhite: <img src={DashWhite} />,
      iconDark: <img src={DashDark} />,
      path: "/dashboard",
    },
    {
      text: t("ProductsCatalog"),
      iconWhite: <img src={ArchiveWhite} />,
      iconDark: <img src={ArchiveDark} />,
      path: "/dashboard/products",
    },
    {
      text: t("MyProducts"),
      iconWhite: <img src={ShopWhite} />,
      iconDark: <img src={ShopDark} />,
      path: "/dashboard/my-products",
    },
    {
      text: t("Trolley"),
      iconWhite: <img src={ShopWhite} />,
      iconDark: <img src={Trolley} />,
      path: "/dashboard/added-products",
    },
    {
      text: t("Orders"),
      iconWhite: <img src={BoxWhite} />,
      iconDark: <img src={BoxDark} />,
      path: "/dashboard/orders",
    },
    {
      text: t("SubscriptionPlan"),
      iconWhite: <img src={StarWhite} />,
      iconDark: <img src={StarDark} />,
      path: "/dashboard/subscription-plan",
    },
    {
      text: t("Wallet"),
      iconWhite: <img src="/src/assets/Icons/empty-wallet.svg" />,
      iconDark: <img src="/src/assets/Icons/empty-wallet-1.svg" />,
      path: "/dashboard/wallet",
    },
    {
      text: t("Integrations"),
      iconWhite: <img src={ShapesWhite} />,
      iconDark: <img src={ShapesDark} />,
      path: "/dashboard/integrations",
    },
    {
      text: t("MyTickets"),
      iconWhite: <img src={TicketWhite} />,
      iconDark: <img src={TicketDark} />,
      path: "/dashboard/tickets",
    },
  ];

  return (
    <aside
      className={`${
        location.pathname === "/login" ? "hidden lg:hidden" : " hidden lg:block"
      } w-1/6  bg-white pt-8 px-5 h-[830px]`}
    >
      <div className=" flex flex-col ">
        <Link to="/">
          <img src="/logo.png" className="max-w-[100px] mb-8" alt="logo" />
        </Link>
        <ul className="flex flex-col mb-32">
          {Array.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`relative py-2 px-2 mb-2 text-l hover:text-white hover:rounded-full hover:bg-menu flex align-center items-center ${
                location.pathname === item.path
                  ? "text-white rounded-full bg-menu"
                  : ""
              } `}
            >
              <div className="text-xl mx-1">
                {location.pathname === item.path
                  ? item.iconDark
                  : item.iconWhite}
              </div>
              {item.text}
              {location.pathname === item.path ? (
                language == "en" ? (
                  <IoIosArrowForward className="inline text-xl absolute right-2  top-3" />
                ) : (
                  <IoIosArrowBack className="inline text-xl absolute left-2 top-3" />
                )
              ) : (
                ""
              )}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-gray-300 ">الاعدادات</span>
        <div className="flex items-center mt-4  ">
          <img src={settings} alt="" className="h-8 w-8" />
          <p className="mx-2 text-xl">الاعدادات</p>
        </div>
        <button onClick={handleLogout} className="flex items-center mt-4">
          <img src={userlogout} alt="" className="h-8 w-8" />
          <p className="mx-2 text-xl text-red-500"> تسجيل الخروج</p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
