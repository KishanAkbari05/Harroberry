import React, { useState } from 'react';
import toast from "react-hot-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim() && name !== 'description') {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} field is required.`;
    } else {
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Please provide a valid corporate email.";
      }
      if (name === 'phone') {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value.replace(/[\s-]/g, ""))) {
          error = "Please provide a valid 10-digit phone number.";
        }
      }
      if (name === 'name' && value.trim().length < 3) {
        error = "Name parameter must contain at least 3 characters.";
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error dynamically when user types valid data
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Run synchronous validation sweep across entire form structure
    const validationErrors = {};
    Object.keys(formState).forEach(key => {
      const error = validateField(key, formState[key]);
      if (error) validationErrors[key] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please resolve highlighted validation errors.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "0045cff4-d4f2-47b9-a97e-bd68f7edaea5",
            subject: "New Harroberry Contact Inquiry",
            from_name: "Harroberry Contact Page",
            name: formState.name,
            email: formState.email,
            phone: formState.phone,
            address: formState.address,
            description: formState.description,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormState({
          name: "",
          email: "",
          phone: "",
          address: "",
          description: "",
        });
        setErrors({});
      } else {
        toast.error("Failed to send message.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      toast.error("Network issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* CONTACT CORE SECTION                                      */}
      {/* ========================================================= */}
      <section id="contact" className="py-20 lg:py-32 px-4 md:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
                  
                  {/* Left Side: Information Framework & Address Rails */}
                  <div className="space-y-8 lg:col-span-5 reveal active">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Get In Touch With Us</h2>
                          <div className="w-16 h-1 bg-brand-pink mt-4 rounded-full"></div>
                          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                              Have questions about retail availability or custom bulk procurement orders? Drop us a line, and our commercial division will get right back to you.
                          </p>
                      </div>

                      <div className="space-y-4 font-medium">
                          <div className="flex items-center space-x-4 p-3 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                              <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-pink border border-slate-100 dark:border-slate-700">
                                  <i className="fas fa-location-dot text-indigo-500"></i>
                              </div>
                              <div>
                                  <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Corporate HQ Location</p>
                                  <p className="text-sm dark:text-white mt-0.5">Navagam, Rajkot, Gujarat, India</p>
                              </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                              <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-pink border border-slate-100 dark:border-slate-700">
                                  <i className="fas fa-phone text-emerald-500"></i>
                              </div>
                              <div>
                                  <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Call Support Lines</p>
                                  <p className="text-sm dark:text-white mt-0.5">+91 9313948854</p>
                              </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                              <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-pink border border-slate-100 dark:border-slate-700">
                                  <i className="fas fa-envelope text-pink-500"></i>
                              </div>
                              <div>
                                  <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Official Email Desk</p>
                                  <p className="text-sm dark:text-white mt-0.5">harroberry18@gmail.com</p>
                              </div>
                          </div>
                      </div>

                      <div className="space-y-3 px-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Digital Communities</p>
                          <div className="flex space-x-4">
                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all">
                                  <i className="fab fa-instagram"></i>
                              </a>
                              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                          </div>
                      </div>

                      {/* Geometric Maps Interface Container */}
                      <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 h-56 bg-white dark:bg-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-600 relative group">
                          <iframe 
                              title="Corporate Geographic Matrix Reference"
                              src="https://maps.google.com/maps?q=Navagam,%20Rajkot,%20Gujarat,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                              className="w-full h-full border-0 grayscale-[20%] contrast-[110%] dark:invert-[90%] dark:hue-rotate-180 dark:opacity-80 transition-all duration-300 group-hover:grayscale-0"
                              allowFullScreen="" 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade">
                          </iframe>
                          
                          <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 pointer-events-none shadow-sm flex items-center gap-1.5">
                              <i className="fas fa-location-dot text-brand-pink text-xs"></i>
                              <span>Navagam, Rajkot (360003)</span>
                          </div>
                      </div>
                  </div>

                  {/* Right Side: Feedback Message Box Frame with Built-In Validation UI */}
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-slate-200/60 dark:border-slate-800/80 lg:col-span-7 reveal active">
                      <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send Direct Message</h3>
                          <p className="text-xs text-slate-400 mt-1">Fill out your information and our sales architecture team will respond within 24 hours.</p>
                      </div>
                      
                      <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Full Name */}
                              <div>
                                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">Full Name</label>
                                  <div className="relative group/input">
                                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                                          <i className="fas fa-user text-sm"></i>
                                      </div>
                                      <input type="text" name="name" required placeholder="John Doe" value={formState.name} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.name ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm transition-all focus:outline-none focus:ring-2 placeholder-slate-400`} />
                                  </div>
                                  {errors.name && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.name}</span>}
                              </div>
                              {/* Email Address */}
                              <div>
                                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">Email Address</label>
                                  <div className="relative group/input">
                                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-pink-500 transition-colors">
                                          <i className="fas fa-envelope text-sm"></i>
                                      </div>
                                      <input type="email" name="email" required placeholder="name@company.com" value={formState.email} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.email ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-pink-500/10'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm transition-all focus:outline-none focus:ring-2 placeholder-slate-400`} />
                                  </div>
                                  {errors.email && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.email}</span>}
                              </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Phone Number */}
                              <div>
                                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">Phone Number</label>
                                  <div className="relative group/input">
                                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-emerald-500 transition-colors">
                                          <i className="fas fa-phone text-sm"></i>
                                      </div>
                                      <input type="tel" name="phone" required placeholder="93139 48854" value={formState.phone} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.phone ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm transition-all focus:outline-none focus:ring-2 placeholder-slate-400`} />
                                  </div>
                                  {errors.phone && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.phone}</span>}
                              </div>
                              {/* Physical Address */}
                              <div>
                                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">Physical Address</label>
                                  <div className="relative group/input">
                                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-amber-500 transition-colors">
                                          <i className="fas fa-location-dot text-sm"></i>
                                      </div>
                                      <input type="text" name="address" required placeholder="City, State, Country" value={formState.address} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.address ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm transition-all focus:outline-none focus:ring-2 placeholder-slate-400`} />
                                  </div>
                                  {errors.address && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.address}</span>}
                              </div>
                          </div>

                          {/* Description */}
                          <div>
                              <div className="flex justify-between items-center mb-1.5">
                                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Project Description / Message</label>
                                  <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-400 tracking-normal">Optional</span>
                              </div>
                              <div className="relative group/input">
                                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400 group-focus-within/input:text-purple-500 transition-colors">
                                      <i className="fas fa-pen-to-square text-sm"></i>
                                  </div>
                                  <textarea name="description" rows="4" placeholder="Tell us about your procurement requests, volumes, or timeline..." value={formState.description} onChange={handleInputChange}
                                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm transition-all focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 placeholder-slate-400 resize-none"></textarea>
                              </div>
                          </div>

                          <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold text-sm rounded-xl shadow-md hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transform active:scale-[0.99] disabled:opacity-50 flex items-center justify-center space-x-2">
                              {isSubmitting ? (
                                <><i className="fas fa-spinner animate-spin"></i> <span>Sending Message...</span></>
                              ) : (
                                <><i className="fas fa-paper-plane"></i> <span>Submit Corporate Inquiry</span></>
                              )}
                          </button>
                      </form>
                  </div>
              </div>

              {/* ========================================================= */}
              {/* COMPONENT 1: METRICS & INFO BLOCKS                        */}
              {/* ========================================================= */}
              <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 flex items-center justify-center mb-4">
                          <i className="fas fa-clock text-lg"></i>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Operational Hours</h4>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Mon - Sat: 09:00 AM – 06:00 PM IST <br />
                          Sunday: Closed Corporate Standard
                      </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mb-4">
                          <i className="fas fa-truck-ramp-box text-lg"></i>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Procurement Logistics</h4>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Bulk distribution handling and factory dock clearances process directly from our Rajkot sorting hub.
                      </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mb-4">
                          <i className="fas fa-shield-halved text-lg"></i>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Escalation Desk</h4>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Inquiry not answered within 24 business hours? Flag your routing ticket via our official desk fallback line.
                      </p>
                  </div>
              </div>

              {/* ========================================================= */}
              {/* COMPONENT 2: PARTNER TESTIMONIALS ARCHITECTURE            */}
              {/* ========================================================= */}
              <div className="mt-28 border-t border-slate-200/60 dark:border-slate-800/80 pt-20">
                  <div className="text-center max-w-xl mx-auto mb-14">
                      <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">B2B Feedback</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-3">Trusted By Retail Operations</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">See how distribution centers experience our wholesale pipeline support parameters.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 rounded-3xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 relative">
                          <i className="fas fa-quote-left text-3xl text-slate-200 dark:text-slate-800 absolute top-6 right-8"></i>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic relative z-10">
                            "Procurement delays vanished once we coordinated our pipeline infrastructure through Harroberry's Rajkot regional desks. Deliveries arrive well ahead of internal timeline estimates."
                          </p>
                          <div className="mt-6 flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white text-xs font-bold">A.K</div>
                              <div>
                                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Anand K. Mehta</h5>
                                  <p className="text-[11px] text-slate-400">Supply Chain Manager, PharmaCare Distribution</p>
                              </div>
                          </div>
                      </div>

                      <div className="p-8 rounded-3xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 relative">
                          <i className="fas fa-quote-left text-3xl text-slate-200 dark:text-slate-800 absolute top-6 right-8"></i>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic relative z-10">
                            "The custom bulk pricing models were configured transparently relative to our volume requirements. Excellent corporate support team and clear tracking transparency updates."
                          </p>
                          <div className="mt-6 flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-indigo-600 flex items-center justify-center text-white text-xs font-bold">S.R</div>
                              <div>
                                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Sunita Rao</h5>
                                  <p className="text-[11px] text-slate-400">Operations Lead, Western Retail Supermarkets</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* ========================================================= */}
              {/* NEW COMPONENT A: MULTI-HUB LOCATION ROUTING DIRECTORY       */}
              {/* ========================================================= */}
              <div className="mt-28 border-t border-slate-200/60 dark:border-slate-800/80 pt-20">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                      <div>
                          <span className="text-xs font-bold text-brand-pink uppercase tracking-widest bg-pink-500/10 px-3 py-1 rounded-full">Infrastructure Blueprints</span>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-3">Our Regional Ecosystem</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Direct logistics nodes and manufacturing setups across the Gujarat network.</p>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                          <button type="button" className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm transition-all">
                              Rajkot Hub (HQ)
                          </button>
                          <button type="button" className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200/70 transition-all">
                              Ahmedabad Depot
                          </button>
                          <button type="button" className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200/70 transition-all">
                              Surat Yard
                          </button>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                          <span className="text-[10px] tracking-widest font-black uppercase text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded-md">Primary Hub</span>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mt-3">Navagam Processing Complex</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                              Handles all core raw manufacturing, validation audits, and automated sanitization packaging arrays.
                          </p>
                          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                              <i className="fas fa-box-archive text-xs"></i> Capacity: 250k Units / Mo
                          </div>
                      </div>

                      <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                          <span className="text-[10px] tracking-widest font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">Transit Node</span>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mt-3">GIDC Logistics Terminal</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                              Optimized for interstate bulk freight sorting, highway container routing, and custom customs sorting arrays.
                          </p>
                          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                              <i className="fas fa-truck-moving text-xs"></i> 24-Hour Clearance Yard
                          </div>
                      </div>

                      <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all md:col-span-2 lg:col-span-1">
                          <span className="text-[10px] tracking-widest font-black uppercase text-pink-500 bg-pink-500/10 px-2 py-0.5 rounded-md">Administrative</span>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mt-3">Commercial Accounts Office</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                              Hosts our wholesale contract underwriters, margin optimization engineers, and enterprise partner assistance desks.
                          </p>
                          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                              <i className="fas fa-user-tie text-xs"></i> Desk Response: Under 12 Hours
                          </div>
                      </div>
                  </div>
              </div>

              {/* ========================================================= */}
              {/* TRANSPARENT PREMIUM OPERATIONAL TRIAGE CHANNELS           */}
              {/* ========================================================= */}
              <div className="mt-28 p-6 sm:p-10 md:p-12 rounded-[2rem] bg-transparent text-slate-900 dark:text-white relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300">
                  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-pink-500/[0.04] dark:bg-pink-500/[0.02] blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-500/[0.04] dark:bg-purple-500/[0.02] blur-3xl pointer-events-none"></div>
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                      <div className="lg:col-span-5 space-y-4">
                          <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
                                  Priority Escalation
                              </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                              Need an Immediate Commercial Evaluation?
                          </h3>
                          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                              Skip standard system queues entirely if your organization operates multi-chain retail outlets or active distribution networks within Western India.
                          </p>
                      </div>
                      
                      <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">
                          <a href="mailto:harroberry18@gmail.com" 
                             className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-pink-500/40 dark:hover:border-pink-500/30 hover:bg-white dark:hover:bg-slate-900/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
                              <div className="flex items-center space-x-4">
                                  <div className="w-10 h-10 rounded-lg border border-pink-100 bg-pink-50/50 text-pink-600 dark:border-pink-500/20 dark:bg-pink-500/5 dark:text-pink-400 flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-105">
                                      <i className="fas fa-envelope"></i>
                                  </div>
                                  <div>
                                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Official Inquiries</span>
                                      <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight mt-0.5">harroberry18@gmail.com</span>
                                  </div>
                              </div>
                              <div className="w-6 h-6 rounded-md bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-pink-500 group-hover:bg-pink-500/10 dark:group-hover:bg-pink-500/20 transition-all duration-300">
                                  <i className="fas fa-chevron-right text-[10px] transition-transform duration-300 group-hover:translate-x-0.5"></i>
                              </div>
                          </a>

                          <a href="tel:+919313948865" 
                             className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/40 dark:hover:border-purple-500/30 hover:bg-white dark:hover:bg-slate-900/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
                              <div className="flex items-center space-x-4">
                                  <div className="w-10 h-10 rounded-lg border border-purple-100 bg-purple-50/50 text-purple-600 dark:border-purple-500/20 dark:bg-purple-500/5 dark:text-purple-400 flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-105">
                                      <i className="fas fa-phone"></i>
                                  </div>
                                  <div>
                                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Primary Support Line</span>
                                      <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight mt-0.5">+91 93139 48865</span>
                                  </div>
                              </div>
                              <div className="w-6 h-6 rounded-md bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-purple-500 group-hover:bg-purple-500/10 dark:group-hover:bg-purple-500/20 transition-all duration-300">
                                  <i className="fas fa-chevron-right text-[10px] transition-transform duration-300 group-hover:translate-x-0.5"></i>
                              </div>
                          </a>

                          <a href="tel:+916303219091" 
                             className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-slate-900/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
                              <div className="flex items-center space-x-4">
                                  <div className="w-10 h-10 rounded-lg border border-emerald-100 bg-emerald-50/50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400 flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-105">
                                      <i className="fab fa-whatsapp text-base"></i>
                                  </div>
                                  <div>
                                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Secondary Logistics Desk</span>
                                      <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight mt-0.5">+91 63032 19091</span>
                                  </div>
                              </div>
                              <div className="w-6 h-6 rounded-md bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 transition-all duration-300">
                                  <i className="fas fa-chevron-right text-[10px] transition-transform duration-300 group-hover:translate-x-0.5"></i>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>

          </div>
      </section> 
    </>
  );
};

export default Contact;