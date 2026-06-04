import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloating from './WhatsAppFloating';
import ParticleBackground from './ParticleBackground';

const Layout = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Whenever the route shifts, instantly reset scroll location to top
    window.scrollTo(0, 0);

    // Scroll reveal elements handler system
    const handleRevealAndScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleRevealAndScroll);
    handleRevealAndScroll(); // Initial run passage for visible items

    return () => window.removeEventListener('scroll', handleRevealAndScroll);
  }, [location.pathname]); // Re-run when view changes

  useEffect(() => {
    // Only run intro preloader session layout tracking once on entry state load
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div class="font-sans antialiased text-slate-700 bg-white dark:bg-brand-darkBg dark:text-slate-200 transition-colors duration-300">
      {/* Permanent Background Particle Infrastructure */}
      <ParticleBackground />

      {/* Entry Application Loading Sequence */}
      {showPreloader && <Preloader />}

      {/* Persistent Nav & Communication Channels */}
      <Navbar />
      <WhatsAppFloating />

      {/* Back to Top Arrow Handle */}
      <button 
        onClick={scrollToTop}
        id="backToTop" 
        class={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-pink text-white shadow-lg transition-all duration-300 hover:bg-brand-purple hover:scale-110 focus:outline-none ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <i class="fas fa-arrow-up"></i>
      </button>

      {/* DYNAMIC CHILD PAGE SLOT VIEW PORT CONTAINER */}
      <main style={{ position: 'relative', zIndex: 10 }}>
         <Outlet />
      </main>

      {/* Permanent Site Base Grid */}
      <Footer />
    </div>
  );
};

export default Layout;