import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="w-full border border-dark p-4 ">
        <div className="my-40 border border-dark mx-auto banner  p-4 form  ">
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >


          </ul>
          {/* Pills navs */}
          {/* Pills content */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form>


                {/* Email input */}
                <h2 className="text-white text-3xl text-center">Sign-In</h2>
                <div className="form-outline mb-4">
                  <label className="form-label text-light" htmlFor="loginName">
                    Email
                  </label>
                  <input type="email" placeholder="Enter you email " required id="loginName" className="form-control" />

                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label className="form-label text-light" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    placeholder="Enter you email "
                    required
                  />

                </div>
                {/* 2 column grid layout */}
                <div className="row mb-4 ">

                  <div className="col-md-6  ">
                    {/* Simple link */}
                    <Link to="/forgetPassword" className="text-light">Forgot password?</Link>
                  </div>
                </div>
                {/* Submit button */}
                <div className="text-center">
                  <Link to="/dashboard" type="submit" className="btn shadow hover:text-white hover:border-white">
                    Signin
                  </Link>
                </div>
                {/* Register buttons */}
                <div className="text-center">
                  <p className="text-white mt-2">
                    Not a member? <Link to="/register" className="hover:text-gray-500">Register</Link>
                  </p>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >

            </div>
          </div>
          {/* Pills content */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
