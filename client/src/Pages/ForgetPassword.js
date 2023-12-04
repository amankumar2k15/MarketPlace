import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ForgetPassword = () => {
    const [generatePass, setGeneratePass] = useState("")

    const handleGeneratePassword = (e) => {
        e.preventDefault()
        setGeneratePass(`${String.fromCharCode(65 + Math.random() * 26)}${String.fromCharCode(97 + Math.random() * 26)}!${Math.random().toString(36).slice(-10)}`)
    }

    return (
        <>
            <Navbar />
            <div className="w-full border border-dark p-4  ">
                <div className="my-40 border border-dark mx-auto banner  p-4 form  ">
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


                                {/* Email input */}
                                <h2 className="text-white text-3xl text-center">Forgot password</h2>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-light" htmlFor="loginName">
                                        Password
                                    </label>
                                    <input type="password" placeholder="Enter you password " required id="password" className="form-control"
                                        value={generatePass} />

                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label text-light" htmlFor="loginPassword">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="confirmPassword"
                                        id="confirmPassword"
                                        className="form-control"
                                        placeholder="Enter you confirm password "
                                        required
                                        value={generatePass}
                                    />

                                </div>

                                {/* Submit button */}
                                <div className="flex justify-center gap-2 flex-col sm:flex-row">
                                    <div className="text-center">
                                        <button type="submit" className="btn shadow hover:text-white hover:border-white"
                                            onClick={handleGeneratePassword}
                                        >
                                            Generate Password
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn shadow hover:text-white hover:border-white">
                                            Update Password
                                        </button>
                                    </div>
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

export default ForgetPassword;
