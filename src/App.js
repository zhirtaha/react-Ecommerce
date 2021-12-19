import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductByNamePage from "./pages/ProductByNamePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import NavbarPage from "./pages/NavbarPage";
import FooterPage from "./pages/FooterPage";
import ProductsPage from "./pages/ProductsPage";
import ProductByBrandPage from "./pages/ProductByBrandPage"
import ProductByGenderPage from "./pages/ProductByGenderPage"
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:name" element={<ProductByNamePage />} />
        <Route path="/brands/:name" element={<ProductByBrandPage/>} />
        <Route path="/genders/:name" element={<ProductByGenderPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <FooterPage/>
    </div>
  );
}

export default App;
