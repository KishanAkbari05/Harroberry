import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 text-base overflow-hidden border-t border-slate-900 pt-24 pb-16 px-6 md:px-12 transition-colors duration-300">
      {/* Decorative Premium Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Branding & Live Operations Status Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 mb-12 border-b border-slate-900/60 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="text-sm font-black text-white tracking-tighter">H</span>
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-black tracking-[0.15em] font-sans">
                HARROBERRY
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed font-medium">
              Redefining personal healthcare benchmarks with advanced, automated, contact-free assembly operations in Gujarat, India.
            </p>
          </div>

          {/* New Top-Right Component: Live Operational Status Metrics */}
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex items-center space-x-3 bg-slate-900/30 border border-slate-900 backdrop-blur-md px-4 py-3 rounded-xl shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Plant Facility</span>
                <span className="text-xs text-slate-200 font-extrabold tracking-wide">Fully Automated Ops</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-slate-900/30 border border-slate-900 backdrop-blur-md px-4 py-3 rounded-xl shadow-inner">
              <i className="fas fa-truck-fast text-brand-pink text-sm"></i>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">B2B Logistics</span>
                <span className="text-xs text-slate-200 font-extrabold tracking-wide">Fast Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Corporate Ethos & Updated Social Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-pink"></span> Corporate Ethos
            </h4>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Harroberry operates at the intersection of modern bio-engineering and safe feminine hygiene management frameworks customized for Indian climates.
            </p>
            
            {/* Two WhatsApp Links & Instagram Link */}
            <div className="flex space-x-3.5 pt-2">
              <Link 
                to="https://wa.me/919313948854" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" 
                aria-label="WhatsApp Corporate Desk"
              >
                <i className="fab fa-whatsapp"></i>
              </Link>

              <Link 
                to="https://wa.me/916303219091" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" 
                aria-label="WhatsApp Direct Support"
              >
                <i className="fab fa-whatsapp"></i>
              </Link>
              
              <Link 
                to="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" 
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span> Navigation
            </h4>
            <ul className="space-y-3.5 text-sm md:text-base font-semibold">
              <li>
                <Link to="/home" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all duration-300 text-brand-pink"></i>
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/features" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all duration-300 text-brand-pink"></i>
                  Core Features
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all duration-300 text-brand-pink"></i>
                  Product Matrix
                </Link>
              </li>
              <li>
                <Link to="/about" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all duration-300 text-brand-pink"></i>
                  Corporate Ethos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Line Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span> Product Line
            </h4>
            <ul className="space-y-3.5 text-sm md:text-base font-semibold">
              <li>
                <Link to="/products" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-cube text-xs mr-2.5 text-slate-700 group-hover:text-brand-pink transition-colors"></i>
                  Harroberry Day XL
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-moon text-xs mr-2.5 text-slate-700 group-hover:text-brand-purple transition-colors"></i>
                  Heavy Overnight XXL
                </Link>
              </li>
              <li>
                <Link to="/distributor" className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                  <i className="fas fa-handshake text-xs mr-2.5 text-slate-700 group-hover:text-violet-400 transition-colors"></i>
                  B2B Bulk Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Supply Depot HQ Container */}
          <div className="space-y-5">
            <h4 className="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Supply Depot
            </h4>
            <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-5 space-y-4 shadow-inner backdrop-blur-md">
              <div className="flex items-start space-x-3.5">
                <i className="fas fa-location-dot text-brand-pink mt-1 text-sm w-4 flex-shrink-0"></i>
                <span className="text-sm text-slate-300 font-semibold leading-snug">Navagam, Rajkot, Gujarat, India</span>
              </div>
              
              {/* Primary Line */}
              <div className="flex items-center space-x-3.5 group/phone1">
                <i className="fas fa-phone text-brand-purple text-sm w-4 transition-transform group-hover/phone1:scale-110"></i>
                <Link to="tel:+919313948854" className="text-sm text-slate-300 hover:text-white transition-colors font-bold">+91 9313948854</Link>
              </div>

              {/* Secondary Line */}
              <div className="flex items-center space-x-3.5 group/phone2">
                <i className="fas fa-phone text-emerald-500 text-sm w-4 transition-transform group-hover/phone2:scale-110"></i>
                <Link to="tel:+916303219091" className="text-sm text-slate-300 hover:text-white transition-colors font-bold">+91 6303219091</Link>
              </div>

              {/* Email Address Line */}
              <div className="flex items-center space-x-3.5 group/mail">
                <i className="fas fa-envelope text-brand-pink text-sm w-4 transition-transform group-hover/mail:scale-110"></i>
                <Link to="mailto:harroberry18@gmail.com" className="text-sm text-slate-300 hover:text-white transition-colors font-semibold overflow-hidden text-ellipsis whitespace-nowrap block max-w-[190px]">
                  harroberry18@gmail.com
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Divider Path Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent mb-8"></div>
        
        {/* Bottom Bar Subtext */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs md:text-sm text-slate-500 space-y-4 lg:space-y-0 font-semibold tracking-wide">
          <p className="text-center lg:text-left">© 2026 Harroberry Sanitary Healthcare Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center"><i className="fas fa-shield-halved mr-2 text-xs text-slate-600"></i> 100% Sterilized Core Matrix</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span>Designed for Hygiene Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;