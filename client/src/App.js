import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Banner from "./Component/Banner";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardProducts from "./Pages/Dashboard/DashboardProducts";
import AllCategories from "./Pages/Dashboard/AllCategories";
import ForgetPassword from "./Pages/ForgetPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/signIn" element={<SignIn />}>
        </Route>
        <Route path="/forgetPassword" element={<ForgetPassword />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/AllCategories" element={<AllCategories />}></Route>
          <Route path="/dashboard/DashboardProduct" element={< DashboardProducts />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
