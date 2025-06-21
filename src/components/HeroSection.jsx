import React from "react";
import { Parallax } from "react-parallax";

const HeroSection = () => {
    return (
        <Parallax
            className="hero-section bg-cover bg-center flex items-center"
            bgImage="https://preview.uideck.com/items/consult/assets/images/header-hero.jpg"
            strength={150}
            bgImageStyle={{backgroundSize: "cover", backgroundPosition: "center"}}
        >
            <div className="w-10/12 mx-auto px-6 flex flex-wrap items-center py-40">
                <div className="w-full lg:w-1/2 text-black">
                    <h1 className="text-5xl font-bold leading-snug">
                        <div className="space-x-3">
                            <span>Through</span>
                            <span className="text-green-700">Experts</span>
                        </div>      
                        <div className="space-x-3">
                            <span>Empowering</span>  
                            <span className="text-green-700">Innovation</span>
                        </div>                             
                    </h1>
                    <div className="mt-4 text-lg text-gray-500 text-justify">
                        <span>Unlock unparalleled efficiency and innovation with our expertise—seamlessly integrating precision, adaptability, and strategic growth to drive exceptional performance in every aspect of your journey.</span>
                    </div>
                    <div className="mt-2 shadow focus-within:shadow-lg flex items-center w-full max-lg:border-[1px] max-lg:border-green-800 rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="user@domain.com"
                            className=" w-10/12 p-3 rounded-l-lg text-gray-800 bg-white/50 outline-none"
                        />
                        <button className="w-2/12 min-w-fit bg-green-700  text-white p-3  hover:cursor-pointer hover:bg-green-800">
                            SIGN UP
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="https://preview.uideck.com/items/consult/assets/images/hero-image.png"
                        alt="Consultancy Illustration"
                        className="w-full max-w-sm md:max-w-md object-cover"
                    />
                </div>
            </div>
        </Parallax>
    );
};

export default HeroSection;
