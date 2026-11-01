import {  NavLink, Outlet } from "react-router";
import Navbar from "./../Home/Navbar/Navbar";
import Footer from "./../Home/Footer/Footer";
import '../../App.css'


const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-5 min-h-screen">
        {/* Sidebar */}
        <div id="sidebarButton" className="w-52 bg-gray-100 p-5 hidden lg:flex flex-col gap-2">
          <button className="btn w-full">Add</button>
          <button className="btn w-full">Remove</button>
          <NavLink to='/files'><button className="btn w-full">File</button></NavLink>
          <button className="btn w-full">Picture</button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
