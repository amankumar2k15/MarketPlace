import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai"

const Products = () => {
  const [products, setProducts] = useState({
    data: [],
    totalPages: 0,
    nextPage: false,
    previousPage: false,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const BASE_URL = "http://localhost:5000"
  const [initialData, setInitialData] = useState({
    product_name: "",
    product_price: "",
    username: "",
    avatar: ""
  })


  const handleInput = (e) => {
    const { id, value } = e.target
    setInitialData((preState) => ({ ...preState, [id]: value }))
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInitialData((prevData) => ({ ...prevData, avatar: file }));
    }
  }

  const handleAddProduct = () => {
    if (!initialData.product_name) return alert("Product Name is missing");
    else if (!initialData.product_price) return alert("Product Price is missing");
    else if (!initialData.username) return alert("Username is missing");
    else if (!initialData.avatar) return alert("Product Image is missing");

    const formData = new FormData();
    formData.append("product_name", initialData.product_name);
    formData.append("product_price", initialData.product_price);
    formData.append("username", initialData.username);
    formData.append("avatar", initialData.avatar);

    axios.post(`${BASE_URL}/user/create-product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then((res) => {
      console.log(res);
      getProducts()
      setModal(false)
    }).catch((err) => {
      console.log(err.response ? err.response.data : err);
    });
  }


  //get Products
  const getProducts = () => {
    axios.get(`${BASE_URL}/user/get-paginatedProducts?page=${currentPage}&limit=6`).then((res) => {
      console.log(res.data)
      setProducts({
        data: res.data.result,
        totalPages: res.data.all_pages,
        previousPage: currentPage > 1,
        nextPage: currentPage < res.data.all_pages,
      });
      setLoading(false)
      if (res) {
        setInitialData({
          product_name: "",
          product_price: "",
          username: "",
          avatar: ""
        });
      }
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }


  useEffect(() => {
    getProducts()
  }, [currentPage])

  //For buttons
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= products.totalPages; i++) {
      buttons.push(
        <button className={` ${i === currentPage ? "bg-gray-600" : "bg-gray-300"} flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100  hover:text-gray-700 `}
          key={i} disabled={i === currentPage} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <>
      <Navbar />
      <div className="flexProduct mt-24 mb-10 max-w-[800px] mx-auto">
        <div className="bg-black fixed right-4 cursor-pointer shadow shadow-black text-white w-10 h-10 flex items-center justify-center" title="Add Product"
          onClick={() => setModal(!modal)}
        >
          <AiOutlinePlus size={20} />
        </div>

        {modal && (
          < div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-gray-900 mt-20 text-white py-10  px-4 rounded-md  w-[300px] flex flex-col justify-between">

              {/* Post Product API  */}
              <form className="flex flex-col flex-wrap gap-3">
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" id="product_name" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product-name"
                    value={initialData.product_name}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price</label>
                  <input type="text" id="product_price" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product-price"
                    value={initialData.product_price}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" id="username" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username"
                    value={initialData.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white-900 " htmlFor="user_avatar">Product Img</label>
                  <input className="block w-full text-sm text-white rounded-lg cursor-pointer  dark:placeholder-gray-400" aria-describedby="user_avatar_help"
                    id="avatar"
                    type="file"
                    onChange={handleFileInput} />
                </div>
              </form>

              <button className="text-white bg-gray-700 py-3 mt-4 rounded-lg transition-all duration-200 ease-in-out" onClick={handleAddProduct}>Add Modal</button>
              <button className="text-white bg-gray-700 py-3  mt-2 rounded-lg transition-all duration-200 ease-in-out" onClick={() => setModal(!modal)}>Close Modal</button>
            </div>
          </div>
        )}


        {/* ===============================================Get Products Data======================================= */}
        {loading ? (
          <div className="text-3xl">loading...</div>
        ) : (
          products.data.map((item, index) => {
            return (
              <div key={index} className="flex p-2  ">
                <div className=" bgColor text-light ">
                  <img src={`${BASE_URL}/${item.avatar.replace(/\\/g, "/")}`} className="image " />
                  <p className="text-center ">
                    {item.product_name}
                    <br /> <span>{item.product_price}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* -----------------------------------Pagination-------------------------------------------- */}
      <div className="flex flex-col items-center mb-6">
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 "
            disabled={!products.previousPage}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          <div className="flex flex-row justify-center items-center">
            {renderPaginationButtons()}
          </div>

          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900"
            disabled={!products.nextPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {/* -----------------------------------Pagination-------------------------------------------- */}
    </>
  );
}

export default Products;