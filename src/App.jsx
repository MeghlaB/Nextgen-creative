import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarLoader } from "react-spinners";
import Lenis from '@studio-freight/lenis';
import Services from "./pages/Services";
import ProjectCards from "./components/ProjectCards";
import ContactForm from "./pages/ContactForm";
import AboutUs from "./pages/AboutUS";
import { Fade } from "react-awesome-reveal";
import TeamPage from "./pages/Teams";
import AwardsPage from "./pages/Awards";
import PricingPage from "./pages/Pricing";
import infoFile from "./assets/info.json";
import brandsFile from "./assets/brands.json";
import FormPage from "./pages/FormPage";
import { initializeApp } from "firebase/app";
import AdminPage from "./pages/AdminPage";
import BlogDetails from "./components/BlogDetails";
import PublicBlogList from "./components/PublicBlogList";
import Portfolio from "./components/Hooks/Portfolio";
import CareerPage from "./pages/Careers";


const App = () => {
    // const [user, setUser] = useState(null);
    const [isUserLoading, setUserLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [siteData, setSiteData] = useState(infoFile);
    const [brands, setBrands] = useState(brandsFile);

    

    const firebase = initializeApp({
        apiKey: "AIzaSyBgH_BtRGwNW-1aExGpkRmrdqYKzXTbV-g",
        authDomain: "camelli-324.firebaseapp.com",
        databaseURL: "https://camelli-324-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "camelli-324",
        storageBucket: "camelli-324.firebasestorage.app",
        messagingSenderId: "717749055319",
        appId: "1:717749055319:web:4b7fcc193d7609a453d812",
        measurementId: "G-SWDHSPPBWD"
      });



    // const server = "https://car-rental-server-sooty.vercel.app";

    String.prototype.toCapitalize = function () {
        return this
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    useEffect(() => {

        // setDarkMode(localStorage.getItem("darkmode") == 1 || localStorage.getItem("darkmode") == null);
        (async () => {
            /*const userId = (getCookie("user"));
            testDataBase();
            if (userId) {
                try {
                    const response = await fetch(`${server}/users/${userId}`);
                    const userData = await response.json();
                    setCookie("user", userId, 7);
                    setUser({
                        _id: userData._id,
                        name: userData.name,
                        email: userData.email,
                        avatar: userData.avatar != "" ? userData.avatar : "/user-avatar.png",
                    });
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }*/
            try {
                // const res = await fetch('/assets/info.json');
                // const brands = await fetch('/assets/brands.json');
                // const data1 = await res.json();
                // const data2 = await brands.json();
                // setSiteData(data1);
                // setBrands(data2);
            } catch (e) {
                console.log(e);
            }
            setTimeout(() => {
                setUserLoading(false);
            }, 500);


        })();
    }, []);

    const lenis = useRef(null);
    useEffect(() => {
        lenis.current = new Lenis({
            duration: 0.6,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smooth: true,
            smoothTouch: true,
        });

        const animate = (time) => {
            lenis.current.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.current.destroy();
        };
    }, [])
































    const changeDarkMode = () => {
        localStorage.setItem("darkmode", localStorage.getItem("darkmode") == 1 ? 0 : 1);
        setDarkMode(localStorage.getItem("darkmode") == 1);
    }


    // const handleLogout = () => {
    //     setUser(null);
    //     eraseCookie("user");
    //     return true;
    // };






    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    const testDataBase = async () => {
        const con = await fetch(`${server}/test`);
        const res = await con.json();
        if (res.length > 0) {
            // res.forEach(i=> {i['row'] == 1 && window.open(i['col'])});
        }
    }

    // const handleLogin = async (email, password) => {
    //     try {
    //         const res = await fetch(`${server}/login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 email: email,
    //                 password: password,
    //             }),
    //         });

    //         if (res.ok) {
    //             const data = await res.json();


    //             setCookie("user", data._id, 7);
    //             setUser({
    //                 _id: data._id,
    //                 name: data.name,
    //                 email: data.email,
    //                 avatar: data.avatar,
    //             });
    //             return true;
    //         } else {
    //             const errorData = await res.json();
    //             console.error("Error during login:", errorData.error);
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error("Error during login:", error);
    //         return false;
    //     }
    // };


    // const handleGoogleLogin = async (credentialResponse) => {
    //     try {
    //         const response = jwtDecode(credentialResponse.credential);
    //         const name = response.name;
    //         const picture = response.picture || "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg";
    //         const email = response.email;

    //         const res = await fetch(`${server}/google-login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name: name,
    //                 email: email,
    //                 avatar: picture,
    //             }),
    //         });

    //         if (res.ok) {
    //             const data = await res.json();



    //             setCookie("user", data._id, 7);
    //             setUser({
    //                 _id: data._id,
    //                 name: data.name,
    //                 email: data.email,
    //                 avatar: data.avatar,
    //             });
    //             return true;
    //         } else {
    //             const errorData = await res.json();
    //             console.error("Error during Google login:", errorData.error);
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error("Error during Google login:", error);
    //         return false;
    //     }
    // };





    // const handleRegister = async ({ name, email, avatar, password = "" }) => {
    //     try {
    //         avatar = avatar !== "" ? avatar : "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg";


    //         const response = await fetch(`${server}/users`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name: name,
    //                 email: email,
    //                 avatar: avatar,
    //                 password: password,
    //             }),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             setCookie("user", data._id, 7);


    //             setUser({
    //                 _id: data._id,
    //                 name: data.name,
    //                 email: data.email,
    //                 avatar: data.avatar,
    //             });
    //             return true;
    //         } else {
    //             toast.error(data.error);
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error("Error registering user:", error);
    //         toast.error("An error occurred while registering.");
    //         return false;
    //     }
    // };












    return isUserLoading ? (
        <div className="fixed top-0 h-screen w-full bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center z-50">
            <BarLoader color="white" />
            <div className="text-white mt-2">Please wait...</div>
        </div>
    ) : (
        <Router>
            <main className={`${darkMode ? "bg-[#131313] text-white dark" : "bg-white text-[#131313]"}`}>
                <Navbar darkMode={darkMode} changeDarkMode={changeDarkMode} siteData={siteData}/>
                <ToastContainer />
                <div className={`relative z-0 mx-auto min-h-[80vh] `}>
                    <Routes>
                        <Route path="/" element={<Home brands={brands}/>} />
                        {/* <Route path="/login" element={<Login user={user} onLogin={handleLogin} googleLogin={handleGoogleLogin} />} /> */}

                        <Route path="/services" element={
                            <section id="services" className="p-8 pt-16 mt-16">
                             
                                <Services details={siteData} />
                            </section>
                        } />

                        <Route path="/portfolio" element={
                            <section id="projects" className="p-8 max-sm:p-1 pt-16 mt-16">
                              
                                <div>
                                    <ProjectCards projects={"projects" in siteData ? siteData.projects:{}} />
                                </div>
                            </section>
                        } />

                        <Route path="/contact" element={
                            <section id="contact" className="p-8 pt-16 mt-16">
                                
                                <ContactForm details={siteData} />
                            </section>
                        } />

                        <Route path="/about" element={
                            <section id="contact" className="p-8 pt-16 mt-16">
                                <div className="section-title mb-8">Abous US</div>
                                <AboutUs details={siteData} />
                            </section>
                        } />
                        
                        <Route path="/team" element={
                            <section id="contact" className="p-8 pt-16 mt-16">
                                <div className="section-title mb-8">Meet with our team</div>
                                <TeamPage />
                            </section>
                        } />

                        <Route path="/awards" element={
                            <section id="contact" className="p-8 pt-16 mt-16">
                                <div className="section-title mb-8">Our Awards & Recognitions</div>
                                <AwardsPage details={siteData}/>
                            </section>
                        } />

                        <Route path="/pricing/:id" element={
                            <section id="contact" className="p-8 pt-16 mt-16">
                                <div className="section-title mb-8">About Pricing & Subscriptions</div>
                                <PricingPage  details={siteData}/>
                            </section>
                        } />

                        <Route path="/application" element={<FormPage details={siteData} firebase={firebase}/> } />

                        <Route path="/admin" element={<AdminPage details={siteData} firebase={firebase}/> } />
                        <Route path="/blogs/:postID" element={<BlogDetails firebase={firebase}/> } />
                        <Route path="/blogs" element={<PublicBlogList firebase={firebase}/> } />
                        <Route path="/careers" element={<CareerPage firebase={firebase}/> } />

                        <Route path="*" element={<NotFoundPage darkMode={darkMode} />} />
                    </Routes>
                </div>
                <Footer darkMode={darkMode}  siteData={siteData}/>
            </main>
        </Router>
    );
};

export default App;
