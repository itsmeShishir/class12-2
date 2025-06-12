import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return <div>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/products" element={<h1>Products page</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  </div>;
}

export default App;
