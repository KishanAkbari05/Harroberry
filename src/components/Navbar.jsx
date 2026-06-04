import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    const initialDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLinkMouseEnter = (e) => {
    const target = e.currentTarget;
    const container = navLinksContainerRef.current;
    if (!target || !container) return;

    const containerLeft = container.getBoundingClientRect().left;
    const targetRect = target.getBoundingClientRect();

    setIndicatorStyle({
      left: targetRect.left - containerLeft,
      width: targetRect.width,
      opacity: 1
    });
  };

  const handleLinksMouseLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <>
      {/* ========================================================= */}
      {/* HEADER NAVIGATION STANDARD FRAME                         */}
      {/* ========================================================= */}
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-4 md:px-8 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <div id="navbarContainer" className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5 transition-all duration-500 border backdrop-blur-xl ${isScrolled ? 'shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.45)] max-w-6xl rounded-full bg-white/70 dark:bg-slate-900/70 border-white/40 dark:border-slate-800/60' : 'rounded-3xl bg-transparent border-transparent'}`}>
              
              {/* BRAND LOGO DESIGN */}
              <Link to="/home" className="flex items-center space-x-3 group relative focus:outline-none" aria-label="Harroberry Home Landing">
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple p-[1.5px] transition-all duration-500 group-hover:rotate-[360deg] shadow-md shadow-brand-pink/10">
                      <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden transition-colors duration-300">
                          <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-pink/20 rounded-full blur-sm group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-brand-purple/20 rounded-full blur-sm group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></div>
                          
                          <div className="relative w-3.5 h-4 flex justify-between items-center z-10">
                              <span className="w-[2.5px] h-full rounded-full bg-gradient-to-b from-brand-pink to-brand-purple transition-all duration-300 group-hover:scale-y-75"></span>
                              <span className="absolute top-1/2 left-0 w-full h-[2.5px] -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple transform group-hover:rotate-12 transition-all duration-300"></span>
                              <span className="w-[2.5px] h-full rounded-full bg-gradient-to-b from-brand-pink to-brand-purple transition-all duration-300 group-hover:scale-y-75"></span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                      <span className="text-lg font-black tracking-[0.15em] bg-gradient-to-r from-brand-pink via-brand-purple to-brand-pink bg-[size:200%_auto] bg-clip-text text-transparent group-hover:bg-right transition-all duration-1000 leading-none">
                          HARROBERRY
                      </span>
                      <span className="text-[8px] font-extrabold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase mt-1 transition-colors duration-300">
                          Premium Care
                      </span>
                  </div>
              </Link>

              {/* HORIZONTAL DESKTOP LINK TRAY */}
              <div ref={navLinksContainerRef} onMouseLeave={handleLinksMouseLeave} className="hidden md:flex items-center relative bg-slate-100/60 dark:bg-slate-800/40 p-1 rounded-full border border-slate-200/40 dark:border-slate-700/30">
                  <div 
                    className="absolute h-[calc(100%-8px)] top-1 rounded-full bg-white dark:bg-slate-700 shadow-sm transition-all duration-500 cubic-bezier(0.2, 1, 0.2, 1) pointer-events-none z-0"
                    style={{
                      left: `${indicatorStyle.left}px`,
                      width: `${indicatorStyle.width}px`,
                      opacity: indicatorStyle.opacity
                    }}
                  />
                  
                  <div className="flex items-center relative z-10">
                      {['Home', 'Features', 'Products', 'About', 'B2B', 'Contact'].map((label) => {
                          const route = `/${label.toLowerCase() === 'about' ? 'about' : label.toLowerCase() === 'b2b' ? 'distributor' : label.toLowerCase()}`;
                          return (
                              <Link 
                                key={label}
                                to={route} 
                                onMouseEnter={handleLinkMouseEnter} 
                                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                              >
                                  {label}
                              </Link>
                          );
                      })}
                  </div>
              </div>

              {/* ACTION TOOLS PANEL */}
              <div className="flex items-center space-x-4">
                  {/* METRIC THEME SWITCH SYSTEM */}
                  <button onClick={toggleTheme} id="themeToggle" className="group relative flex items-center w-[64px] h-[34px] rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-inner transition-all duration-500 focus:outline-none" aria-label="Toggle Theme">
                      <div className={`absolute z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${isDark ? 'from-amber-400 to-orange-500 translate-x-8 text-slate-950' : 'from-purple-600 to-indigo-600 text-white'} bg-gradient-to-br`} style={{ left: '4px' }}>
                          <i id="themeIcon" className={`fas text-[10px] transition-all duration-500 ${isDark ? 'fa-sun rotate-90' : 'fa-moon'}`}></i>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                          <i className="fas fa-sun text-[10px] text-amber-500"></i>
                          <i className="fas fa-moon text-[10px] text-purple-400"></i>
                      </div>
                  </button>

                  <Link to="/contact" className="hidden sm:inline-flex px-5 h-9 items-center text-[11px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-brand-pink to-brand-purple rounded-full shadow-md shadow-brand-pink/10 hover:shadow-lg hover:shadow-brand-pink/20 hover:scale-[1.03] active:scale-95 transition-all duration-300">
                      Inquire
                  </Link>
                  
                  {/* HAMBURGER TRIGGER */}
                  <button onClick={() => setIsSidebarOpen(true)} id="menuToggle" className="md:hidden w-9 h-9 flex flex-col items-center justify-center space-y-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 focus:outline-none transition-all duration-300 hover:scale-105 border border-slate-200/30 dark:border-slate-700/30">
                      <span className={`w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isSidebarOpen ? 'transform translate-y-[5.5px] rotate-45' : ''}`}></span>
                      <span className={`w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
                      <span className={`w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isSidebarOpen ? 'transform -translate-y-[5.5px] -rotate-45' : ''}`}></span>
                  </button>
              </div>
          </div>
      </nav>

      {/* ========================================================= */}
      {/* MOBILE DRAWER PRESENTATION FRAME                          */}
      {/* ========================================================= */}
      <div id="sidebar" className={`fixed inset-y-4 right-4 w-[310px] bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl z-50 rounded-[28px] transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) border border-white/40 dark:border-slate-800/60 shadow-[0_30px_70px_rgba(15,23,42,0.15)] p-6 flex flex-col justify-between ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%+20px)] opacity-0'}`}>
          <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800/60">
                  <div className="flex flex-col">
                      <span className="text-md font-black tracking-widest bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">HARROBERRY</span>
                      <span className="text-[8px] uppercase tracking-widest font-bold text-slate-400 mt-0.5">Sanitary Ecosystems</span>
                  </div>
                  <button onClick={() => setIsSidebarOpen(false)} id="closeSidebar" className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 border border-slate-200/30 dark:border-slate-700/40 transition-colors text-base font-bold focus:outline-none">
                      <i className="fas fa-times text-xs"></i>
                  </button>
              </div>
              
              <div className="flex flex-col space-y-1.5 mt-6">
                  {[
                      { h: "/home", i: "fa-home", l: "Home" },
                      { h: "/features", i: "fa-cube", l: "Features" },
                      { h: "/products", i: "fa-layer-group", l: "Products" },
                      { h: "/about", i: "fa-info-circle", l: "About Us" },
                      { h: "/distributor", i: "fa-handshake", l: "B2B Wholesale" },
                      { h: "/contact", i: "fa-envelope", l: "Contact Deck" }
                  ].map((link, idx) => (
                      <Link 
                        key={idx}
                        to={link.h} 
                        onClick={() => setIsSidebarOpen(false)} 
                        className="mobile-link flex items-center space-x-3.5 px-4 h-11 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-brand-pink/5 hover:to-brand-purple/5 hover:text-brand-pink dark:hover:bg-slate-800/50 transition-all font-bold text-xs uppercase tracking-wider border border-transparent hover:border-slate-100 dark:hover:border-slate-800/40"
                      >
                          <i className={`fas ${link.i} text-[11px] w-4 text-slate-400 dark:text-slate-500`}></i> 
                          <span>{link.l}</span>
                      </Link>
                  ))}
              </div>
          </div>

          <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-col space-y-3 items-center">
              <Link to="/contact" onClick={() => setIsSidebarOpen(false)} className="w-full flex items-center justify-center h-11 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-pink to-brand-purple rounded-xl shadow-md shadow-brand-pink/10">
                  Secure Inquiry
              </Link>
              <p className="text-[10px] font-semibold text-slate-400 tracking-wide">© 2026 Harroberry Healthcare Inc.</p>
          </div>
      </div>

      {/* CLOUD MATRIX BACKDROP OVERLAY */}
      <div 
        onClick={() => setIsSidebarOpen(false)} 
        id="overlay" 
        className={`fixed inset-0 bg-slate-950/20 dark:bg-slate-950/50 z-30 backdrop-blur-sm transition-all duration-500 ${isSidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      />
    </>
  );
};

export default Navbar;