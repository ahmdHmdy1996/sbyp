import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import MyProducts from "./pages/MyProducts";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";
import Login from "./pages/Login";







function App() {

  const {pathname} = useLocation()

  console.log(pathname);
  
  return (
    <div className="App bg-home flex">
      <Sidebar />
      <section className={`${pathname === "/login" ? "lg:w-full p-0":"lg:w-5/6 p-6"} w-full`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/my-products" element={<MyProducts/>} />
          <Route path="/my-product/:id" element={<EditProduct/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
