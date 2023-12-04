import React from 'react'
import ContactForm from '../Component/ContactForm'
import { BiHomeCircle } from "react-icons/bi"
import { BsEnvelopeOpen } from "react-icons/bs"
import { CiMobile4 } from "react-icons/ci"
import Banner from '../Component/Banner'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className=' text-white mt-20' >
                <Banner text="Contact us" />
                <div className='py-28 flex flex-col sm:flex-row justify-center w-full sm:flex-wrap items-center'>
                    {/* left  */}
                    <iframe
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.96412105256246!2d77.07323157128543!3d28.586996230465697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bee299b98b5%3A0xd5e467baf55d19a8!2sE%20596%2C%20Rd%20No.%20224%2C%20Sector%207%2C%20Block%20F%2C%20Palam%20Extension%2C%20Palam%2C%20New%20Delhi%2C%20Delhi%2C%20110077!5e0!3m2!1sen!2sin!4v1694668395599!5m2!1sen!2sin"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className=' h-[500px] w-full px-10'
                    />
                </div>

                <div className='px-8 pb-16 sm:px-20 flex flex-col sm:flex-row w-full gap-4 sm:gap-0 sm:flex-wrap justify-between sm:justify-evenly'>
                    <div className='flex gap-10 flex-col w-full  sm:w-8/12 '>
                        <h1 className='text-black text-3xl'>Get in Touch</h1>
                        <ContactForm />
                    </div>
                    <div className='flex  flex-row w-full sm:w-[250px]'>

                        {/* {right side} */}
                        <div className="flex gap-8 flex-col">
                            <div className="flex gap-2 flex-row">
                                <span className="">
                                    <BiHomeCircle className='text-black' size={30} />
                                </span>
                                <div className="text-black  flex flex-col gap-2">
                                    <h3>Buttonwood, California.</h3>
                                    <p className='text-gray-500'>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-row">
                                <span className="flex flex-row">
                                    <CiMobile4 className='text-black ' size={30} />
                                </span>
                                <div className="text-black flex flex-col gap-2">
                                    <h3>+1 253 565 2365</h3>
                                    <p className='text-gray-500'>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-row">
                                <span className="flex flex-row">
                                    <BsEnvelopeOpen className='text-black' size={30} />
                                </span>
                                <div className="text-black flex flex-col gap-2">
                                    <h3>support@colorlib.com</h3>
                                    <p className='text-gray-500'>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}





export default Contact