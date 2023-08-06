import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Components/Header';
import { Products } from './Components/ProductsSection';
import { SearchBar } from './Components/SearchBar';
import { Login } from './Components/login';
import './index.css';

function App() {
  return (
    <div className="overflow-hidden bg-white flex flex-col pb-16 gap-10 w-full">
      {/* Conditionally render Header and SearchBar based on the current URL */}
      {useLocation().pathname !== '/login' && (
        <>
          <Header />
          <SearchBar />
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;