import React from 'react'
import Banner from '../Component/Banner'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div>
                <Banner text="About us" />
                <p classNam>yaman</p>
            </div>
            <Footer />
        </>
    )
}

export default About