import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import MyProducts from "./pages/MyProducts";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App bg-home flex">
      <Sidebar />

      <section className="w-full lg:w-5/6 p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/my-products" element={<MyProducts/>} />
          <Route path="/my-product/:id" element={<EditProduct/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
