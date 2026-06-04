import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqDatabase = [
    {
      q: "What makes Harroberry materials completely rash-free?",
      a: "Harroberry pads use hyper-pure, non-allergenic processed long-weave organic cotton matrices. By completely removing artificial aromatic additives, chemical bleaching agents, or synthetic plastic textures, skin friction layers are entirely negated—safeguarding you from dynamic motion rashes inside severe weather scenarios."
    },
    {
      q: "What is the minimum wholesale order threshold for regional distributors?",
      a: "Our standardized minimum bulk logistics packages scale directly based on your geographical pipeline footprint across states. To view explicit distributor tiers, wholesale margin rules, and procurement lead times, please submit your data framework via our B2B commercial request form on our Distributor channel."
    },
    {
      q: "How does the internal Japanese SAP structural layer perform under high volume flows?",
      a: "Our structural architecture incorporates localized High-Density Super Absorbent Polymers (SAP Technology). Liquid fluid molecules are captured immediately upon contact and transformed into completely dry inner gel grids deep within the internal layer. This stops back-flow leakage operations during both nighttime rest phases and active day travel."
    }
  ];

  return (
    <>
      {/* ========================================================= */}
      {/*                 WHY CHOOSE HARROBERRY                     */}
      {/* ========================================================= */}
      <section id="why-choose-track" class="py-28 px-4 md:px-8 bg-gradient-to-b from-transparent to-slate-50/30 dark:to-slate-950/10 overflow-hidden">
          <div class="max-w-7xl mx-auto">
              
              <div class="text-center max-w-2xl mx-auto mb-10 reveal active">
                  <p class="text-xs font-bold uppercase tracking-[0.25em] text-brand-pink bg-pink-500/5 dark:bg-pink-500/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-pink-500/10">
                      Quality Benchmarks
                  </p>
                  <h2 class="text-3xl md:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-none">
                      Why Indian Women Trust Harroberry
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-5 rounded-full"></div>
              </div>

              {/* Alternating Premium Presentation Track */}
              <div class="space-y-28 max-w-6xl mx-auto">
                  
                  {/* ROW 01: Cotton Materials */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center reveal active group">
                      <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                          <div class="absolute inset-0 bg-gradient-to-tr from-brand-pink/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                          <img src="./Real_pad_u.jpg" alt="Premium Quality Materials" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      
                      <div class="space-y-5">
                          <div class="flex items-center gap-3">
                              <span class="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white font-mono font-black text-xs flex items-center justify-center border border-slate-800 shadow-md">
                                  01
                              </span>
                              <span class="text-[10px] font-black uppercase tracking-wider text-brand-pink bg-pink-500/5 dark:bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/10">
                                  Material Science
                              </span>
                          </div>
                          <h3 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                              High Quality Cotton Material
                          </h3>
                          <p class="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                              Our pads incorporate hyper-pure non-allergenic processed long-weave cotton to minimize top layer chaffing, delivering frictionless protection perfectly adapted to hot and humid geographical seasons across India.
                          </p>
                      </div>
                  </div>

                  {/* ROW 02: Hygienic Engineering */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center reveal active group">
                      <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-xl transition-all duration-500 group-hover:shadow-2xl md:order-2">
                          <div class="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                          <img src="./Real_pad_2_u.jpg" alt="Hygienic Design" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      
                      <div class="space-y-5 md:order-1">
                          <div class="flex items-center gap-3">
                              <span class="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white font-mono font-black text-xs flex items-center justify-center border border-slate-800 shadow-md">
                                  02
                              </span>
                              <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple bg-purple-500/5 dark:bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/10">
                                  Bio-Security
                              </span>
                          </div>
                          <h3 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                              Skin-Safe Hygienic Engineering
                          </h3>
                          <p class="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                              Manufactured inside state-of-the-art contact-free automated assembly units based right within Gujarat, ensuring untouched sanitary hygiene standards from basic processing up to final sealed box packaging.
                          </p>
                      </div>
                  </div>

                  {/* ROW 03: Wholesale Frameworks */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center reveal active group">
                      <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                          <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                          <img src="./SIDE_img_2.png" alt="Affordable Wholesale Pricing" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      
                      <div class="space-y-5">
                          <div class="flex items-center gap-3">
                              <span class="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-800 text-white font-mono font-black text-xs flex items-center justify-center border border-slate-800 shadow-md">
                                  03
                              </span>
                              <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/10">
                                  Logistics Optimization
                              </span>
                          </div>
                          <h3 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                              Affordable Wholesale Frameworks
                          </h3>
                          <p class="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                              By controlling raw product logistics internally, we skip multiple middle tier costs to offer modern premium luxury performance tiers at realistic mass competitive wholesale structures across communities.
                          </p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/*               ABOUT BENTO GRID COMPARTMENTS               */}
      {/* ========================================================= */}
      <section id="about" class="py-28 px-4 md:px-8 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-900/60 overflow-hidden">
          <div class="max-w-7xl mx-auto">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  <div class="space-y-8 lg:col-span-7 reveal active">
                      <div class="space-y-3">
                          <span class="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand-pink bg-pink-500/5 dark:bg-pink-500/10 px-4 py-1.5 rounded-full border border-pink-500/10">
                              Our Core Mission
                          </span>
                          <h2 class="text-3xl md:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-xl">
                              Consciously Designed For True Personal Freedom
                          </h2>
                      </div>
                      
                      <div class="space-y-6 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide font-medium">
                          <p>
                              Harroberry emerged with a clear goal: providing uncompromised high-absorption sanitary pads that cater to the demanding everyday schedules of Indian women. We recognize that safe, comfortable period management is a fundamental human right, not a luxury.
                          </p>
                          <p class="text-slate-500 dark:text-slate-400/80">
                              By integrating multi-layered localized core architectures with super-absorbent non-woven surfaces, our pads protect during both intense workouts and deep overnight rest periods alike.
                          </p>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                          <div class="group p-5 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-pink-500/20">
                              <div class="text-xs font-mono text-brand-pink font-bold mb-1">01 // Localized R&D</div>
                              <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-1">Tailored for India</h4>
                              <p class="text-xs text-slate-400 dark:text-slate-500">Formulated precisely to support active lifestyle parameters and high humidity contexts seamlessly.</p>
                          </div>
                          <div class="group p-5 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-purple-500/20">
                              <div class="text-xs font-mono text-brand-purple font-bold mb-1">02 // Multi-Layer Protect</div>
                              <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-1">Advanced Fluid Lock</h4>
                              <p class="text-xs text-slate-400 dark:text-slate-500">Super-absorbent non-woven polymers capture flow structural weight efficiently without leaks.</p>
                          </div>
                      </div>
                  </div>

                  <div class="relative lg:col-span-5 reveal active mt-8 lg:mt-0 flex items-center justify-center">
                      <div class="absolute -top-12 -right-12 w-72 h-72 bg-brand-pink/5 dark:bg-brand-pink/10 rounded-full blur-3xl pointer-events-none"></div>
                      <div class="absolute -bottom-12 -left-12 w-72 h-72 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
                      
                      <div class="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
                          <div class="absolute top-0 left-0 w-3/4 aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-950 transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10 group">
                              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                              <img src="./pad_machine.jpg" alt="Manufacturing Cleanliness" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>
                          
                          <div class="absolute bottom-0 right-0 w-2/3 aspect-[1/1] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-950 transform rotate-6 hover:rotate-0 transition-all duration-500 z-20 group">
                              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                              <img src="./grp_discussion.avif" alt="Empowerment" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>

                          <div class="absolute bottom-1/3 left-[-20px] bg-slate-950 dark:bg-slate-900 text-white p-4 rounded-2xl shadow-xl border border-slate-800 z-30 hidden sm:flex items-center gap-3 transform -translate-x-4 animate-bounce" style={{ animationDuration: '4s' }}>
                              <div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                                  <i class="fas fa-shield-virus"></i>
                              </div>
                              <div>
                                  <p class="text-[10px] font-black uppercase tracking-wider text-slate-400">Sterilization Check</p>
                                  <p class="text-xs font-bold text-slate-100">100% Certified Clean</p>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/*                 INTERACTIVE SIZE GUIDE                    */}
      {/* ========================================================= */}
      <section id="size-guide" class="py-32 px-4 md:px-8 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-950/20 relative overflow-hidden">
          <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="max-w-7xl mx-auto relative z-10">
              <div class="text-center max-w-3xl mx-auto mb-24 reveal active">
                  <span class="text-[11px] font-black tracking-[0.25em] text-brand-pink bg-brand-pink/10 px-4 py-1.5 rounded-full inline-block border border-brand-pink/10 uppercase">
                      Interactive Matrix
                  </span>
                  <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-5 tracking-tight leading-none">
                      Which Pad Fits Your Cycle?
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-6 rounded-full"></div>
                  <p class="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
                      Deliberately calibrated variants designed to map the dynamic flow transitions of your day.
                  </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  <div class="group relative p-[1px] rounded-[38px] bg-gradient-to-br from-slate-200/60 via-transparent to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-pink/30 hover:to-transparent transition-all duration-500 shadow-xl reveal active">
                      <div class="h-full bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[37px] flex flex-col justify-between relative overflow-hidden">
                          <div class="absolute -top-16 -right-16 w-36 h-36 bg-brand-pink/5 group-hover:scale-150 rounded-full blur-2xl transition-transform duration-700"></div>
                          
                          <div class="space-y-6">
                              <div class="flex items-center justify-between">
                                  <div class="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-brand-pink shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                      <i class="fas fa-sun text-xl"></i>
                                  </div>
                                  <span class="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-pink-500/5 text-brand-pink border border-brand-pink/10">Active Day Track</span>
                              </div>
                              
                              <div class="space-y-2">
                                  <h3 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight transition-colors group-hover:text-brand-pink">Day Comfort Framework</h3>
                                  <p class="text-xs md:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">Engineered for agile kinetic movement during complex office workflows, campus hours, light gym routines, or everyday humid travel schedules.</p>
                              </div>

                              <div class="w-full h-[1px] bg-slate-100 dark:bg-slate-800"></div>

                              <div class="space-y-3.5 pt-2">
                                  <div class="flex justify-between items-center text-xs font-bold border-b border-slate-100/50 dark:border-slate-800 pb-3">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Recommended System</span>
                                      <span class="text-brand-pink font-extrabold">Harroberry XL (280mm)</span>
                                  </div>
                                  <div class="flex justify-between items-center text-xs font-bold border-b border-slate-100/50 dark:border-slate-800 pb-3">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Flow Intensity Match</span>
                                      <span class="text-slate-700 dark:text-slate-300">Light to Standard Flow</span>
                                  </div>
                                  <div class="flex justify-between items-center text-xs font-bold pb-1">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Structural Containment</span>
                                      <span class="text-slate-700 dark:text-slate-300">Up to 5 Hours Secure Stay</span>
                                  </div>
                              </div>
                          </div>
                          
                          <Link to="/products" class="w-full mt-8 h-12 flex items-center justify-center bg-slate-50 hover:bg-brand-pink/5 dark:bg-slate-950 dark:hover:bg-brand-pink/10 text-slate-800 dark:text-slate-200 font-black rounded-xl text-xs uppercase tracking-widest border border-slate-200/60 dark:border-slate-800/80 transition-all shadow-sm active:scale-95">
                              Select XL Dimensions
                          </Link>
                      </div>
                  </div>

                  <div class="group relative p-[1px] rounded-[38px] bg-gradient-to-br from-slate-200/60 via-transparent to-transparent dark:from-slate-800/60 dark:to-transparent hover:from-brand-purple/30 hover:to-transparent transition-all duration-500 shadow-xl reveal active">
                      <div class="h-full bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[37px] flex flex-col justify-between relative overflow-hidden">
                          <div class="absolute -top-16 -right-16 w-36 h-36 bg-brand-purple/5 group-hover:scale-150 rounded-full blur-2xl transition-transform duration-700"></div>
                          
                          <div class="space-y-6">
                              <div class="flex items-center justify-between">
                                  <div class="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-brand-purple shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                      <i class="fas fa-moon text-xl"></i>
                                  </div>
                                  <span class="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-purple-500/5 text-brand-purple border border-brand-purple/10">Extended Night Track</span>
                              </div>
                              
                              <div class="space-y-2">
                                  <h3 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight transition-colors group-hover:text-brand-purple">Overnight Guard System</h3>
                                  <p class="text-xs md:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">Calibrated with an expanded structural footprint outline explicitly mapped to guarantee continuous protection across extended sleep durations.</p>
                              </div>

                              <div class="w-full h-[1px] bg-slate-100 dark:bg-slate-800"></div>

                              <div class="space-y-3.5 pt-2">
                                  <div class="flex justify-between items-center text-xs font-bold border-b border-slate-100/50 dark:border-slate-800 pb-3">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Recommended System</span>
                                      <span class="text-brand-purple font-extrabold">Harroberry XXL (320mm)</span>
                                  </div>
                                  <div class="flex justify-between items-center text-xs font-bold border-b border-slate-100/50 dark:border-slate-800 pb-3">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Flow Intensity Match</span>
                                      <span class="text-slate-700 dark:text-slate-300">Heavy Volume / Overnight Comfort</span>
                                  </div>
                                  <div class="flex justify-between items-center text-xs font-bold pb-1">
                                      <span class="text-slate-400 font-semibold tracking-wider uppercase text-[10px]">Structural Containment</span>
                                      <span class="text-slate-700 dark:text-slate-300">Up to 8 Hours Leak-Free Guard</span>
                                  </div>
                              </div>
                          </div>
                          
                          <Link to="/products" class="w-full mt-8 h-12 flex items-center justify-center bg-slate-50 hover:bg-brand-purple/5 dark:bg-slate-950 dark:hover:bg-brand-purple/10 text-slate-800 dark:text-slate-200 font-black rounded-xl text-xs uppercase tracking-widest border border-slate-200/60 dark:border-slate-800/80 transition-all shadow-sm active:scale-95">
                              Select XXL Dimensions
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/*               FREQUENTLY ASKED QUESTIONS                  */}
      {/* ========================================================= */}
      <section id="faq" class="py-32 px-4 md:px-8 bg-transparent relative overflow-hidden">
          <div class="max-w-4xl mx-auto relative z-10">
              <div class="text-center max-w-2xl mx-auto mb-20 reveal active">
                  <span class="text-[11px] font-black tracking-[0.25em] text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block border border-brand-purple/10 uppercase">
                      Information Desk
                  </span>
                  <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-5 tracking-tight leading-none">
                      Frequently Asked Questions
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mt-6 rounded-full"></div>
              </div>

              <div class="space-y-4 max-w-3xl mx-auto">
                {faqDatabase.map((item, idx) => (
                  <div key={idx} class="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                      <button onClick={() => toggleFaq(idx)} class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base text-slate-800 dark:text-white focus:outline-none select-none">
                          <span>{item.q}</span>
                          <div class="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-[10px] text-slate-400 group-hover:text-brand-pink transition-colors">
                              <i class={`fas fa-chevron-down transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                          </div>
                      </button>
                      <div class={`px-6 pb-6 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium border-t border-slate-50 dark:border-slate-800/50 pt-4 ${openFaq === idx ? 'block' : 'hidden'}`}>
                          {item.a}
                      </div>
                  </div>
                ))}
              </div>
          </div>
      </section>

      {/* ========================================================= */}
      {/*               HYGIENE INTELLIGENCE HUB                    */}
      {/* ========================================================= */}
      <section id="education" class="py-32 px-4 md:px-8 bg-slate-50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-900/60 overflow-hidden">
          <div class="max-w-7xl mx-auto">
              <div class="text-center max-w-2xl mx-auto mb-24 reveal active">
                  <span class="text-[11px] font-black tracking-[0.25em] text-brand-pink bg-brand-pink/10 px-4 py-1.5 rounded-full inline-block border border-brand-pink/10 uppercase">
                      Hygiene Frameworks
                  </span>
                  <h2 class="text-3xl md:text-[42px] font-black text-slate-900 dark:text-white mt-5 tracking-tight leading-none">
                      Period Care Intelligence Hub
                  </h2>
                  <div class="w-12 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mt-5 rounded-full"></div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div class="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 hover:border-brand-pink/20 transition-all duration-300 flex flex-col justify-between">
                      <div class="space-y-4">
                          <div class="flex items-center justify-between">
                              <span class="text-[10px] font-mono font-black text-brand-pink tracking-widest bg-pink-500/5 dark:bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/10">01 // INTERVALS</span>
                              <div class="text-brand-pink text-xs"><i class="fas fa-hourglass-half"></i></div>
                          </div>
                          <h4 class="font-extrabold text-slate-900 dark:text-white text-base md:text-lg tracking-tight">The 5-Hour Core Rule</h4>
                          <p class="text-xs md:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">Swapping your personal sanitary pad structures every 5 hours ensures complete mitigation against microscopic bacteria nesting loops inside typical regional tropical environments.</p>
                      </div>
                      <div class="w-full h-1 bg-brand-pink/10 group-hover:bg-brand-pink mt-6 rounded-full transition-colors duration-500"></div>
                  </div>

                  <div class="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 hover:border-brand-purple/20 transition-all duration-300 flex flex-col justify-between">
                      <div class="space-y-4">
                          <div class="flex items-center justify-between">
                              <span class="text-[10px] font-mono font-black text-brand-purple tracking-widest bg-purple-500/5 dark:bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/10">02 // BIO PH BOUNDS</span>
                              <div class="text-brand-purple text-xs"><i class="fas fa-heartbeat"></i></div>
                          </div>
                          <h4 class="font-extrabold text-slate-900 dark:text-white text-base md:text-lg tracking-tight">Vaginal Climate Balance</h4>
                          <p class="text-xs md:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">Pads structured with high plastic components trap micro-vapors, elevating local heat levels. Organic micro-ventilated setups retain optimal chemical skin limits securely.</p>
                      </div>
                      <div class="w-full h-1 bg-brand-purple/10 group-hover:bg-brand-purple mt-6 rounded-full transition-colors duration-500"></div>
                  </div>

                  <div class="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
                      <div class="space-y-4">
                          <div class="flex items-center justify-between">
                              <span class="text-[10px] font-mono font-black text-emerald-600 dark:text-emerald-400 tracking-widest bg-emerald-500/5 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/10">03 // STRATEGY</span>
                              <div class="text-emerald-500 text-xs"><i class="fas fa-recycle"></i></div>
                          </div>
                          <h4 class="font-extrabold text-slate-900 dark:text-white text-base md:text-lg tracking-tight">Responsible Disposal Rules</h4>
                          <p class="text-xs md:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">Always cleanly wrap used pads internally in thick biological papers prior to placing them in trash systems. Never flush materials down public water vectors to maintain pipe safety lines.</p>
                      </div>
                      <div class="w-full h-1 bg-emerald-500/10 group-hover:bg-emerald-500 mt-6 rounded-full transition-colors duration-500"></div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default About;