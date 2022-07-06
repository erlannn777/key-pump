import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AboutUs from "./about-us";
import Cart from "./cart";
import Catalog from "./catalog";
import Home from "./home";
import Order from "./order";
import Product from "./product";
import Footer from "../components/Footer";
import FAQ from "./faq";
import Articles from "./articles";
import Article from "./articles/article/Article";
import Checkout from "./checkout/checkout";
import CartModal from "../components/CartModal";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <CartModal />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
