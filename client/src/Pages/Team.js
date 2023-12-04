import React from "react";
import img1 from "../assets/yaman.jpg";
import img2 from "../assets/aman.jpg";
import img3 from "../assets/shivam.jpg";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const Team = () => {
    let images = [
        {
            src: img1,
            productName:
                "Hi,I am a dedicated web developer, driven by a profound passion for crafting captivating online experiences. With a strong foundation in HTML, CSS, and JavaScript, I transform ideas into pixel-perfect, interactive websites. My design sensibility, coupled with a commitment to user-centric development, ensures that every project I undertake not only looks stunning but functions seamlessly.In my journey, I have honed my skills in responsive design, ensuring that your website looks amazing on all devices. I also bring expertise in optimizing performance, ensuring lightning-fast load times and smooth user interactions.Collaboration is at the heart of my process, as I believe in working closely with clients to bring their visions to life. Together, we can create digital solutions that stand out in the digital landscape.Let's embark on this web development adventure together and bring your online presence to new heights."
            
        },
        {
            src: img2,
            productName:
                "I'm a devoted web designer, driven by a significant energy for creating spellbinding internet based encounters. With a solid groundwork in HTML, CSS, and JavaScript, I change thoughts into pixel-great, intuitive sites. My plan reasonableness, combined with a promise to client driven advancement, guarantees that each task I embrace looks shocking as well as capabilities consistently.In my excursion, I have leveled up my abilities in responsive plan, guaranteeing that your site looks astonishing on all gadgets. I likewise acquire skill streamlining execution, guaranteeing lightning-quick burden times and smooth client cooperations. Coordinated effort is at the core of my cycle, as I have faith in working intimately with clients to rejuvenate their dreams. Together, we can make computerized arrangements that hang out in the advanced scene.We should set out on this web advancement experience together and carry your internet based presence higher than ever."
         
        },
        {
            src: img3,
            productName:
                "Greetings! I am a dedicated web developer, passionate about crafting immersive digital experiences. With a strong foundation in HTML, CSS, JavaScript, and a knack for responsive design, I specialize in bringing creative visions to life. From dynamic e-commerce platforms to sleek corporate websites, I thrive on turning ideas into functional, user-friendly realities.My proficiency extends to various frameworks and libraries, ensuring seamless integration of features and functionalities. I have a keen eye for detail and a commitment to clean, efficient code that not only looks great but also performs optimally.Explore my portfolio to witness the fusion of innovation and expertise, and let's embark on a journey to redefine digital excellence."
         
        },
    ];

    return (
        <>
           <Navbar />
            <div className=" mt-32 mb-20 container mx-auto">
                <div className=" gap-20 flex flex-col justify-center sm:justify-between ">
                    {images.map((item, index) => {

                        return (
                            <div key={index} className=" w-full flex gap-2 ">
                                <div className=" flex flex-col md:flex-row justify-center gap-2 md:gap-0">
                                    <div className="img md:w-4/12 w-full flex justify-center">
                                        <img src={item.src} className="w-[300px] h-[300px] rounded-full " />
                                    </div>
                                    <div className="border md:w-7/12 w-full px-3 text-justify">
                                        <p>{item.productName}</p> <span>{item.Price}</span>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Team;