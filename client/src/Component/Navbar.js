import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {


    return (
        <>
            {/*Navbar*/}
            <section>
                <div className=" text-light  banner z-50 fixed right-0 left-0 top-0   flex  justify-between p-4">
                    <Link to="/" className="text-3xl max-[570px]:text-2xl custom-text ">
                        MarketPlace
                    </Link>
                    <ul className="flex  justify-between  w-25">
                        <Link to="/" className="max-[1330px]:hidden  tracking-wide  routes custom-fonts">
                            Home
                        </Link>
                        <Link to="/about" className="max-[1330px]:hidden tracking-wide routes custom-fonts">
                            About
                        </Link>
                        <Link to="/contact" className="max-[1330px]:hidden tracking-wide routes custom-fonts">
                            Contact
                        </Link>
                        <Link to="/product" className="max-[1330px]:hidden tracking-wide routes custom-fonts">
                            Products
                        </Link>
                        <Link to="/team" className="max-[1330px]:hidden tracking-wide routes custom-fonts">
                            Team
                        </Link>
                        <Link>
                            <i className="fa-solid fa-bars fixed hidden max-[1330px]:block max-[1330px]:right-10 max-[1330px]:absolute max-[1330px]:top-9  max-[570px]:top-8 "></i>
                        </Link>
                    </ul>
                </div>
            </section>
            {/*Navbar*/}
        </>
    )
}

export default Navbar