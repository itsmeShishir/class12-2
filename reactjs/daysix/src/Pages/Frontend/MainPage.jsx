import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function MainPage() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>;
}

export default MainPage;
