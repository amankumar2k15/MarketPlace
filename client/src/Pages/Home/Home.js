import React from "react";
import cart from "../../assets/cart2.jpg"
import { Link } from "react-router-dom"
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";


const Home = () => {

  return (
    <>
      <Navbar />

      <body className="all">

        {/*Banner*/}
        <section className="banner-section py-20 flex justify-between flex-wrap ">


          <div className="p-4 leading-10 max-[1524px]:w-full">
            <p className="text-light">Hi,</p>
            <p className="text-8xl text-light custom-text max-[878px]:text-6xl max-[510px]:text-5xl max-[388px]:text-4xl max-[296px]:text-3xl">
              Welcome to
            </p>
            <p className="text-8xl text-light custom-text max-[878px]:text-6xl max-[510px]:text-5xl max-[388px]:text-4xl max-[296px]:text-3xl">
              Marketplace
            </p>
            <p className="text-light px-2 py-4">
              we have constructed a framework where you can sell your items as
              well as purchase an item.
            </p>
            <div className="   ">
              <Link to="/signIn" className="text-light border border-light  rounded-md btn  w-25 button ">
                Sign in
              </Link>
              <br />
              <Link to="/register" className="text-dark bg-white mt-2 rounded-md btn  w-25 button">
                Register
              </Link>
            </div>
          </div>
          <div className="p-4 max-[1524px]:w-full  max-[1524px]:h-3/5">
            <img
              src={cart}
              className="max-[1524px]:w-screen max-[1524px]:h-3/5"
            ></img>
          </div>
        </section>
        {/*Banner*/}
        {/**/}
        {/*Services*/}
        <section className="">
          <div className=" text-center custom-fonts p-4">
            <p className=" color ">Our Services</p>
            <p className="text-4xl    max-[828px]:text-3xl max-[504px]:text-2xl ">Sell and Purchase</p>
            <p className="text-4xl  max-[828px]:text-3xl max-[504px]:text-2xl ">Products</p>
          </div>
          <div className="flex justify-around  flex-wrap p-4 gap-x-6">
            <div className=" text-center  bg-white box-shadow"><i className="fa-solid fa-chair color text-3xl p-2"></i>
              <p className="py-4 custom-fonts font-bold">Furniture</p>
              <div className="p-4 text-center  text-light background"><p>"Life is a journey; embrace each moment, learn from experiences, and </p><p>savor the beauty of the world around you."</p> </div>
            </div>
            <div className=" text-center  box-shadow"><i className="fa-solid fa-lightbulb color text-3xl p-2"></i>
              <p className="py-4 custom-fonts font-bold bg-white ">Electronics</p>
              <div className="p-4 text-center text-light  background"><p>"Life is a journey; embrace each moment,learn from experiences,</p><p> and savor the beauty of the world around you."</p></div>
            </div>

          </div>
          <div className="flex justify-around flex-wrap p-4  gap-x-6">
            <div className=" text-center bg-white box-shadow"><i className="fa-solid fa-car color text-3xl p-2" ></i>
              <p className="py-4 custom-fonts font-bold">vehicle</p>
              <div className="p-4 text-center text-light  background"><p>"Life is a journey; embrace each moment, learn from experiences, and </p><p>savor the beauty of the world around you."</p></div>
            </div>
            <div className=" text-center  bg-white box-shadow"><i className="fa-solid fa-mobile color text-3xl p-2"></i>
              <p className="py-4 custom-fonts font-bold">Mobile</p>
              <div className="p-4 text-center text-light background"><p>"Life is a journey; embrace each moment,learn from experiences,</p><p> and savor the beauty of the world around you."</p></div></div>

          </div>
        </section>
        {/*Services*/}

      </body>
      <Footer />
    </>
  );
};

export default Home;
