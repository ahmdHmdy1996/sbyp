import Dashboard from "./pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import MyProducts from "./pages/MyProducts";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Home from "./website/Home";
import DashBoardLayOut from "./pages/DashBoardLayOut";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Weblayout from "./website/Weblayout";
import Subscription from "./website/Subscription";
import Register from "./pages/Register";
import "react-toastify/ReactToastify.css";
import axios from "axios";
import ScrollToTop from "./website/components/ScrollToTop";
import Addedproducts from "./pages/Addedproducts";
import Addproduct from "./pages/Addproduct";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducer/authSlice";
import ProtectedRoute from "./pages/ProtectedRoute";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
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

      <Route path="/dashboard/" element={<DashBoardLayOut />}>
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
