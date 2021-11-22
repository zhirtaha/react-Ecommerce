import "./App.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import TheFooter from "./components/TheFooter";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CategoriesList from "./components/CategoriesList";
import ProductByName from "./components/ProductByName";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PageNotFound from "./components/PageNotFound";
import CheckoutForm from "./components/CheckoutForm";
function App() {
  return (
    <div className="App">
      <TheNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/:name" element={<ProductByName />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/checkout" element={<CheckoutForm/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
