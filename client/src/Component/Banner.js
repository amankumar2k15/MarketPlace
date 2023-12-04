import React from "react";

const Banner = (props) => {
  return (
    <>
      <div className="banner-area border banner border-dark text-5xl ">
        <div className="bg-gradient-to-r from-[#00095e] to-[#0c0c1f]   py-24 px-16">
          <h2 className="text-6xl font-bold text-light">{props.text}</h2>
          <p className="text-lg mt-2 text-light">
            Dreaming of a shopping spree? Get in touch with us today!
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
