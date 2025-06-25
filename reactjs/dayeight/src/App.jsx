import React from "react";
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
function App() {
  return <>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CAtegories />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/singleProduct" element={<ProductPage />} />
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
  </>;
}

export default App;
