import React from 'react'
import Dashboard from './Dashboard'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { AiFillDelete } from "react-icons/ai"

const DashboardProducts = () => {
  const BASE_URL = "http://localhost:5000"
  const [details, setDetails] = useState([])

  //get Products
  const getProducts = () => {
    axios.get(`${BASE_URL}/user/get-products`).then((res) => {
      console.log(res.data.result)
      setDetails(res.data.result)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/user/delete-product/${id}`).then((res) => {
      console.log(res)
      getProducts()
    }).catch((err) => console.log(err))
  }

  return (
    <div className='mt-10'>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bolder">Sr No.</th>
                    <th scope="col" className="px-6 py-4 font-bolder">Username</th>
                    <th scope="col" className="px-6 py-4 font-bolder">Product Name</th>
                    <th scope="col" className="px-6 py-4 font-bolder">Product Price</th>
                    <th scope="col" className="px-6 py-4 font-bolder">Created At</th>
                    <th scope="col" className="px-6 py-4 font-bolder">Action</th>
                  </tr>
                </thead>
                <tbody>

                  {details.map((item, index) => {
                    return (
                      <tr key={index} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-bold">{index + 1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">{item.username}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item.product_name}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item.product_price}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item?.created_at.slice(0, 10)}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">
                          <AiFillDelete className='hover:text-red-700 cursor-pointer' size={20}
                            onClick={() => handleDelete(item._id)}
                          />
                        </td>
                      </tr>
                    )
                  })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DashboardProducts;