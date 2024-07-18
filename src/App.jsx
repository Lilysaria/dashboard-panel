import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import EditPage from "./pages/EditPage/EditPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/createpage" element={<CreateProductPage />} />
        <Route path="/editpage/:productId" element={<EditPage />} />
        <Route path="/product/:productId/edit" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
