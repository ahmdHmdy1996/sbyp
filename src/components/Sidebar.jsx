import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashWhite from "/Icons/element-4.svg"
import DashDark from "/Icons/element-4-1.svg"
import ArchiveWhite from "/Icons/archive-book.svg"
import ArchiveDark from "/Icons/archive-book-1.svg"
import ShopWhite from "/Icons/shop-1.svg"
import ShopDark from "/Icons/shop-2.svg"
import BoxWhite from "/Icons/box.svg"
import BoxDark from "/Icons/box-1.svg"
import StarWhite from "/Icons/star.svg"
import StarDark from "/Icons/star-1.svg"
import WalletWhite from "/Icons/empty-wallet.svg"
import WalletDark from "/Icons/empty-wallet-1.svg"
import ShapesWhite from "/Icons/shapes.svg"
import ShapesDark from "/Icons/shapes-1.svg"
import TicketWhite from "/Icons/ticket-2.svg"
import TicketDark from "/Icons/ticket-2-1.svg"



const Sidebar = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  let location = useLocation();

  console.log(location);
  

  const Array = [
    {
      text: t("Dashboards"),
      iconWhite: <img src={DashWhite}/>,
      iconDark: <img src={DashDark} />,
      path: "/",
    },
    {
      text: t("ProductsCatalog"),
      iconWhite: <img src={ArchiveWhite}/>,
      iconDark: <img src={ArchiveDark} />,
      path: "/products",
    },
    {
      text: t("MyProducts"),
      iconWhite: <img src={ShopWhite}/>,
      iconDark: <img src={ShopDark} />,
      path: "/my-products",
    },
    {
      text: t("Orders"),
      iconWhite: <img src={BoxWhite}/>,
      iconDark: <img src={BoxDark} />,
      path: "/orders",
    },
    {
      text: t("SubscriptionPlan"),
      iconWhite: <img src={StarWhite}/>,
      iconDark: <img src={StarDark} />,
      path: "/subscription-plan",
    },
    {
      text: t("Wallet"),
      iconWhite: <img src={WalletWhite}/>,
      iconDark: <img src={WalletDark} />,
      path: "/wallet",
    },
    {
      text: t("Integrations"),
      iconWhite: <img src={ShapesWhite}/>,
      iconDark: <img src={ShapesDark} />,
      path: "/integrations",
    },
    {
      text: t("MyTickets"),
      iconWhite: <img src={TicketWhite}/>,
      iconDark: <img src={TicketDark} />,
      path: "/tickets",
    },
  ];

  return (
    <div className="hidden lg:block w-1/6 h-screen bg-white pt-8 px-5 ">
      <div className=" flex flex-col ">
        <img src="/logo.png" className="max-w-[120px] mb-8" alt="logo" />
        <ul className="flex flex-col">
          {Array.map((item) => (
            <Link
              to={item.path}
              className={`relative py-2 px-2 mb-2 text-l hover:text-white hover:rounded-full hover:bg-menu flex align-center items-center ${
                location.pathname === item.path
                  ? "text-white rounded-full bg-menu"
                  : ""
              } `}
            >
              <div className="text-xl mx-1">{location.pathname === item.path ? item.iconDark : item.iconWhite}</div>
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

          {/* <Link
            to="/"
            className=" bg-menu py-2 text-white px-2 rounded-full text-l relative mb-2"
          >
            <TbLayout2
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />{" "}
            {t("Dashboards")}{" "}
            {language == "en" ? (
              <IoIosArrowForward className="inline text-xl absolute right-2  top-3" />
            ) : (
              <IoIosArrowBack className="inline text-xl absolute left-2 top-3" />
            )}
          </Link>

          <Link
            to="/products"
            className=" py-2 px-2 mb-2 text-l hover:text-white hover:rounded-full hover:bg-menu"
          >
            <img
              src="archive-book.svg"
              alt=""
              className={`inline ${
                language == "en" ? "mr-1" : "ml-1"
              } w-[17px] `}
            />
            {t("ProductsCatalog")}
          </Link>

          <li className=" py-2 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <BiStoreAlt
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />{" "}
            {t("MyProducts")}
          </li>
          <li className=" py-2 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <TbCube
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />
            {t("Orders")}
          </li>
          <li className=" py-2 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <PiStarBold
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />
            {t("SubscriptionPlan")}
          </li>
          <li className=" py-3 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <LiaWalletSolid
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />
            {t("Wallet")}
          </li>
          <li className=" py-2 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <TbNotification
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />
            {t("Integrations")}
          </li>
          <li className=" py-2 px-2 text-l mb-2 hover:text-white hover:rounded-full hover:bg-menu">
            <LuTicket
              className={`inline ${language == "en" ? "mr-1" : "ml-1"} `}
            />
            {t("MyTickets")}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
