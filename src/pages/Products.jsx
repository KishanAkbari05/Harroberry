import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('arch');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const productDatabase = {
    xl: {
      title: "HARROBERRY DAYCARE XL",
      badge: "Day Comfort Series",
      badgeClass: "bg-gradient-to-r from-pink-500 to-rose-500 shadow-pink-500/20",
      capacity: "<i class='fas fa-tint mr-1.5 text-brand-pink'></i> 280mm Profile Size",
      type: "Cotton Soft Breathable Day Pad",
      mrp: 399,
      price: 189,
      discount: "51% OFF",
      packSize: "40 Pads Pack",
      desc: "Engineered explicitly for complete dynamic freedom during active daytime schedules. Features a calibrated cloud-weave organic cotton surface top-sheet that channels rapid fluid flow away from your body, entirely eliminating top layer friction rashes. Integrated with double wings and locked structural core adhesion rules perfect for long wear conditions.",
      images: ["./xl_main.png", "./xl_pad.png", "./SIDE_img_1.png", "./SIDE_img_2.png", "./XL_INFO.png", "./Real_pad.jpeg"],
      features: [
        { icon: "fas fa-feather text-brand-pink", text: "Non-Allergenic Layer Matrix" },
        { icon: "fas fa-droplet text-brand-pink", text: "60ML+ Super-Gel Core Lock" },
        { icon: "fas fa-wind text-brand-pink", text: "Micro-Ventilated Airflow Grid" },
        { icon: "fas fa-shield-halved text-brand-pink", text: "Anti-Friction Double Wings" },
        { icon: "fas fa-certificate text-brand-pink", text: "100% Bleach Free Organic Core" },
        { icon: "fas fa-seedling text-brand-pink", text: "Dermatologically Checked Safe" }
      ],
      glowColor: "linear-gradient(135deg, rgba(255,79,135,0.2) 0%, rgba(139,92,246,0.05) 100%)",
      borderColor: "rgba(255,79,135,0.25)",
      shadowColor: "rgba(255,79,135,0.15)",
      waLink: "https://wa.me/919313948854?text=Hi,%20I'm%20interested%20in%20the%20Harroberry%20XL%20Pads%20Pack."
    },
    xxl: {
      title: "HARROBERRY OVERNIGHT XXL",
      badge: "Premium Night Guard",
      badgeClass: "bg-gradient-to-r from-brand-purple to-indigo-600 shadow-purple-500/20",
      capacity: "<i class='fas fa-tint mr-1.5 text-brand-purple'></i> 320mm Profile Variant",
      type: "Heavy Flow Night Lock Pad",
      mrp: 399,
      price: 189,
      discount: "51% OFF",
      packSize: "40 Pads Pack",
      desc: "Formulated specifically with an enlarged 320mm wide back outline and complex structural perimeter leak rails to provide reliable coverage overnight. Infused with superior-density SAP Japanese core polymer technologies that immediately trap liquid molecules into structured dry gel layers, enabling uninterrupted rest phases.",
      images: ["./xxl_main.png","./xxl_pad.png", "./SIDE_img_1.png", "./SIDE_img_2.png", "./XXL_INFO.png", "./Real_pad.jpeg"],
      features: [
        { icon: "fas fa-expand text-brand-purple", text: "Extended 320mm Silhouette" },
        { icon: "fas fa-bolt text-brand-purple", text: "Ultra-Rapid Capture Absorption" },
        { icon: "fas fa-lock text-brand-purple", text: "Dual Side Leak-Guard Barriers" },
        { icon: "fas fa-spa text-brand-purple", text: "Odour Neutralizer Base Matrix" },
        { icon: "fas fa-heart text-brand-purple", text: "Zero Chemical Fragrance Additives" },
        { icon: "fas fa-moon text-brand-purple", text: "Heavy Flow Guard Certification" }
      ],
      glowColor: "linear-gradient(135deg, rgba(139,92,246,0.22) 0%, rgba(79,70,229,0.05) 100%)",
      borderColor: "rgba(139,92,246,0.3)",
      shadowColor: "rgba(139,92,246,0.18)",
      waLink: "https://wa.me/919313948854?text=Hi%20Harroberry,%20I%20want%20to%20order%20your%20XXL%20sanitary%20pads."
    }
  };

  const openQuickView = (productKey) => {
    setSelectedProduct(productDatabase[productKey]);
    setCurrentPhotoIndex(0);
    setActiveTab('arch');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* PRODUCTS CATALOG                                          */}
      {/* ========================================================= */}
      <section id="products" className="py-28 px-4 md:px-8 bg-transparent transition-colors duration-500 relative">
          <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-20 reveal active">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-brand-pink uppercase bg-brand-pink/10 px-3 py-1 rounded-full">
                      Product Catalog
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
                      Explore Our Premium Range
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-5 rounded-full"></div>
                  <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-medium">
                      Tailored pack sizes engineered with multi-layered protection for varying flow intensities throughout your cycle.
                  </p>
              </div>

              {/* PRODUCT DISK GRID TRACK */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
                  
                  {/* CARD MODULE MODEL: XL */}
                  <div className="bg-slate-50/50 dark:bg-slate-800/40 rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between reveal active group">
                      <div className="relative bg-gradient-to-b from-rose-50/50 to-white dark:from-slate-800/20 p-8 flex justify-center overflow-hidden min-h-[320px] items-center">
                          <div className="absolute top-4 inset-x-4 flex justify-between items-center z-10">
                              <span className="bg-brand-pink text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                  Day Comfort
                              </span>
                              <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                                  {productDatabase.xl.discount}
                              </span>
                          </div>
                          <img src="./xl_main.png" alt="HARROBERRY XL PAD" className="h-64 object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-lg" />
                      </div>
                      
                      <div className="p-8 space-y-5 bg-white/90 dark:bg-slate-800/80 rounded-t-[24px] border-t border-slate-100 dark:border-slate-700/30">
                          <div className="space-y-1">
                              <div className="flex justify-between items-center">
                                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">HARROBERRY XL</h3>
                                  <span className="text-brand-pink font-bold bg-brand-pink/10 px-3 py-1 rounded-full text-xs uppercase tracking-wide">280mm Length</span>
                              </div>
                              
                              <div className="flex items-center space-x-2.5 pt-1">
                                  <span className="text-xl font-black text-slate-950 dark:text-white">₹{productDatabase.xl.price}</span>
                                  <span className="text-xs font-medium text-slate-400 line-through">MRP ₹{productDatabase.xl.mrp}</span>
                                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                                      {productDatabase.xl.packSize}
                                  </span>
                              </div>
                          </div>
                          
                          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Type: Cotton Soft Breathable Day Pad • Capacity: 60ML+ Lock
                          </p>
                          <hr className="border-slate-100 dark:border-slate-700/50" />
                          
                          <ul className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-pink mr-2.5 text-sm"></i>Ultra Absorbent Core</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-pink mr-2.5 text-sm"></i>Double Wing Adherence</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-pink mr-2.5 text-sm"></i>Rash-Free Top Sheet</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-pink mr-2.5 text-sm"></i>Infection Free</li>
                          </ul>
                          
                          <div className="pt-2 flex gap-4">
                              <button onClick={() => openQuickView('xl')} className="w-1/2 py-3.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors">
                                  View Details
                              </button>
                              <Link to="https://wa.me/919313948854?text=Hi,%20I%20want%20to%20order%20Harroberry%20XL%20Pads." target="_blank" rel="noopener noreferrer" className="w-1/2 text-center py-3.5 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-brand-pink/20 transition-all transform active:scale-95">
                                  Order Now
                              </Link>
                          </div>
                      </div>
                  </div>

                  {/* CARD MODULE MODEL: XXL */}
                  <div className="bg-slate-50/50 dark:bg-slate-800/40 rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between reveal active group">
                      <div className="relative bg-gradient-to-b from-purple-50/50 to-white dark:from-slate-800/20 p-8 flex justify-center overflow-hidden min-h-[320px] items-center">
                          <div className="absolute top-4 inset-x-4 flex justify-between items-center z-10">
                              <span className="bg-brand-purple text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                  Overnight Pack
                              </span>
                              <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                                  {productDatabase.xxl.discount}
                              </span>
                          </div>
                          <img src="./xxl_main.png" alt="HARROBERRY XXL PAD" className="h-64 object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-lg" />
                      </div>
                      
                      <div className="p-8 space-y-5 bg-white/90 dark:bg-slate-800/80 rounded-t-[24px] border-t border-slate-100 dark:border-slate-700/30">
                          <div className="space-y-1">
                              <div className="flex justify-between items-center">
                                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">HARROBERRY XXL</h3>
                                  <span className="text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full text-xs uppercase tracking-wide">320mm Length</span>
                              </div>

                              <div className="flex items-center space-x-2.5 pt-1">
                                  <span className="text-xl font-black text-slate-950 dark:text-white">₹{productDatabase.xxl.price}</span>
                                  <span className="text-xs font-medium text-slate-400 line-through">MRP ₹{productDatabase.xxl.mrp}</span>
                                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                                      {productDatabase.xxl.packSize}
                                  </span>
                              </div>
                          </div>
                          
                          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Type: Heavy Flow Night Lock Pad • Capacity: 60ML+ Rapid Lock
                          </p>
                          <hr className="border-slate-100 dark:border-slate-700/50" />
                          
                          <ul className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-purple mr-2.5 text-sm"></i>Extra-Wide Back Zone</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-purple mr-2.5 text-sm"></i>Heavy Flow Absorption</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-purple mr-2.5 text-sm"></i>Leak Proof Barriers</li>
                              <li className="flex items-center"><i className="fas fa-check-circle text-brand-purple mr-2.5 text-sm"></i>Infection Free</li>
                          </ul>
                          
                          <div className="pt-2 flex gap-4">
                              <button onClick={() => openQuickView('xxl')} className="w-1/2 py-3.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors">
                                  View Details
                              </button>
                              <Link to="https://wa.me/919313948854?text=Hi,%20I%20want%20to%20order%20Harroberry%20XXL%20Pads." target="_blank" rel="noopener noreferrer" className="w-1/2 text-center py-3.5 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-brand-purple/20 transition-all transform active:scale-95">
                                  Order Now
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>

              {/* NEW SECTION LAYER 1: BRAND VALUES FUNCTIONAL GRID */}
              <div className="max-w-5xl mx-auto mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { icon: "fa-shield-heart text-rose-500", title: "Rash-Free Comfort", desc: "Hypoallergenic top-sheets meticulously engineered to bypass epidermal chafing completely." },
                      { icon: "fa-ban text-purple-500", title: "Zero Toxin Matrix", desc: "Manufactured without elementary chlorine gas bleaching or volatile petrochemical scents." },
                      { icon: "fa-leaf text-emerald-500", title: "Organic Composition", desc: "Features high-grade breathable plant-derived base fibers optimized for delicate skin zones." },
                      { icon: "fa-droplet-slash text-blue-500", title: "Advanced Gel Core", desc: "Premium Japanese SAP lock configurations that insulate heavy moisture parameters effortlessly." }
                  ].map((value, i) => (
                      <div key={i} className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800">
                              <i className={`fas ${value.icon} text-lg`}></i>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
                      </div>
                  ))}
              </div>

              {/* TECHNICAL MATRIX COMPARISON PANEL */}
              <div className="max-w-5xl mx-auto mt-16 relative reveal active mb-24">
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-pink/10 rounded-full blur-2xl opacity-40 pointer-events-none"></div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-purple/10 rounded-full blur-2xl opacity-40 pointer-events-none"></div>

                  <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-300/80 dark:hover:border-slate-600/80 p-6 md:p-10">
                      <div className="text-center mb-8">
                          <span className="text-[11px] font-bold tracking-widest text-brand-pink dark:text-brand-pink/90 uppercase bg-brand-pink/10 px-3 py-1 rounded-full">
                              Technical Specifications
                          </span>
                          <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mt-3">
                              Product Comparison Matrix 
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              Find the perfect variant optimized for your unique daily flow requirements.
                          </p>
                      </div>

                      <div className="overflow-x-auto relative rounded-xl border border-slate-100 dark:border-slate-700/50">
                          <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                              <thead>
                                  <tr className="bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-700">
                                      <th className="p-4 md:p-5 font-semibold text-xs tracking-wider text-slate-400 uppercase w-2/5">Core Features Matrix</th>
                                      <th className="p-4 md:p-5 font-bold text-sm text-brand-pink bg-brand-pink/5 border-x border-slate-200/40 dark:border-slate-700/40 text-center w-1/3">
                                          <div className="flex items-center justify-center space-x-1.5">
                                              <i className="fas fa-certificate text-xs"></i>
                                              <span>Harroberry XL</span>
                                          </div>
                                      </th>
                                      <th className="p-4 md:p-5 font-bold text-sm text-brand-purple bg-brand-purple/5 text-center w-1/3">
                                          <div className="flex items-center justify-center space-x-1.5">
                                              <i className="fas fa-crown text-xs"></i>
                                              <span>Harroberry XXL</span>
                                          </div>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-medium text-slate-700 dark:text-slate-300">
                                  <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150">
                                      <td className="p-4 md:p-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2.5">
                                          <i className="fas fa-ruler-horizontal text-slate-400 text-xs"></i>
                                          <span>Length Dimensions</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center bg-brand-pink/[0.01] border-x border-slate-100 dark:border-slate-700/30">
                                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600">280 mm</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center bg-brand-purple/[0.01]">
                                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600">320 mm</span>
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150">
                                      <td className="p-4 md:p-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2.5">
                                          <i className="fas fa-droplet text-slate-400 text-xs"></i>
                                          <span>Flow Condition</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center text-xs text-slate-600 dark:text-slate-300 bg-brand-pink/[0.01] border-x border-slate-100 dark:border-slate-700/30">Regular / Day Flow</td>
                                      <td className="p-4 md:p-5 text-center text-xs text-slate-600 dark:text-slate-300 bg-brand-purple/[0.01]">Heavy Flow / Night Comfort</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150">
                                      <td className="p-4 md:p-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2.5">
                                          <i className="fas fa-shield-cat text-slate-400 text-xs"></i>
                                          <span>Wings Structure</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center bg-brand-pink/[0.01] border-x border-slate-100 dark:border-slate-700/30">
                                          <span className="inline-flex items-center text-xs text-brand-pink font-medium"><i className="fas fa-circle-check mr-1.5 text-xs"></i> Double Wings Secure</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center bg-brand-purple/[0.01]">
                                          <span className="inline-flex items-center text-xs text-brand-purple font-medium"><i className="fas fa-circle-check mr-1.5 text-xs"></i> Extra-Wide Back Wings</span>
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150">
                                      <td className="p-4 md:p-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2.5">
                                          <i className="fas fa-bolt text-slate-400 text-xs"></i>
                                          <span>Target Absorption</span>
                                      </td>
                                      <td className="p-4 md:p-5 text-center bg-brand-pink/[0.01] border-x border-slate-100 dark:border-slate-700/30 font-semibold text-slate-900 dark:text-white">60ml+</td>
                                      <td className="p-4 md:p-5 text-center bg-brand-purple/[0.01] font-semibold text-slate-900 dark:text-white">60ml+ Rapid Lock</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[11px] text-slate-400 px-1">
                          <span className="flex items-center"><i className="fas fa-info-circle mr-1"></i> Swipe horizontally on mobile views</span>
                          <span className="font-medium text-slate-500 dark:text-slate-400">100% Sterilized Core Material</span>
                      </div>
                  </div>
              </div>

              {/* NEW SECTION LAYER 2: DYNAMIC CYCLE ADVISOR GUIDE */}
              <div className="max-w-5xl mx-auto mb-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/20 dark:to-slate-900/10 rounded-3xl p-8 border border-slate-200/40 dark:border-slate-700/40">
                  <div className="text-center mb-8">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Cycle Allocation Map</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Smart deployment instructions matching functional flow milestones</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      {[
                          { title: "Days 1 - 2 (Peak Phase)", text: "Heavy volume layers thrive using our XXL overnight models to stop unexpected structural overflows.", tag: "XXL Premium", colors: "border-purple-200 bg-purple-50/30 text-purple-600 dark:border-purple-900/40 dark:bg-purple-950/10" },
                          { title: "Days 3 - 4 (Medium Phase)", text: "Transition cleanly into the XL daycare variant for optimal dynamic freedom during routine tasks.", tag: "XL Comfort", colors: "border-pink-200 bg-pink-50/30 text-pink-600 dark:border-pink-900/40 dark:bg-pink-950/10" },
                          { title: "Days 5 - 7 (Taper Phase)", text: "Maintain sanitary boundaries via XL profile units ensuring micro-ventilated airflow paths.", tag: "XL Regular", colors: "border-rose-200 bg-rose-50/30 text-rose-600 dark:border-rose-900/40 dark:bg-rose-950/10" }
                      ].map((item, idx) => (
                          <div key={idx} className={`p-6 rounded-2xl border ${item.colors} text-left flex flex-col justify-between`}>
                              <div>
                                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-inherit shadow-sm inline-block mb-3">{item.tag}</span>
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h4>
                                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* NEW SECTION LAYER 3: INTELLIGENT ACCORDION FAQ PANEL */}
              <div className="max-w-3xl mx-auto mb-24">
                  <div className="text-center mb-10">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Clear insights concerning hygienic design and manufacturing specifications</p>
                  </div>
                  <div className="space-y-3">
                      {[
                          { q: "What distinguishes Harroberry raw core sheets from standard market pads?", a: "Harroberry uses an unbleached, 100% organic-weave composition combined with high-density Japanese SAP layers. This setup traps fluid entirely inside a localized dry gel layer, removing standard moisture collection points that trigger dermal rashes." },
                          { q: "Are any artificial aromas or chemical fragrances added to enhance containment?", a: "No. Our production rules completely outlaw artificial perfumes, synthetic fragrances, and hazardous chlorine derivatives. Odor management is controlled safely via organic, biocompatible neutralize base matrices." },
                          { q: "Where are these items dispatched from, and what is the transit timeline?", a: "All inventory is directly dispatched from our production facility base in Rajkot, Gujarat. Standard shipments clear logistics tracking lines instantly, arriving safely at regional networks inside 2 to 5 business days." }
                      ].map((faq, index) => (
                          <div key={index} className="border border-slate-200/60 dark:border-slate-700/50 bg-white dark:bg-slate-800/30 rounded-xl overflow-hidden transition-all duration-200">
                              <button onClick={() => toggleFaq(index)} className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                  <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">{faq.q}</span>
                                  <i className={`fas fa-chevron-down text-xs text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-brand-pink' : ''}`}></i>
                              </button>
                              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 border-t border-slate-100 dark:border-slate-700/40' : 'max-h-0'}`}>
                                  <p className="p-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium bg-slate-50/50 dark:bg-slate-900/20">{faq.a}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* NEW SECTION LAYER 4: TRUST & CERTIFICATION FOOTER FRAME */}
              <div className="max-w-5xl mx-auto border-t border-slate-200/60 dark:border-slate-700/60 pt-10 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2"><i className="fas fa-check-shield text-emerald-500 text-sm"></i> DERMATOLOGICALLY APPROVED SAFE</span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2"><i className="fas fa-industry text-purple-500 text-sm"></i> ISO 9001 CLEANROOM ENVIRONMENT</span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2"><i className="fas fa-box-tissue text-pink-500 text-sm"></i> 100% STERILIZED RAW CORE SHEETS</span>
                  </div>
              </div>

          </div>
      </section>

      {/* ========================================================= */}
      {/* PRODUCT DETAILS DETAILS MODAL                             */}
      {/* ========================================================= */}
      {modalOpen && selectedProduct && (
            /* FIX: High z-[100] layer and padding configurations force modal content to start underneath the top navigation area smoothly */
            <div id="productModal" onClick={closeQuickView} className="fixed inset-0 z-[100] bg-slate-950/60 dark:bg-slate-950/85 backdrop-blur-2xl transition-all duration-500 ease-out opacity-100 overflow-y-auto flex justify-center items-start pt-24 sm:pt-28 md:pt-32 pb-8 px-3 sm:p-4 md:p-6">
                <div onClick={(e) => e.stopPropagation()} className="bg-white/95 dark:bg-slate-900/95 w-full max-w-6xl h-auto rounded-[36px] overflow-hidden border border-white/40 dark:border-slate-800/80 shadow-[0_32px_80px_-16px_rgba(15,23,42,0.18)] dark:shadow-[0_45px_90px_rgba(0,0,0,0.65)] flex flex-col relative transform scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    
                    <button onClick={closeQuickView} className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-500 hover:text-rose-500 dark:text-slate-300 dark:hover:text-rose-400 z-50 transition-all duration-300 hover:rotate-90 hover:scale-105 active:scale-95 shadow-lg border border-slate-200/40 dark:border-slate-700/40 backdrop-blur-md" aria-label="Dismiss Modal Frame">
                        <i className="fas fa-times text-base"></i>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                        
                        {/* LEFT COLUMN: VISUAL PRESENTATION ASSETS */}
                        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-slate-50/50 to-white/20 dark:from-slate-950/20 dark:to-transparent border-b lg:border-b-0 lg:border-r border-slate-200/30 dark:border-slate-800/50">
                            
                            {/* FIXED: Wrapper groups Hero Container and Thumbnails tightly together to remove unwanted gap */}
                            <div className="space-y-3 w-full">
                                <div id="modalHeroContainer" style={{ borderColor: selectedProduct.borderColor, boxShadow: `0 25px 60px -15px ${selectedProduct.shadowColor}` }} className="w-full relative rounded-[28px] border bg-white dark:bg-slate-900/60 flex justify-center items-center h-64 sm:h-80 lg:h-[400px] overflow-hidden transition-all duration-700 cubic-bezier(0.2, 1, 0.3, 1) group/hero">
                                    <div style={{ background: selectedProduct.glowColor }} className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-700 blur-3xl scale-90"></div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent dark:from-transparent opacity-60 pointer-events-none"></div>
                                    <div className="w-full h-full p-8 flex justify-center items-center relative z-10">
                                        <img src={selectedProduct.images[currentPhotoIndex]} alt="Focal Presentation View" className="w-full h-full max-h-[220px] sm:max-h-[260px] lg:max-h-[340px] object-contain transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_16px_32px_rgba(15,23,42,0.08)] dark:drop-shadow-[0_28px_55px_rgba(0,0,0,0.6)] group-hover/hero:scale-105" />
                                    </div>
                                </div>
                                
                                {/* THUMBNAIL TRACK CONTROL */}
                                <div className="grid grid-cols-3 gap-3 w-full">
                                    {selectedProduct.images.slice(0, 6).map((imgSrc, idx) => (
                                        <button key={idx} onClick={() => setCurrentPhotoIndex(idx)} className={`w-full h-16 sm:h-20 rounded-xl border-2 p-1 bg-white dark:bg-slate-800/70 shadow-sm transition-all duration-300 overflow-hidden relative group/thumb ${idx === currentPhotoIndex ? 'scale-[0.96] ring-4 border-brand-pink dark:border-brand-purple ring-brand-pink/20' : 'border-slate-200/50 dark:border-slate-700/50 opacity-60 hover:opacity-100 hover:scale-[0.96]'}`}>
                                            <img src={imgSrc} className="w-full h-full object-contain pointer-events-none rounded-md" alt="" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: TECHNICAL INVENTORY SPECS & ACQUISITION DECK */}
                        <div className="lg:col-span-7 flex flex-col justify-between bg-white/40 dark:bg-slate-900/20 backdrop-blur-md">
                            <div className="p-6 sm:p-8 lg:p-10 space-y-6 lg:space-y-8">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className={`text-[9px] font-black tracking-[0.25em] text-white px-4 py-1.5 rounded-full uppercase shadow-md ${selectedProduct.badgeClass}`}>{selectedProduct.badge}</span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Dynamic Offer Active
                                        </span>
                                        <span dangerouslySetInnerHTML={{ __html: selectedProduct.capacity }} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/40"></span>
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight pt-1">{selectedProduct.title}</h3>
                                        
                                        {/* Modal Pricing Header Section */}
                                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-1">
                                            <span className="text-2xl font-black text-slate-950 dark:text-white">₹{selectedProduct.price}</span>
                                            <span className="text-sm font-medium text-slate-400 line-through">MRP ₹{selectedProduct.mrp}</span>
                                            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-md">
                                                {selectedProduct.discount} Savings
                                            </span>
                                            <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md ml-auto sm:ml-0">
                                                {selectedProduct.packSize}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-pink-500">{selectedProduct.type}</p>
                                </div>
                                
                                <div className="w-full h-[1px] bg-gradient-to-r from-slate-200/60 via-slate-200/5 to-transparent dark:from-slate-800 dark:via-slate-800/5 dark:to-transparent"></div>
                                
                                {/* MULTI TAB NAVIGATION INFRASTRUCTURE */}
                                <div className="space-y-4">
                                    <div className="flex space-x-1 bg-slate-100/80 dark:bg-slate-800/60 p-1 rounded-xl max-w-sm border border-slate-200/20 dark:border-slate-700/30">
                                        <button onClick={() => setActiveTab('arch')} className={`tab-btn flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${activeTab === 'arch' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>Architecture</button>
                                        <button onClick={() => setActiveTab('bio')} className={`tab-btn flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${activeTab === 'bio' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>Bio Security</button>
                                    </div>
                                    
                                    {activeTab === 'arch' ? (
                                        <div className="tab-pane block transition-all duration-300">
                                            <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50/40 dark:bg-slate-800/20 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/40 shadow-inner">{selectedProduct.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="tab-pane block transition-all duration-300 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50/40 dark:bg-slate-800/20 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/40 shadow-inner">
                                            Harroberry pads implement hyper-pure chemical-free sterilization channels internally. By replacing artificial aromatics or synthetic chlorine processing matrices with medical non-woven raw fibers, your micro-climate zone maintains authentic pH boundaries free from toxic moisture accumulation.
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-[0.25em] flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span> Hygienic Engineering Matrix
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        {selectedProduct.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 bg-slate-50/60 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/40 dark:border-slate-700/40 hover:border-slate-300/60 dark:hover:border-slate-600/60 shadow-sm transition-all duration-300 w-full">
                                                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 w-full">
                                                    <i className={feat.icon}></i> {feat.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/30 dark:border-slate-800/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 mt-auto">
                                <div className="flex items-center space-x-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center text-sm shadow-inner border border-emerald-500/20">
                                        <i className="fas fa-truck-fast text-base"></i>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mb-0.5">Supply Chain Logistics</span>
                                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">Instant Dispatch • Rajkot Production Hub</span>
                                    </div>
                                </div>
                                <Link to={selectedProduct.waLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-8 h-[54px] rounded-xl whitespace-nowrap shadow-lg transition-all duration-300">
                                    <i className="fab fa-whatsapp text-lg"></i>
                                    <span>Order on WhatsApp</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )}

    </>
  );
};

export default Products;