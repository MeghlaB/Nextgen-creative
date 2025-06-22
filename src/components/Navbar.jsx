import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const pageTitleFirst = typeof document != "undefined" ? document?.title : siteData.siteName;
const Navbar = ({siteData}) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTopScrollY, setIsTopScrollY] = useState(location.pathname == "/");
    const [pageTitle, setPageTitle] = useState(pageTitleFirst);

    useEffect(() => {
        if(location.pathname == "/"){
            document.title = pageTitleFirst;
        }else{
            document.title = `${pageTitleFirst} - ${location.pathname.replace("/", "").toCapitalize()}`;
        }

        document.querySelectorAll("nav a").forEach((link) => {
            link.classList.remove("!text-green-700");
            if (link.getAttribute("href") === location.pathname) {
                link.classList.add("!text-green-700");              
                if(!document?.querySelector(location?.hash || "#null")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                })){
                    location.hash == "" && window.scrollTo({top: 0,left: 0,behavior: "smooth",});
                }
            }
        });

        setIsTopScrollY(location.pathname == "/" && (window.pageYOffset || document.documentElement.scrollTop) <= 100);
        const handleScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            setIsTopScrollY(location.pathname == "/" && currentScroll <= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location]);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTopScrollY ? "!bg-transparent !shadow-none py-4" : "bg-white shadow-md py-2"}`}>
            <div className="w-10/12 mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-gray-800 w-[150px]">
                    <img src={siteData.siteLogo} className={`transition-all w-[${isTopScrollY ? 150 : 120}px]`} />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 focus:outline-none lg:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${!isMenuOpen ? "max-lg:translate-y-[-200%]" : "max-lg:translate-y-0"} transition-all lg:flex lg:items-center lg:space-x-8 bg-white lg:bg-transparent absolute lg:static w-full lg:w-auto left-0 top-[100%] lg:top-auto lg:mt-0 p-4 lg:p-0 shadow-lg lg:shadow-none`}
                >
                    <li>
                        <Link to="/about" className="navbar-item">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/awards" className="navbar-item">
                            Awards
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="navbar-item">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="navbar-item">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="navbar-item">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/team" className="navbar-item">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className="navbar-item">
                           Careers
                        </Link>
                    </li>
                </ul>

                {/* Call to Action Button */}
                <div className="hidden lg:block">
                    <Link
                        to="/contact"
                        className="bg-green-700 !text-white px-6 py-3 my-1 inline-block rounded-full hover:bg-green-800 transition duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;