import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrected import
import Homepage from './pages/Home/Homepage';
import FoodPage from './pages/food/FoodPage'; // Assuming the correct file path
import CartPage from './pages/Cart/CartPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search/:searchTerm" element={<Homepage />} />
      <Route path="/tag/:tag" element={<Homepage />} />
      <Route path="/food/:id" element={<FoodPage />} /> 
      <Route path="/cart" element={<CartPage /> } />
    </Routes>
  );
}
