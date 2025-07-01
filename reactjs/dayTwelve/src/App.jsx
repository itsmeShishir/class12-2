import React, {useRef} from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Frontend/HomePage";
import ProductsPage from "./Pages/Frontend/ProductsPage";
import CAtegories from "./Pages/Frontend/CAtegories";
import Checkouts from "./Pages/Frontend/Checkouts";
import ProductPage from "./Pages/Frontend/ProductPage";
import BlogPage from "./Pages/Frontend/BlogPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import CartPage from "./Pages/Frontend/CartPage";
import MainPage from "./Pages/Frontend/MainPage";
import LearnHooks from "./learn/LearnHooks";
import AuthMainPage from "./Pages/Auth/AuthMainPage";
import PageNotFound from "./Pages/ErrroPage/PageNotFound";
import { BiArrowToTop } from "react-icons/bi";
import CategoryProduct from "./Pages/Frontend/CategoryProduct";

function App() {
  const ref = useRef();
  function GoBackToTop(){
    ref.current.scrollIntoView({behavior: "smooth"})
  }
  return <>
  <div ref={ref}></div>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CAtegories />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/singleProduct/:id" element={<ProductPage />} />
        <Route path="/singleCategoryProduct/:id" element={<CategoryProduct />} />
        <Route path="/blog" element={<BlogPage />} />
      </Route>
      <Route path="/learn" element={<LearnHooks />} />
      
      {/* Auth */}
      <Route path="login" element={<AuthMainPage/>}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Errror page */}
      <Route path="*" element={<PageNotFound />} />

    </Routes>
    <BiArrowToTop className="fixed bottom-10 right-10 text-4xl text-white hover:text-red-800 cursor-pointer bg-red-600 rounded-full px-1 py-1 " onClick={GoBackToTop} title="Back to Top" />
  </>;
}

export default App;
