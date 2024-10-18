import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashBoardLayOut() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate()
  if (!isAuthenticated) {
    navigate("/login")
  }
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
