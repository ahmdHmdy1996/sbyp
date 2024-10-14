import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default function DashBoardLayOut() {
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