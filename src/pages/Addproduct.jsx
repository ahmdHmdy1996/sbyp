import React from "react";
import ProductDetails from "../components/ProductDetails";
import Pricing from "../components/Pricing";
import ProductImage from "../components/ProductImage";
import Variables from "../components/Variables";
import Store from "../components/Store";

const Addproduct = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">أضافة منتج جديد</h2>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
            <ProductDetails/>
            <ProductImage/>
            <Variables/>
            <Store/>
        </div>
        <div className="col-spn-1">
            <Pricing/>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
