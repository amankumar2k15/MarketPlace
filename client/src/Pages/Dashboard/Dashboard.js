import React from "react";
import { Link, Outlet } from "react-router-dom";
import img from "../../assets/1.jpg";

const Dashboard = () => {
  return (
    <>
      <section className="flex">
        <div className=" top-0   fixed left-0 bottom-0 p-20 banner w-25  grid items-center">
          <div className=" border fixed    ">
            <Link
              to="/dashboard/AllCategories"
              className="btn shadow hover:text-white hover:border-white px-20 my-10"
            >
              Category
            </Link>
            <br />
            <Link
              to="/dashboard/DashboardProduct"
              className="btn shadow hover:text-white hover:border-white px-20"
            >
              Products
            </Link>
            <br />
            <Link
              to="/dashboard/Userdata"
              className="btn shadow hover:text-white hover:border-white px-20 my-10"
            >
              Userdata
            </Link>
          </div>
        </div>
        <div className="top-0   fixed  right-0  bottom-0 w-75">
          <div className="  flex justify-between items-center bg-slate-500 p-2">
            <p>
              <i className="fa-solid fa-bars"></i>
            </p>
            <div className="flex h-10 gap-3 items-center">
              <input
                type="text"
                placeholder="Enter Category"
                className="border rounded p-2 "
              />
              <span>
                <i className="fa-sharp fa-solid fa-magnifying-glass rounded-circle    banner text-light p-2"></i>
              </span>
            </div>
            <div className="  text-center">
              <div>
                <img src={img} className="h-10 w-10 rounded-circle" />
                <i className="fa-sharp fa-solid fa-caret-down "></i>
              </div>
            </div>
            <Link to="/product"
              className="text-black" >Back to Product
            </Link>
          </div>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
