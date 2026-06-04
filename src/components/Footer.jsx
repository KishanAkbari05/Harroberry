import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="relative bg-slate-950 text-slate-300 text-base overflow-hidden border-t border-slate-900 pt-24 pb-16 px-6 md:px-12">
        <div class="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-slate-900/60 items-center">
                <div class="lg:col-span-6 space-y-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple p-[1.5px]">
                            <div class="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                                <span class="text-sm font-black text-white tracking-tighter">H</span>
                            </div>
                        </div>
                        <h3 class="text-white text-2xl md:text-3xl font-black tracking-[0.15em] font-sans">HARROBERRY</h3>
                    </div>
                    <p class="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed font-medium">
                        Redefining personal healthcare benchmarks with advanced, automated, contact-free assembly operations in Gujarat, India.
                    </p>
                </div>
                
                <div class="lg:col-span-6 w-full lg:max-w-xl lg:ml-auto">
                    <form action="https://formspree.io/f/harroberry18@gmail.com" method="POST" class="relative flex flex-col sm:flex-row items-stretch sm:items-center p-2 bg-slate-900/40 rounded-2xl border border-slate-800/80 backdrop-blur-md focus-within:border-brand-pink/50 transition-colors group gap-2 sm:gap-0">
                        <div class="flex items-center flex-1 py-1">
                            <i class="fas fa-envelope text-slate-500 pl-4 pr-3 transition-colors group-focus-within:text-brand-pink text-base"></i>
                            <input type="email" name="email" required placeholder="Get wholesale price updates (Enter Email)" class="w-full bg-transparent px-2 py-3 text-sm md:text-base font-semibold text-slate-200 focus:outline-none placeholder-slate-600" />
                        </div>
                        <button type="submit" class="px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-pink to-brand-purple rounded-xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap">
                            Join B2B List
                        </button>
                    </form>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                <div class="space-y-5">
                    <h4 class="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
                        <span class="w-2 h-2 rounded-full bg-brand-pink"></span> Corporate Ethos
                    </h4>
                    <p class="text-sm leading-relaxed text-slate-400 font-medium">
                        Harroberry operates at the intersection of modern bio-engineering and safe feminine hygiene management frameworks customized for Indian climates.
                    </p>
                    <div class="flex space-x-3.5 pt-2">
                        <Link href="https://wa.me/919313948854" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" aria-label="WhatsApp Corporate Desk"><i class="fab fa-whatsapp"></i></Link>
                        <Link href="#" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" aria-label="Instagram Profile"><i class="fab fa-instagram"></i></Link>
                        <Link href="#" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-slate-800/80 text-base" aria-label="Facebook Page"><i class="fab fa-facebook-f"></i></Link>
                    </div>
                </div>

                <div class="space-y-5">
                    <h4 class="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
                        <span class="w-2 h-2 rounded-full bg-brand-purple"></span> Navigation
                    </h4>
                    <ul class="space-y-3.5 text-sm md:text-base font-semibold">
                        <li><Link href="#home" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all text-brand-pink"></i>Home Landing</Link></li>
                        <li><Link href="#features" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all text-brand-pink"></i>Core Features</Link></li>
                        <li><Link href="#products" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all text-brand-pink"></i>Product Matrix</Link></li>
                        <li><Link href="#about" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-chevron-right text-[10px] mr-0 opacity-0 group-hover:mr-2.5 group-hover:opacity-100 transition-all text-brand-pink"></i>Corporate Ethos</Link></li>
                    </ul>
                </div>

                <div class="space-y-5">
                    <h4 class="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
                        <span class="w-2 h-2 rounded-full bg-violet-500"></span> Product Line
                    </h4>
                    <ul class="space-y-3.5 text-sm md:text-base font-semibold">
                        <li><Link href="#products" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-cube text-xs mr-2.5 text-slate-700 group-hover:text-brand-pink transition-colors"></i>Harroberry Day XL</Link></li>
                        <li><Link href="#products" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-moon text-xs mr-2.5 text-slate-700 group-hover:text-brand-purple transition-colors"></i>Heavy Overnight XXL</Link></li>
                        <li><Link href="#wholesale" class="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"><i class="fas fa-handshake text-xs mr-2.5 text-slate-700 group-hover:text-violet-400 transition-colors"></i>B2B Bulk Packages</Link></li>
                    </ul>
                </div>

                <div class="space-y-5">
                    <h4 class="text-sm font-black text-slate-100 tracking-[0.2em] uppercase flex items-center gap-2.5">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Supply Depot
                    </h4>
                    <div class="bg-slate-900/40 border border-slate-900 rounded-2xl p-5 space-y-4 shadow-inner backdrop-blur-md">
                        <div class="flex items-start space-x-3.5">
                            <i class="fas fa-location-dot text-brand-pink mt-1 text-sm w-4"></i>
                            <span class="text-sm text-slate-300 font-semibold leading-snug">Navagam, Rajkot, Gujarat, India</span>
                        </div>
                        <div class="flex items-center space-x-3.5">
                            <i class="fas fa-phone text-brand-purple text-sm w-4"></i>
                            <Link href="tel:+919313948854" class="text-sm text-slate-300 hover:text-white transition-colors font-bold">+91 9313948854</Link>
                        </div>
                        <div class="flex items-center space-x-3.5">
                            <i class="fas fa-envelope text-emerald-500 text-sm w-4"></i>
                            <Link href="mailto:harroberry18@gmail.com" class="text-sm text-slate-300 hover:text-white transition-colors font-semibold overflow-hidden text-ellipsis whitespace-nowrap block max-w-[190px]">harroberry18@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent mb-8"></div>
            <div class="flex flex-col lg:flex-row justify-between items-center text-xs md:text-sm text-slate-500 space-y-4 lg:space-y-0 font-semibold tracking-wide">
                <p class="text-center lg:text-left">© 2026 Harroberry Sanitary Healthcare Inc. All Rights Reserved.</p>
                <div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <span class="flex items-center"><i class="fas fa-shield-halved mr-2 text-xs text-slate-600"></i> 100% Sterilized Core Matrix</span>
                    <span class="hidden md:inline text-slate-800">|</span>
                    <span>Designed for Hygiene Excellence</span>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;