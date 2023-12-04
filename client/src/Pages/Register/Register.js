import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Navbar from '../../Component/Navbar'

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="w-full border border-dark p-4 text-white">
        <div className="mt-20 border border-dark mx-auto banner  p-4 form  ">
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-3 "
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
                <div className="text-center mb-3">
                  <h2 className="text-white text-3xl text-center">Register</h2>
                </div>
                {/* Username input */}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    placeholder='Enter your username'
                  />
                 
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    placeholder='Enter your email'
                  />
                  
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    placeholder='Enter your password'
                  />
                  
                </div>
                {/* Repeat Password input */}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerRepeatPassword">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                    placeholder='Enter your repeat password'
                  />
                  
                </div>
                {/* Checkbox */}

                {/* Submit button */}
                <div className="text-center">
                  <Link to="/dashboard" type="submit" disable className="btn shadow hover:text-white hover:border-white">
                    Register
                  </Link>
                </div>
                {/* Register buttons */}
                <div className="text-center">
                  <p className="text-white mt-2">
                    Already have an account? <Link to="/Signin" className="hover:text-gray-500">Sign-in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* Pills content */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register