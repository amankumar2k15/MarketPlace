import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = () => {
    axios.get("http://localhost:5000/user/get-users").then((res) => {
      console.log(res.data.result)
      setProducts(res.data.result)
    }).catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>

      <div className="flexProduct mt-24 mb-10">
        {products?.map((item, index) => {
          return (
            <div key={index} className="flex p-2">
              <div className="bgColor text-light ">
                <img src={`http://localhost:5000/${item.avatar}`} alt="img-cars" className="image" />
                <p className="text-center ">

                  {item.email}
                  <br /> <span>{item.firt_name}</span>
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </>
  );
};


export default AllCategories;