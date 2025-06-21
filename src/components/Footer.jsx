import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const FooterSection = ({ siteData = [] }) => {
    // console.log(siteData.services)
    return (
        <div
            className="footer-section bg-cover bg-center text-gray-500 py-12"
            style={{
                backgroundImage: "url('https://preview.uideck.com/items/consult/assets/images/footer-bg.jpg')",
            }}
        >
            <div className="w-10/12 mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* CONSULT Column */}
                <div className="text-justify">
                    <h2 className="text-xl font-bold mb-2 text-gray-700">
                        <img src="/logo.png" width={150} />
                    </h2>
                    <div className="my-6">
                        <div className="text-left font-bold text-xl">Empowering Innovation</div>
                        At {siteData.siteName}, we craft cutting-edge software and web solutions that drive business growth. With a focus on innovation, scalability, & seamless user experiences, we turn ideas into reality. 🚀
                    </div>
                </div>

                {/* SERVICES Column */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-gray-700">SERVICES</h2>
                    <ul className="space-y-6 mt-6">
                        {siteData.services.map((item, index) => {
                            return <li key={index}>
                                <Link to="/services/" onClick={() => {window.scrollTo({top: 0,behavior: "smooth"});}}>{item.title}</Link>
                            </li>
                        })}
                    </ul>
                </div>

                {/* ABOUT US Column */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-gray-700">ABOUT US</h2>
                    <ul className="space-y-6 mt-6">
                        <li ><Link to="/about/" onClick={() => {window.scrollTo({top: 0,behavior: "smooth"});}}>Overview</Link></li>
                        <li ><Link to="/#why-choose-us" onClick={() => {window.scrollTo({top: 0,behavior: "smooth"});}}>Why us</Link></li>
                        <li ><Link to="/awards" onClick={() => {window.scrollTo({top: 0,behavior: "smooth"});}}>Awards & Recognitions</Link></li>
                        <li><Link to="/team" onClick={() => {window.scrollTo({top: 0,behavior: "smooth"});}}>Team</Link></li>
                    </ul>
                </div>

                {/* CONTACT INFO Column */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-gray-700">CONTACT INFO</h2>
                    <ul>
                        <li >{siteData.siteAddress}</li>
                        <li ><a href={`mailto:${siteData.siteEmail}`} className="hover:text-gray-400">{siteData.siteEmail}</a></li>
                        <li >Mobile: <a href={`tel:${siteData.sitePhone}`} className="hover:text-gray-400">{siteData.sitePhone}</a></li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        {/* Social Media Icons */}
                        <a href={`https://facebook.com/${siteData.facebook}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                            <FaFacebook />
                        </a>
                        <a href={`https://twitter.com/${siteData.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                            <FaTwitter />
                        </a>
                        <a href={`https://instagram.com/${siteData.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                            <FaInstagram />
                        </a>
                        <a href={`https://linkedin.com/in/${siteData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                            <FaLinkedin />
                        </a>
                        <a href={`https://wa.me/${siteData.WhatsApp}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Text */}
            <div className="text-center mt-12 text-sm">
                All Rights Reserved by {siteData.siteName}. © 2022 - {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default FooterSection;
