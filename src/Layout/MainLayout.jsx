// File: layouts/MainLayout.jsx
import React from "react";

import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

const MainLayout = ({ children, darkMode, changeDarkMode, siteData }) => {
  return (
    <main className={`${darkMode ? "bg-[#131313] text-white dark" : "bg-white text-[#131313]"}`}>
      <Navbar darkMode={darkMode} changeDarkMode={changeDarkMode} siteData={siteData} />
      <ToastContainer />
      <div className="relative z-0 mx-auto min-h-[80vh]">
        {children}
      </div>
      <FooterSection darkMode={darkMode} siteData={siteData} />
    </main>
  );
};

export default MainLayout;
