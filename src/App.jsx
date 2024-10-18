import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducer/authSlice";
import "react-toastify/ReactToastify.css";

// Dashboard import
const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Products = lazy(()=> import("./pages/Products"));
const MyProducts = lazy(()=> import("./pages/MyProducts"));
const EditProduct = lazy(()=> import("./pages/EditProduct"));
const Orders = lazy(()=> import("./pages/Orders"));
const DashBoardLayOut = lazy(()=> import("./pages/DashBoardLayOut"));
const Addedproducts = lazy(()=> import("./pages/Addedproducts"));
const Addproduct = lazy(()=> import("./pages/Addproduct"));
const SubscriptionPlan = lazy(()=> import("./pages/SubscriptionPlan"));

// Login and Register
const Login = lazy(()=> import("./pages/Login"));
const Register = lazy(()=> import("./pages/Register"));

//Home page import
const Home = lazy(()=> import("./website/Home"))
const Weblayout = lazy(()=> import("./website/Weblayout"))
const Subscription = lazy(()=> import("./website/Subscription"))

// Protected Route
const ProtectedRoute = lazy(()=> import("./pages/ProtectedRoute"))



axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  const { lang } = useSelector((state) => state.language);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // language basic ar
    localStorage.setItem("language", lang);
    const savedLanguage = localStorage.getItem("language") || lang;
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user)); // Rehydrate state
    }
  }, [i18n, dispatch]);

  return (
    <Routes>
      {/* website home*/}
      <Route path="/" element={<Weblayout />}>
        <Route index element={<Home />} />
        <Route path="subscription" element={<Subscription />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/** website Dashboard */}

      <Route
        path="/dashboard/"
        element={
          
            <DashBoardLayOut />
          
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="my-products" element={<MyProducts />} />
        <Route path="my-product/:id" element={<EditProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="added-products" element={<Addedproducts />} />
        <Route path="add-product" element={<Addproduct />} />
        <Route path="subscription-plan" element={<SubscriptionPlan />} />
      </Route>
    </Routes>
  );
}

export default App;
