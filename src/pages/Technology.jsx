import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Technology = () => {
  // Interactive 7-Layer Matrix State Controller
  const [activeLayer, setActiveLayer] = useState(0);

  // Technical Matrix Dataset Blueprint
  const layersData = [
    { 
      name: "Premium Cotton Topsheet", 
      technical: "Delicate cloud-weave non-woven organic top sheet engineered for hyper-fast infiltration while reducing skin-to-fabric friction matrices to eliminate dynamic motion rashes." 
    },
    { 
      name: "Anion Anti-Bacterial Strip", 
      technical: "Embedded structural bio-core line generating negative ions to naturally suppress microbial growth, safely neutralizing odours dynamically without chemical perfumes." 
    },
    { 
      name: "Fluid Acquisition Layer", 
      technical: "Custom acceleration transfer distribution grid that steers vertical fluid molecules directly downwards, completely blocking unwanted side dispersion vectors." 
    },
    { 
      name: "Super Absorbent Polymer Matrix", 
      technical: "Premium Japanese high-density SAP micro-beads that lock liquid molecules instantly, converting fluids into a crystallized, immutable gel form." 
    },
    { 
      name: "Enhanced Flow Distribution Layer", 
      technical: "Secondary balanced core alignment layer ensuring horizontal structural saturation limits remain optimized, avoiding spot leaking during heavy active wear." 
    },
    { 
      name: "Breathable Micro-perforated Base", 
      technical: "Highly calibrated, hyper-breathable back sheet matrix that ventilates toxic hot damp air particles out while offering full leakage perimeter security." 
    },
    { 
      name: "Adhesive Security Alignment Profile", 
      technical: "Ergonomically spaced backing lines paired with wider flexible wings calibrated to hold positions securely without shifting layout lines or underwater displacement." 
    }
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* INFECTION PROTECTION ZONE                  */}
      {/* ========================================================= */}
      <section className="py-40 px-4 md:px-8 relative overflow-hidden bg-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-pink/10 to-brand-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal active">
                  <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <i className="fas fa-user-shield text-sm"></i>
                      <span>Bio-Hygiene Standard</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 dark:text-white leading-tight">
                      Advanced Microbial <br className="hidden sm:inline" />
                      <span className="bg-gradient-to-r from-brand-pink via-brand-purple to-purple-600 bg-clip-text text-transparent">Infection Protection</span>
                  </h2>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple rounded-full mx-auto lg:mx-0"></div>
                  
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                      “Our cotton-soft sanitary pads are deliberately engineered to prioritize your internal ecosystem. The highly breathable organic surface matrix combined with sterilized back-sheets mitigates moisture accumulation, significantly preventing microphytic shifts and standard anaerobic bacterial vectors.”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
                      <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/60">
                          <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/40 text-brand-pink flex items-center justify-center text-xs">
                              <i className="fas fa-ban"></i>
                          </div>
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Zero Chemical Bleach</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/60">
                          <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-950/40 text-brand-purple flex items-center justify-center text-xs">
                              <i className="fas fa-heartbeat"></i>
                          </div>
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Dermatologically Checked</span>
                      </div>
                  </div>
              </div>

              <div className="lg:col-span-5 flex justify-center relative reveal active">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-purple/20 rounded-3xl blur-xl opacity-50 transform scale-95 pointer-events-none"></div>
                  
                  <div className="w-full max-w-sm rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl"></div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="relative mb-6">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-pink/20 opacity-75 animate-ping"></span>
                              <div className="relative w-20 h-20 bg-gradient-to-tr from-brand-pink to-brand-purple rounded-full flex items-center justify-center text-3xl shadow-lg shadow-brand-pink/30 border border-white/10">
                                  <i className="fas fa-shield-virus"></i>
                              </div>
                          </div>
                          
                          <h4 className="text-md font-bold tracking-wider uppercase text-slate-200 mb-1">Active Protection Zone</h4>
                          <span className="text-[10px] tracking-widest text-brand-pink font-mono uppercase">Status: Secure Layered Defense</span>
                          
                          <div className="w-full mt-6 space-y-3.5 text-left border-t border-slate-800 pt-6">
                              <div className="flex items-start space-x-3">
                                  <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm"></i>
                                  <div>
                                      <h5 className="text-xs font-semibold text-slate-200">pH-Balanced Matrix</h5>
                                      <p className="text-[11px] text-slate-400 mt-0.5">Maintains optimal private skin acidity barriers all day.</p>
                                  </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                  <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm"></i>
                                  <div>
                                      <h5 className="text-xs font-semibold text-slate-200">Anti-Odour Polymer Core</h5>
                                      <p className="text-[11px] text-slate-400 mt-0.5">Safely neutralizes ammonia molecules without artificial perfumes.</p>
                                  </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                  <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm"></i>
                                  <div>
                                      <h5 className="text-xs font-semibold text-slate-200">Thermal Control Channels</h5>
                                      <p className="text-[11px] text-slate-400 mt-0.5">Expels moist micro-vapors to dramatically drop internal heat levels.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE EXPLODED ANATOMY (7-LAYERS)        */}
      {/* ========================================================= */}
      <section id="inside-the-pad" className="py-32 px-4 md:px-8 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-900/60 overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-24 reveal active">
                  <span className="text-[11px] font-black tracking-[0.25em] text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block border border-brand-purple/10 uppercase">
                      Structural Engineering
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-5 tracking-tight leading-none">
                      Inside The Harroberry Matrix
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mt-6 rounded-full"></div>
                  <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
                      Seven highly integrated micro-layers working simultaneously to guarantee complete dry skin safety boundaries.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Interactive Layer List Trigger Panel */}
                  <div className="lg:col-span-7 space-y-3">
                      {layersData.map((layer, index) => (
                          <div 
                              key={index}
                              onMouseEnter={() => setActiveLayer(index)}
                              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                                  activeLayer === index 
                                      ? 'bg-gradient-to-r from-white to-pink-50/20 dark:from-slate-900/40 dark:to-purple-950/10 border-brand-pink/40 shadow-md shadow-slate-100 dark:shadow-none translate-x-2'
                                      : 'bg-white/40 dark:bg-transparent border-slate-200/60 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                              }`}
                          >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0 transition-colors ${
                                  activeLayer === index ? 'bg-brand-pink text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                              }`}>
                                  0{index + 1}
                              </div>
                              <div className="space-y-1">
                                  <h4 className={`font-extrabold text-sm md:text-base tracking-tight ${activeLayer === index ? 'text-brand-pink' : 'text-slate-900 dark:text-slate-200'}`}>
                                      {layer.name}
                                  </h4>
                                  <p className={`text-xs md:text-sm leading-relaxed transition-all ${activeLayer === index ? 'text-slate-600 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500 line-clamp-1'}`}>
                                      {layer.technical}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Right Column: Dynamic Glassmorphic Core Blueprint Display */}
                  <div className="lg:col-span-5 h-full flex flex-col justify-center">
                      <div className="relative p-8 md:p-10 rounded-[32px] bg-white/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-md shadow-xl text-center overflow-hidden min-h-[380px] flex flex-col justify-center items-center">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 dark:bg-brand-pink/10 rounded-full blur-2xl"></div>
                          
                          <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-md border border-brand-purple/10 mb-6">
                              Blueprint Segment {activeLayer + 1}/07
                          </span>
                          
                          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-950 shadow-xl border border-slate-100 dark:border-slate-800/60 flex items-center justify-center text-brand-pink text-xl mb-6 animate-bounce">
                              <i className="fas fa-layer-group"></i>
                          </div>

                          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                              {layersData[activeLayer].name}
                          </h3>
                          
                          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                              {layersData[activeLayer].technical}
                          </p>

                          <div className="mt-8 flex gap-1.5">
                              {layersData.map((_, dotIdx) => (
                                  <div 
                                      key={dotIdx}
                                      className={`h-1.5 rounded-full transition-all duration-300 ${activeLayer === dotIdx ? 'w-6 bg-brand-pink' : 'w-1.5 bg-slate-200 dark:bg-slate-800'}`}
                                  />
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/* CLINICAL VALIDATION               */}
      {/* ========================================================= */}
      <section id="medical-validation" className="py-28 px-4 md:px-8 bg-slate-50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-900/60 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
                  <div className="lg:col-span-5 flex justify-center relative reveal active">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-purple/20 rounded-[36px] blur-xl transform scale-95 opacity-60"></div>
                      
                      <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800">
                          <img src="./doctor.webp" alt="Clinical Gynecological Endorsement" className="w-full h-full object-cover" />
                          
                          <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                              <h4 className="font-black text-white text-sm">Trusted By Doctors</h4>
                              <p className="text-[10px] font-bold text-brand-pink uppercase tracking-widest mt-0.5">Consultant Gynecologist</p>
                          </div>
                      </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 reveal active">
                      <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-emerald-500/10">
                          <i className="fas fa-user-md className-sm"></i>
                          <span>Clinical Evaluation Endorsement</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                          Preserving Your Delicate Vaginal Micro-Climate Zone
                      </h3>
                      
                      <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple rounded-full"></div>
                      
                      <blockquote className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed relative bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200/40 dark:border-slate-800 shadow-inner">
                          <div className="text-brand-pink font-serif text-5xl absolute -top-4 left-3 opacity-20 select-none">“</div>
                          <p className="relative z-10 pl-4">
                              "Many chronic recurring conditions like bacterial vaginitis or skin friction rashes seen in daily clinics map directly to the usage of plastic top sheets and non-breathable pad back layers. Harroberry's implementation of standard cloud-weave organic top sheets combined with dynamic high-density SAP gel absorption arrays prevents prolonged moisture nesting vectors. I confidently support this architecture for continuous safe everyday hygiene."
                          </p>
                      </blockquote>
                      
                      <div className="flex items-center gap-6 pt-2 text-slate-400 text-xs font-bold uppercase tracking-wider px-2">
                          <span className="flex items-center gap-1.5"><i className="fas fa-shield-virus text-brand-pink"></i> Bio-Tested Safe</span>
                          <span className="flex items-center gap-1.5"><i className="fas fa-check-double text-brand-purple"></i> Zero Dioxin Bleach</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      {/* ========================================================= */}
      {/* FEATURES GRID                     */}
      {/* ========================================================= */}
      <section id="features" className="pt-10 pb-28 px-4 md:px-8 bg-transparent transition-colors duration-500 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20 reveal active">
                  <span className="text-[11px] font-black tracking-[0.25em] text-brand-pink dark:text-brand-pink/90 uppercase bg-brand-pink/10 px-3 py-1.5 rounded-full inline-block mb-4">
                      Advanced Bio-Engineering
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      Engineered For Ultra Comfort
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-5 rounded-full"></div>
                  <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto">
                      Experience advanced Japanese core layer technologies deliberately customized to protect the dynamic lifecycle of the modern woman.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                  <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-200/60 to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-pink/30 hover:to-brand-purple/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 reveal active">
                      <div className="h-full bg-white/70 dark:bg-slate-950/60 backdrop-blur-md p-8 rounded-[23px] flex flex-col justify-between transition-colors duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/80">
                          <div>
                              <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center rounded-2xl text-brand-pink text-xl mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                  <i className="fas fa-cloud"></i>
                              </div>
                              <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest block mb-2">Layer 01 Surface</span>
                              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-colors group-hover:text-brand-pink">
                                  Cotton Soft Surface
                              </h3>
                              <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                                  Delicate cloud-weave top sheet reduces skin-to-fabric friction matrices, completely eliminating dynamic motion rashes.
                              </p>
                          </div>
                          <div className="pt-6 flex justify-end text-slate-300 dark:text-slate-700 group-hover:text-brand-pink transition-colors">
                              <i className="fas fa-arrow-right text-sm transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
                          </div>
                      </div>
                  </div>

                  <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-200/60 to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-pink/30 hover:to-brand-purple/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 reveal active">
                      <div className="h-full bg-white/70 dark:bg-slate-950/60 backdrop-blur-md p-8 rounded-[23px] flex flex-col justify-between transition-colors duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/80">
                          <div>
                              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center rounded-2xl text-brand-purple text-xl mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                  <i className="fas fa-droplet"></i>
                              </div>
                              <span className="text-[10px] font-bold text-brand-purple uppercase tracking-widest block mb-2">Gel Core Lock</span>
                              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-colors group-hover:text-brand-purple">
                                  60ML High Flow Lock
                              </h3>
                              <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                                  Super Absorbent Polymers (SAP Technology) convert liquid molecules instantly into locked gel layers deep inside the pad structure.
                              </p>
                          </div>
                          <div className="pt-6 flex justify-end text-slate-300 dark:text-slate-700 group-hover:text-brand-purple transition-colors">
                              <i className="fas fa-arrow-right text-sm transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
                          </div>
                      </div>
                  </div>

                  <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-200/60 to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-pink/30 hover:to-brand-purple/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 reveal active">
                      <div className="h-full bg-white/70 dark:bg-slate-950/60 backdrop-blur-md p-8 rounded-[23px] flex flex-col justify-between transition-colors duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/80">
                          <div>
                              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center rounded-2xl text-emerald-500 text-xl mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                  <i className="fas fa-shield-halved"></i>
                              </div>
                              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-2">Bio Security</span>
                              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-colors group-hover:text-emerald-500">
                                  Anti-Rash Ecosystem
                              </h3>
                              <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                                  A highly calibrated, hyper-breathable back sheet matrix ventilates damp air flow out to preserve standard vaginal pH boundaries.
                              </p>
                          </div>
                          <div className="pt-6 flex justify-end text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors">
                              <i className="fas fa-arrow-right text-sm transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
                          </div>
                      </div>
                  </div>

                  <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-200/60 to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-pink/30 hover:to-brand-purple/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 reveal active">
                      <div className="h-full bg-white/70 dark:bg-slate-950/60 backdrop-blur-md p-8 rounded-[23px] flex flex-col justify-between transition-colors duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/80">
                          <div>
                              <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center rounded-2xl text-amber-500 text-xl mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                  <i className="fas fa-clock"></i>
                              </div>
                              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-2">Ergonomic Cut</span>
                              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-colors group-hover:text-amber-500">
                                  Long Wear Security
                              </h3>
                              <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                                  Wider flexible wings and structured side barrier borders provide complete comprehensive underwear adherence without slide displacements.
                              </p>
                          </div>
                          <div className="pt-6 flex justify-end text-slate-300 dark:text-slate-700 group-hover:text-amber-500 transition-colors">
                              <i className="fas fa-arrow-right text-sm transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default Technology;