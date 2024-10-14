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

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr"; // Set direction
    }
  }, [i18n]);

  return (
    <Routes>
      {/* website home*/}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/** website Dashboard */}
      <Route path="/dashboard/" element={<DashBoardLayOut />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="my-products" element={<MyProducts />} />
        <Route path="my-product/:id" element={<EditProduct />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
