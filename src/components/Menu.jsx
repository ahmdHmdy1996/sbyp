import React from 'react';
import { Link } from 'react-router-dom';
 
const Menu = () => {
  return <div className="px-2 py-3 space-y-2 font-medium text-slate-700">
    <Link
      to="/"
      className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Dashboards
    </Link>
    <Link
      to="/products"
      className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      ProductsCatalog
    </Link>
    <Link
      to="/my-products"
      className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      MyProducts
    </Link>
    <Link
      to="/orders"
      className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Orders
    </Link>
  </div>
}
 
export default Menu;