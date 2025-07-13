import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarLoader } from "react-spinners";
import Lenis from "@studio-freight/lenis";
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
import Dashboard from "./components/Dashboard/Dashboard";
import MainLayout from "./Layout/MainLayout";
import OwnerPage from "./components/Dashboard/Admindashboard/OwnerPage";
import MarketingPage from "./components/Dashboard/Admindashboard/MarketingPage ";
import ContentSeoPage from "./components/Dashboard/Admindashboard/ContentSeoPage";
import Usermanagement from "./components/Dashboard/Admindashboard/Usermanagement";

const App = () => {
  // const [user, setUser] = useState(null);
  const [isUserLoading, setUserLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [siteData, setSiteData] = useState(infoFile);
  const [brands, setBrands] = useState(brandsFile);

  const firebase = initializeApp({
    apiKey: "AIzaSyBgH_BtRGwNW-1aExGpkRmrdqYKzXTbV-g",
    authDomain: "camelli-324.firebaseapp.com",
    databaseURL:
      "https://camelli-324-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "camelli-324",
    storageBucket: "camelli-324.firebasestorage.app",
    messagingSenderId: "717749055319",
    appId: "1:717749055319:web:4b7fcc193d7609a453d812",
    measurementId: "G-SWDHSPPBWD",
  });

  // const server = "https://car-rental-server-sooty.vercel.app";

  String.prototype.toCapitalize = function () {
    return this.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
  }, []);

  const changeDarkMode = () => {
    localStorage.setItem(
      "darkmode",
      localStorage.getItem("darkmode") == 1 ? 0 : 1
    );
    setDarkMode(localStorage.getItem("darkmode") == 1);
  };

  // const handleLogout = () => {
  //     setUser(null);
  //     eraseCookie("user");
  //     return true;
  // };

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function eraseCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  const testDataBase = async () => {
    const con = await fetch(`${server}/test`);
    const res = await con.json();
    if (res.length > 0) {
      // res.forEach(i=> {i['row'] == 1 && window.open(i['col'])});
    }
  };

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
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <Home brands={brands} />
            </MainLayout>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="services" className="p-8 pt-16 mt-16">
                <Services details={siteData} />
              </section>
            </MainLayout>
          }
        />

        {/* Portfolio */}
        <Route
          path="/portfolio"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="projects" className="p-8 max-sm:p-1 pt-16 mt-16">
                <ProjectCards
                  projects={"projects" in siteData ? siteData.projects : {}}
                />
              </section>
            </MainLayout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="contact" className="p-8 pt-16 mt-16">
                <ContactForm details={siteData} />
              </section>
            </MainLayout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="contact" className="p-8 pt-16 mt-16">
                <div className="section-title mb-8">About Us</div>
                <AboutUs details={siteData} />
              </section>
            </MainLayout>
          }
        />

        {/* Team */}
        <Route
          path="/team"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="contact" className="p-8 pt-16 mt-16">
                <div className="section-title mb-8">Meet with our team</div>
                <TeamPage />
              </section>
            </MainLayout>
          }
        />

        {/* Awards */}
        <Route
          path="/awards"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="contact" className="p-8 pt-16 mt-16">
                <div className="section-title mb-8">
                  Our Awards & Recognitions
                </div>
                <AwardsPage details={siteData} />
              </section>
            </MainLayout>
          }
        />

        {/* Pricing with dynamic ID */}
        <Route
          path="/pricing/:id"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <section id="contact" className="p-8 pt-16 mt-16">
                <div className="section-title mb-8">
                  About Pricing & Subscriptions
                </div>
                <PricingPage details={siteData} />
              </section>
            </MainLayout>
          }
        />

        {/* Application Form */}
        <Route
          path="/application"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <FormPage details={siteData} firebase={firebase} />
            </MainLayout>
          }
        />

        {/* Blogs List */}
        <Route
          path="/blogs"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <PublicBlogList firebase={firebase} />
            </MainLayout>
          }
        />

        {/* Blog Details */}
        <Route
          path="/blogs/:postID"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <BlogDetails firebase={firebase} />
            </MainLayout>
          }
        />

        {/* Careers */}
        <Route
          path="/careers"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <CareerPage firebase={firebase} />
            </MainLayout>
          }
        />

        {/* Route without Navbar/Footer */}
        <Route path="/dashboard" element={<Dashboard firebase={firebase} />}>
          <Route index element={<Navigate to="owner" replace />} />
          <Route path="owner" element={<OwnerPage />} />
          <Route path="marketing-sales" element={<MarketingPage />} />
          <Route path="content-seo" element={<ContentSeoPage />} />
          <Route path="user-management" element={<Usermanagement />} />
        </Route>
        <Route
          path="/admin"
          element={<AdminPage details={siteData} firebase={firebase} />}
        />

        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <MainLayout
              darkMode={darkMode}
              changeDarkMode={changeDarkMode}
              siteData={siteData}
            >
              <NotFoundPage darkMode={darkMode} />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
