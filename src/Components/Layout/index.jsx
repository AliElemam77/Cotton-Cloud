import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/Index";
import { Outlet } from "react-router-dom";
import WhatsAppLogo from "../WhatsappButton";

function index() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-5 right-5">
        <WhatsAppLogo />
      </div>
    </>
  );
}

export default index;
