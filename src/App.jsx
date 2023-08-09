import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Components/Header';
import { Products } from './Components/ProductsSection';
import { SearchBar } from './Components/SearchBar';
import { Login } from './Components/login';
import './index.css';
import { Registration } from './Components/Registration';
import { Cart } from './Components/CartPage';
import { Details } from './Components/Details';
import { NotFoundPage } from './Components/NotFoundPage';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="overflow-hidden bg-white flex flex-col pb-16 gap-10 w-full">
      {/* Conditionally render Header and SearchBar based on the current route */}
      {isHomePage && (
        <>
          <Header />
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<Products isLoggedIn={isLoggedIn} Login={Login} searchQuery={searchQuery} />} />
        <Route path="/registration" element={<Registration setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems} />} />
        <Route path="/details/:id" element={<Details setCartItems={setCartItems} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;