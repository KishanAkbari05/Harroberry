import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Technology from './pages/Technology';
import About from './pages/About';
import Distributor from './pages/Distributor';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>

      {/* ADD THIS */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="features" element={<Technology />} />
          <Route path="about" element={<About />} />
          <Route path="distributor" element={<Distributor />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;