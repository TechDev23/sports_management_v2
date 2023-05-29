import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Navbar from "../pages/Navbar";

export default function Root() {
  return (
    <>
      <div className="flex">
        <div className="z-10 sticky top-0 h-screen bg-white">
          <Sidebar />
        </div>
        <div className="w-screen m-1 ml-2 mt-0 flex flex-col items-center justify-start">
          <div className="bg-white w-full h-16 flex items-center drop-shadow-xl rounded-lg rounded-t-none rounded-s">
            <Navbar />
          </div>
          <div className="bg-white mt-4 w-full min-h-screen drop-shadow-2xl rounded-md">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
