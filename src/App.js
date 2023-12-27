import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartDisplay from './feature/CartDisplay';
import ProductDisplay from './feature/ProductDisplay';
import Navbar from './feature/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDisplay />} />
        <Route path="/cart" element={<CartDisplay />} />
      </Routes>
    </>
  );
}

export default App;
