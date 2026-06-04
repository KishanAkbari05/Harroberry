import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollContainerRef = useRef(null);
  
  // ---------------------------------------------------------
  // STANDALONE IMAGE CAROUSEL STATE & CONTROLS
  // ---------------------------------------------------------
  // Replace these source strings with your asset file paths (e.g., "./XL_3.jpeg")
  const galleryImages = [
    { id: 1, src: "./carousle_1.png", alt: "Harroberry Premium Protection Portfolio" },
    { id: 2, src: "./carousle_2.png", alt: "Harroberry Ultra Soft Comfort Showcase" },
    { id: 3, src: "./carousle_3.png", alt: "Harroberry Holistic Layer Safety Matrix" },
    { id: 4, src: "./carousle_4.png", alt: "Harroberry Leak Lock Performance Display" },
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const imgTouchStartX = useRef(0);
  const imgTouchEndX = useRef(0);

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Mobile Swipe Hook Triggers
  const handleImgTouchStart = (e) => { imgTouchStartX.current = e.targetTouches[0].clientX; };
  const handleImgTouchMove = (e) => { imgTouchEndX.current = e.targetTouches[0].clientX; };
  const handleImgTouchEnd = () => {
    if (!imgTouchStartX.current || !imgTouchEndX.current) return;
    const distance = imgTouchStartX.current - imgTouchEndX.current;
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
    imgTouchStartX.current = 0;
    imgTouchEndX.current = 0;
  };

  // ---------------------------------------------------------
  // LIFE-CYCLE MECHANICS & ANIMATION INTERSECTIONS
  // ---------------------------------------------------------
  useEffect(() => {
    // 1. Counter Animation Logic for Trust Section
    const counters = document.querySelectorAll('.stat-counter');
    const animationSpeed = 120;

    const startCounting = (counterElement) => {
      const target = +counterElement.getAttribute('data-target');
      let current = 0;
      const increment = target / animationSpeed;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counterElement.innerText = Math.ceil(current).toLocaleString();
          setTimeout(updateCount, 15);
        } else {
          counterElement.innerText = target.toLocaleString();
        }
      };
      updateCount();
    };

    const observerOptions = { threshold: 0.2 };
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => statsObserver.observe(counter));

    // 2. Video Carousel Infinite Auto-Scroll Loop Logic
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollSpeed = 1; 

    const loopScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(loopScroll);
    };

    setTimeout(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        animationFrameId = requestAnimationFrame(loopScroll);
      }
    }, 200);

    const handleMouseEnter = () => { scrollSpeed = 0; };
    const handleMouseLeave = () => { scrollSpeed = 1; };

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    // 3. Image Carousel Auto-cycle Timer Frame
    const imgAutoCycle = setInterval(nextImage, 5000);

    return () => {
      statsObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      clearInterval(imgAutoCycle);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [currentImgIndex]);

  const videoCardsData = [
    { id: 1, title: "Unboxing & Premium Soft Texture Look", desc: "See how the cotton top sheet layer acts under initial texture checks." },
    { id: 2, title: "Multi-Layer Fluid Absorption Trial", desc: "A detailed breakdown showing the high volume lock mechanism safely at night." },
    { id: 3, title: "320mm Extra-Wide Wing Coverage", desc: "Demonstrating physical leak-lock perimeter boundaries against side friction." }
  ];

  return (
    <>
      {/* Global CSS Inject for Marquees, Dossier Streams, and Floating Animations */}
      <style>{`
        @keyframes technical-dossier-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 1.333rem)); }
        }
        .animate-dossier-stream {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: technical-dossier-loop 40s linear infinite;
        }
        .animate-dossier-stream:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-stream {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          display: flex;
          width: max-content;
          gap: 4rem;
          animation: marquee-stream 30s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ========================================================= */}
      {/* 1. HERO SECTION (RESTORED TO PREVIOUS ORIGINAL SPLIT)    */}
      {/* ========================================================= */}
      <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-transparent">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-pink/10 dark:bg-brand-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/10 dark:bg-brand-purple/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-semibold text-xs tracking-wider uppercase">
              Redefining Feminine Hygiene
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Premium Protection <br />
              <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">For Every Woman</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
              Comfortable, cotton-soft sanitary pads designed with advanced multi-layer leak protection and holistic hygienic safety. Feel secure all day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/products" className="px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold rounded-full shadow-lg shadow-brand-pink/20 hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 text-center">
                Shop Now
              </Link>
              <Link to="/distributor" className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transform hover:-translate-y-0.5 transition-all duration-200 text-center">
                Become Distributor
              </Link>
            </div>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <i className="fas fa-feather text-brand-pink"></i> <span>Cotton Soft</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <i className="fas fa-shield-virus text-brand-pink"></i> <span>Infection Guard</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <i className="fas fa-tint-slash text-brand-pink"></i> <span>Leak Lock</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <i className="fas fa-arrow-right text-brand-pink"></i> <span>Skin Friendly</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-purple/20 rounded-full blur-2xl opacity-60"></div>                
            <img 
              src="./XL_3.jpeg"
              alt="Harroberry Premium Sanitary Protection" 
              className="relative z-10 w-full max-w-md object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800" />
          </div>
        </div>
      </section>

    

      {/* ========================================================= */}
      {/* 3. TRUST & METRICS SECTION                                 */}
      {/* ========================================================= */}
      <section id="trust-metrics" className="py-24 px-4 md:px-8 bg-transparent border-y border-slate-100 dark:border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full inline-block">Global Footprint</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Trusted across massive retail networks
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We engineer enterprise-grade distributions and retail-ready setups that keep supply chains moving across international digital storefronts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:col-span-2">
              <div className="group relative bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-xl shadow-slate-100/40 dark:shadow-none transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-brand-pink">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">Live Active</span>
                </div>
                <div className="flex items-baseline text-slate-900 dark:text-white font-black tracking-tight">
                  <span className="stat-counter text-3xl md:text-5xl" data-target="50000">0</span>
                  <span className="text-2xl md:text-3xl font-bold text-brand-pink ml-0.5">+</span>
                </div>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-wider">
                  Retained Consumers
                </p>
              </div>

              <div className="group relative bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-xl shadow-slate-100/40 dark:shadow-none transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-brand-purple">
                    <i className="fas fa-store text-xl"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full">Authorized</span>
                </div>
                <div className="flex items-baseline text-slate-900 dark:text-white font-black tracking-tight">
                  <span className="stat-counter text-3xl md:text-5xl" data-target="50">0</span>
                  <span className="text-2xl md:text-3xl font-bold text-brand-purple ml-0.5">+</span>
                </div>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-wider">
                  Enterprise Sellers
                </p>
              </div>
            </div>
          </div>

          {/* INFINITE MARQUEE STRIP TRACK */}
          <div className="relative w-full my-16 py-4 bg-slate-100/50 dark:bg-slate-900/30 rounded-2xl border border-slate-200/30 dark:border-slate-800/40">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden w-full flex">
              <div className="animate-custom-marquee items-center text-slate-400 dark:text-slate-600 font-bold tracking-widest text-sm uppercase">
                <span className="flex items-center gap-3 shrink-0"><i className="fab fa-amazon text-xl text-amber-500/70"></i> AMAZON FULFILLED</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-shopping-bag text-xl text-pink-500/70"></i> MEESHO VERIFIED</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-truck-moving text-xl text-blue-500/70"></i> EXPRESS PROCURING</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-shield-alt text-xl text-emerald-500/70"></i> SECURED PIPELINE</span>
                
                <span className="flex items-center gap-3 shrink-0"><i className="fab fa-amazon text-xl text-amber-500/70"></i> AMAZON FULFILLED</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-shopping-bag text-xl text-pink-500/70"></i> MEESHO VERIFIED</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-truck-moving text-xl text-blue-500/70"></i> EXPRESS PROCURING</span>
                <span className="flex items-center gap-3 shrink-0"><i className="fas fa-shield-alt text-xl text-emerald-500/70"></i> SECURED PIPELINE</span>
              </div>
            </div>
          </div>

          {/* PROCUREMENT MODEL GRID */}
          <div className="mt-12">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-pink">Direct Acquisition</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Select Size Framework</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-[32px] border border-slate-200/60 dark:border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between">
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 dark:bg-slate-800 text-white dark:text-slate-100 flex items-center justify-center font-black text-2xl tracking-tighter shadow-xl shrink-0 border border-slate-800">
                    XL
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-pink-500/10 text-brand-pink">Standard Issue</span>
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 dark:text-white">XL Size Master Edition</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Engineered for precise operational metrics, utilizing standard multi-layer layout designs to optimize flow reliability.</p>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link to="https://www.amazon.in/Harroberry-Sanitary-Protection-Cottony-Technology/dp/B0H347BD89/ref=sr_1_5?..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-12 px-5 bg-[#131921] hover:bg-[#232f3e] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-md">
                    <i className="fab fa-amazon text-base text-[#ff9900]"></i> Amazon Store
                    <i className="fas fa-arrow-right text-[10px] text-slate-400 group-hover/btn:translate-x-1 transition-transform ml-auto"></i>
                  </Link>
                  <Link to="https://www.meesho.com/harroberry-xl-sanitary-pads-for-women-40-pads-secure-nights-protection-..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-12 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-sm">
                    <i className="fas fa-shopping-bag text-sm text-pink-500"></i> Meesho Channel
                    <i className="fas fa-arrow-right text-[10px] text-slate-400 group-hover/btn:translate-x-1 transition-transform ml-auto"></i>
                  </Link>
                </div>
              </div>

              <div className="group relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-[32px] border border-slate-200/60 dark:border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between">
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 dark:bg-slate-800 text-white dark:text-slate-100 flex items-center justify-center font-black text-2xl tracking-tighter shadow-xl shrink-0 border border-slate-800">
                    XXL
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-purple-500/10 text-brand-purple">Max Volume</span>
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 dark:text-white">XXL Overnight Variant</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Features an expanded 320 mm structural security baseline to support extended usage cycles with optimal safety containment.</p>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link to="https://www.amazon.in/Harroberry-Sanitary-Protection-Cottony-Technology/dp/B0H341LSZL/ref=sr_1_11?..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-12 px-5 bg-[#131921] hover:bg-[#232f3e] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-md">
                    <i className="fab fa-amazon text-base text-[#ff9900]"></i> Amazon Store
                    <i className="fas fa-arrow-right text-[10px] text-slate-400 group-hover/btn:translate-x-1 transition-transform ml-auto"></i>
                  </Link>
                  <Link to="https://www.meesho.com/harroberry-xxl-sanitary-pads-for-women-40-pads-secure-nights-protection-..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-12 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-sm">
                    <i className="fas fa-shopping-bag text-sm text-pink-500"></i> Meesho Channel
                    <i className="fas fa-arrow-right text-[10px] text-slate-400 group-hover/btn:translate-x-1 transition-transform ml-auto"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ========================================================= */}
      {/* NEW STANDALONE: PRODUCT IMAGE CAROUSEL SECTION             */}
      {/* ========================================================= */}
      <section id="product-showcase-gallery" className="py-20 px-4 md:px-8 bg-transparent border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink bg-pink-500/5 dark:bg-pink-500/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-pink-500/10">
              Product Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Premium Design Architecture
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Carousel Viewport Container */}
          <div className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[560px] group overflow-hidden rounded-[32px] border border-slate-200/60 dark:border-slate-800/80 shadow-2xl z-10">
            <div 
              className="w-full h-full bg-cover bg-center duration-500 ease-out transition-all"
              style={{ backgroundImage: `url(${galleryImages[currentImgIndex].src})` }}
              onTouchStart={handleImgTouchStart}
              onTouchMove={handleImgTouchMove}
              onTouchEnd={handleImgTouchEnd}
              role="img"
              aria-label={galleryImages[currentImgIndex].alt}
            ></div>

            {/* Nav Arrows - Visible on Hover layout panels */}
            <button 
              onClick={prevImage}
              className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-5 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 items-center justify-center cursor-pointer transition-all duration-200 hover:bg-brand-pink hover:text-white hover:border-transparent active:scale-95 shadow-lg z-20"
              aria-label="Previous Slide"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button 
              onClick={nextImage}
              className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-5 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 items-center justify-center cursor-pointer transition-all duration-200 hover:bg-brand-pink hover:text-white hover:border-transparent active:scale-95 shadow-lg z-20"
              aria-label="Next Slide"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>

          {/* Pagination Dots Frame Tracker */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {galleryImages.map((_, slideIdx) => (
              <button
                key={slideIdx}
                onClick={() => setCurrentImgIndex(slideIdx)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentImgIndex === slideIdx 
                    ? 'w-8 bg-slate-900 dark:bg-white' 
                    : 'w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${slideIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>


        {/* ========================================================= */}
      {/* 2. VIDEO CAROUSEL SECTION                                 */}
      {/* ========================================================= */}
      <section id="video-carousel-showcase" className="py-24 px-4 md:px-8 bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900/60 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple bg-purple-500/5 dark:bg-purple-500/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-purple-500/10">
              Product Spotlight Videos
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Watch Protection In Action
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-12 md:w-44 bg-gradient-to-r from-slate-50 dark:from-slate-950/20 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-44 bg-gradient-to-l from-slate-50 dark:from-slate-950/20 to-transparent z-10 pointer-events-none"></div>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 py-4 no-scrollbar scroll-smooth snap-x select-none"
            >
              {[...videoCardsData, ...videoCardsData, ...videoCardsData].map((video, index) => (
                <div 
                  key={`${video.id}-${index}`} 
                  className="w-[310px] md:w-[380px] shrink-0 bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/60 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-80"></div>
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-base z-20 group-hover:scale-110 group-hover:bg-brand-pink group-hover:border-transparent transition-all duration-300 shadow-xl cursor-pointer">
                      <i className="fas fa-play ml-0.5"></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 to-slate-950 flex items-center justify-center text-slate-500 text-[10px] tracking-widest font-mono select-none">
                      [ VIDEO INTERFACE DEMO ]
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-2 flex-grow flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-pink bg-pink-500/5 px-2.5 py-0.5 rounded-md border border-pink-500/10 inline-block self-start">
                      HD Showcase
                    </span>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base tracking-tight line-clamp-1">{video.title}</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed line-clamp-2">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. TESTIMONIALS SECTION                                    */}
      {/* ========================================================= */}
      <section id="user-feedback" className="py-28 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink bg-pink-500/5 dark:bg-pink-500/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-pink-500/10">
              Corporate Endorsements
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Feedback From Our Users
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-pink via-brand-purple to-transparent mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="relative w-full py-4">
            <div className="absolute inset-y-0 left-0 w-20 md:w-56 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-56 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden w-full class-carousel">
              <div className="animate-dossier-stream py-4">
                
                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[5px] bg-brand-pink"></div>
                  <div className="p-8 pl-9 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
                        <i className="fas fa-check-circle text-xs"></i> Verified Consumer
                      </span>
                    </div>
                    <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                      "The cotton top surface is incredibly soft. I used to get severe rashes on day 2 with traditional commercial pads, but switching to Harroberry completely fixed that."
                    </p>
                  </div>
                  <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs border border-slate-800 shadow-sm">
                        AS
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">Ananya S.</h5>
                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Ahmedabad Hub</p>
                      </div>
                    </div>
                    <div className="text-slate-300 dark:text-slate-800 font-serif text-4xl select-none pointer-events-none transform translate-y-2">”</div>
                  </div>
                </div>

                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[5px] bg-brand-purple"></div>
                  <div className="p-8 pl-9 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
                        <i className="fas fa-check-circle text-xs"></i> Verified Account
                      </span>
                    </div>
                    <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                      "The absorption level of Harroberry XXL is fantastic. It locks fluid instantly during night usage and the extra wide wings mean no mattress stains."
                    </p>
                  </div>
                  <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs border border-slate-800 shadow-sm">
                        PK
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">Pooja K.</h5>
                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Rajkot Operations</p>
                      </div>
                    </div>
                    <div className="text-slate-300 dark:text-slate-800 font-serif text-4xl select-none pointer-events-none transform translate-y-2">”</div>
                  </div>
                </div>

                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[5px] bg-emerald-500"></div>
                  <div className="p-8 pl-9 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10">
                        <i className="fas fa-handshake text-xs"></i> Corporate Partner
                      </span>
                    </div>
                    <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                      "Our retail pharma chain orders Harroberry in bulk. Their automated factory in Gujarat ships promptly, and the custom pricing lets us keep decent retail margins."
                    </p>
                  </div>
                  <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs border border-slate-800 shadow-sm">
                        RM
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">Radhika Medicals</h5>
                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">B2B Distribution</p>
                      </div>
                    </div>
                    <div className="text-slate-300 dark:text-slate-800 font-serif text-4xl select-none pointer-events-none transform translate-y-2">”</div>
                  </div>
                </div>

                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-[5px] bg-orange-500"></div>

                    <div className="p-8 pl-9 relative z-10">
                        <div className="flex items-center justify-between mb-6">
                        <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/10">
                            <i className="fas fa-award text-xs"></i> Premium User
                        </span>
                        </div>

                        <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                        "Harroberry feels much softer than any other sanitary pad I have used. Even during long office hours, I stay comfortable and irritation-free."
                        </p>
                    </div>

                    <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black text-xs">
                            NP
                        </div>

                        <div>
                            <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">Neha P.</h5>
                            <p className="text-xs font-semibold text-slate-400 mt-0.5">Surat Customer</p>
                        </div>
                        </div>

                        <div className="text-slate-300 font-serif text-4xl transform translate-y-2">”</div>
                    </div>
                </div>

                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                
                <div className="absolute inset-y-0 left-0 w-[5px] bg-cyan-500"></div>

                <div className="p-8 pl-9 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                    
                    <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/10">
                        <i className="fas fa-shield-check text-xs"></i>
                        Trusted Buyer
                    </span>
                    </div>

                    <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                    "The XL-280 MM size gives excellent coverage during heavy flow days. I can travel confidently without worrying about leakage. The protection lasts longer than most brands I have tried."
                    </p>
                </div>

                <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    
                    <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs border border-slate-800 shadow-sm">
                        SJ
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        Sneha J.
                        </h5>

                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                        Rajkot Customer
                        </p>
                    </div>
                    </div>

                    <div className="text-slate-300 dark:text-slate-800 font-serif text-4xl select-none pointer-events-none transform translate-y-2">
                    ”
                    </div>
                </div>
                </div>

                <div className="w-[360px] md:w-[440px] shrink-0 group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
                
                <div className="absolute inset-y-0 left-0 w-[5px] bg-rose-500"></div>

                <div className="p-8 pl-9 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                    
                    <div className="flex text-amber-400 text-[10px] gap-1 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/10">
                        <i className="fas fa-award text-xs"></i>
                        Top Rated
                    </span>
                    </div>

                    <p className="text-sm md:text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide">
                    "The wide wings and strong adhesive keep the pad perfectly in place. No folding, no shifting, and no discomfort throughout the day. It provides a secure and worry-free experience."
                    </p>
                </div>

                <div className="p-6 pl-9 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    
                    <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs border border-slate-800 shadow-sm">
                        KP
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        Kavya P.
                        </h5>

                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                        Vadodara Customer
                        </p>
                    </div>
                    </div>

                    <div className="text-slate-300 dark:text-slate-800 font-serif text-4xl select-none pointer-events-none transform translate-y-2">
                    ”
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;