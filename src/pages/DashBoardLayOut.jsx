import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function DashBoardLayOut() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(()=>{
    
    if(!isAuthenticated){
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // Pass the current location to redirect back after login
      />
    }
  },)
  
  return (
    <>
      <div className="App bg-home flex">
        <Sidebar />
        <section className={"lg:w-5/6 p-6 w-full"}>
          <Navbar />

          <div>
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}
