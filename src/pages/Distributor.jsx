import React, { useState } from 'react';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

const Distributor = () => {
  const [formData, setFormData] = useState({
    name: '',
    business_type: 'wholesaler',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
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
      if (name === 'message' && value.trim().length < 10) {
        error = "Message context must contain at least 10 characters.";
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error dynamically as user fixes parameters
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Run synchronous validation sweep across entire form structure
    const validationErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
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
            subject: "New Harroberry Distributor Inquiry",
            from_name: "Harroberry Website",
            name: formData.name,
            business_type: formData.business_type,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            }),
        }
        );

        const result = await response.json();

        if (result.success) {
            toast.success(
                "Inquiry submitted successfully!"
            );

        setFormData({
            name: "",
            business_type: "wholesaler",
            phone: "",
            email: "",
            message: "",
        });
        setErrors({});
        } else {
        console.error(result);
        toast.error("Failed to submit inquiry. Please try again.");
        }
    } catch (error) {
        console.error(error);
        toast.error("Network issue. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* WHOLESALE DISTRIBUTION CORE FRAMEWORK           */}
      {/* ========================================================= */}
      <section id="wholesale" className="py-20 lg:py-28 px-4 md:px-8 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-900/60 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Informational Core & Value Propositions */}
              <div className="space-y-8 lg:col-span-5 reveal active">
                  <div className="space-y-4">
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand-purple bg-purple-500/5 dark:bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/10">
                          B2B Commercial Bulk
                      </span>
                      <h2 className="text-3xl md:text-[40px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                          Become a Harroberry Distributor
                      </h2>
                      <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-pink-500 rounded-full mt-2"></div>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Expand your commercial distribution footprint with Rajkot's fastest growing feminine hygiene enterprise. We supply tier-1 healthcare retailers, multi-chain supermarkets, and regional sub-wholesalers with structured bulk pricing brackets.
                  </p>
                  
                  {/* Dynamic Benefit Feature Panels */}
                  <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm transition-all hover:border-purple-500/20">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                              <i className="fas fa-cubes-stacked text-base text-purple-500"></i>
                          </div>
                          <div className="space-y-0.5">
                              <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Optimized Margin Scaling</h4>
                              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">Tiered bulk pricing models ensuring generous distribution networks retention rates.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm transition-all hover:border-pink-500/20">
                          <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-brand-pink shrink-0 mt-0.5">
                              <i className="fas fa-truck-fast text-base text-pink-500"></i>
                          </div>
                          <div className="space-y-0.5">
                              <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Fast Logistics Across Gujarat</h4>
                              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">Strategic direct dispatch points located inside Rajkot for speedy highway dispatches.</p>
                          </div>
                      </div>
                  </div>

                  {/* Direct Quick-Inquiry Communication Rails */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link to="tel:+919313948854" className="flex items-center justify-center gap-2.5 h-12 px-6 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg shadow-purple-500/10 shrink-0">
                          <i className="fas fa-phone-alt"></i> Call Distribution Desk
                      </Link>
                      <Link to="https://wa.me/919313948854?text=Hi,%20I'm%20interested%20in%20Harroberry%20Wholesale%20Dealership." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 h-12 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg shadow-emerald-500/10 shrink-0">
                          <i className="fab fa-whatsapp text-sm"></i> WhatsApp Inquiry
                      </Link>
                  </div>
              </div>

              {/* Right Side: High-Fidelity B2B Request Form Box */}
              <div className="lg:col-span-7 reveal active">
                  <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-200/60 dark:border-slate-800/80 relative overflow-hidden">
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
                      
                      <div className="relative z-10 mb-8">
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">B2B Distribution Request</h3>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Fill in operational details to receive our wholesale custom catalog pricing architectures.</p>
                      </div>
                      
                      <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-5 relative z-10" noValidate>
                          {/* Row 1: Full Name & Business Entity Selector */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div className="space-y-1.5">
                                  <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Full Name</label>
                                  <div className="relative flex items-center group/input">
                                      <i className="fas fa-user absolute left-4 text-xs text-slate-400 group-focus-within/input:text-purple-500 transition-colors pointer-events-none"></i>
                                      <input type="text" name="name" required placeholder="e.g., Rajesh Shah" value={formData.name} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 text-slate-800 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:bg-slate-950 border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-800 focus:border-brand-purple dark:focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 dark:focus:ring-brand-purple/10'} rounded-xl text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-all`} />
                                  </div>
                                  {errors.name && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.name}</span>}
                              </div>
                              
                              <div className="space-y-1.5">
                                  <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Business Entity Type</label>
                                  <div className="relative flex items-center group/input">
                                      <i className="fas fa-building absolute left-4 text-xs text-slate-400 group-focus-within/input:text-pink-500 transition-colors pointer-events-none"></i>
                                      <select name="business_type" value={formData.business_type} onChange={handleInputChange}
                                              className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-purple dark:focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 dark:focus:ring-brand-purple/10 focus:bg-white dark:focus:bg-slate-950 transition-all appearance-none cursor-pointer font-medium">
                                          <option value="wholesaler">Regional Wholesaler</option>
                                          <option value="pharmacy">Retail Pharmacy Shop</option>
                                          <option value="supermarket">Supermarket Chain</option>
                                          <option value="ecommerce">E-commerce Vendor</option>
                                          <option value="ngo">Other / NGO Partner</option>
                                      </select>
                                      <i className="fas fa-chevron-down absolute right-4 text-[10px] text-slate-400 dark:text-slate-500 pointer-events-none"></i>
                                  </div>
                              </div>
                          </div>

                          {/* Row 2: Phone Number & Email Field */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div className="space-y-1.5">
                                  <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Contact Phone Number</label>
                                  <div className="relative flex items-center group/input">
                                      <i className="fas fa-phone absolute left-4 text-xs text-slate-400 group-focus-within/input:text-emerald-500 transition-colors pointer-events-none"></i>
                                      <input type="tel" name="phone" required placeholder="e.g., +91 98765 43210" value={formData.phone} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 text-slate-800 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:bg-slate-950 border ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-800 focus:border-brand-purple dark:focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 dark:focus:ring-brand-purple/10'} rounded-xl text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-all`} />
                                  </div>
                                  {errors.phone && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.phone}</span>}
                              </div>
                              
                              <div className="space-y-1.5">
                                  <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Address</label>
                                  <div className="relative flex items-center group/input">
                                      <i className="fas fa-envelope absolute left-4 text-xs text-slate-400 group-focus-within/input:text-blue-500 transition-colors pointer-events-none"></i>
                                      <input type="email" name="email" required placeholder="name@company.com" value={formData.email} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 text-slate-800 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:bg-slate-950 border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-800 focus:border-brand-purple dark:focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 dark:focus:ring-brand-purple/10'} rounded-xl text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-all`} />
                                  </div>
                                  {errors.email && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.email}</span>}
                              </div>
                          </div>

                          {/* Row 3: Textarea Requirements Frame */}
                          <div className="space-y-1.5">
                              <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Expected Monthly Volume & Location Details</label>
                              <div className="relative flex items-start group/input">
                                  <i className="fas fa-message absolute left-4 top-3.5 text-xs text-slate-400 group-focus-within/input:text-purple-500 transition-colors pointer-events-none"></i>
                                  <textarea name="message" rows="3" required placeholder="Please mention preferred delivery logistics configurations and target distribution cities..." value={formData.message} onChange={handleInputChange}
                                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 text-slate-800 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:bg-slate-950 border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 dark:border-slate-800 focus:border-brand-purple dark:focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 dark:focus:ring-brand-purple/10'} rounded-xl text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-all resize-none`}></textarea>
                              </div>
                              {errors.message && <span className="text-[11px] text-red-500 font-medium mt-1 block px-1">{errors.message}</span>}
                          </div>

                          {/* Submission Trigger */}
                          <div className="pt-2">
                              <button type="submit" disabled={isSubmitting}
                                      className="w-full h-12 bg-brand-purple hover:bg-brand-purple/95 text-white font-bold text-xs uppercase tracking-[0.15em] rounded-xl transition-all shadow-md shadow-purple-500/10 flex items-center justify-center gap-2 group disabled:opacity-50">
                                  <span>{isSubmitting ? 'Submitting Form...' : 'Submit Commercial Request'}</span>
                                  <i className="fas fa-paper-plane text-[10px] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>

          {/* ========================================================= */}
          {/* NEW SECTION 1: SUPPLY ONBOARDING WORKFLOW STEPPER         */}
          {/* ========================================================= */}
          <div className="max-w-7xl mx-auto mt-24 pt-16 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">Sourcing Pipeline</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">Onboarding Architecture</h3>
                  <p className="text-xs md:text-sm text-slate-400 mt-2">How we setup your corporate franchise accounts and initialize supply drops.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Step 1 */}
                  <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 relative group hover:shadow-md transition-all">
                      <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                          01
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mt-2">Submit Profile</h4>
                      <p className="mt-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Provide enterprise registration information and monthly layout demand forecasts through the wholesale matrix container.
                      </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 relative group hover:shadow-md transition-all">
                      <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                          02
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mt-2">Price Bracket Setup</h4>
                      <p className="mt-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Our business development branch routes custom tiered catalogs balancing margin assignments relative to your target scale metrics.
                      </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 relative group hover:shadow-md transition-all">
                      <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                          03
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mt-2">Dispatch Optimization</h4>
                      <p className="mt-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          First freight batches clear our Rajkot fulfillment yards with automated transit pipeline tracking arrays enabled instantly.
                      </p>
                  </div>
              </div>
          </div>

        <div className="max-w-7xl mx-auto mt-20 p-8 sm:p-12 rounded-[2rem] bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-zinc-900 text-slate-900 dark:text-white relative overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-xl dark:shadow-2xl transition-all duration-300">
            
            {/* Subtle light and dark mode adaptive brand accent radial rings */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,39,119,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(219,39,119,0.08),transparent_45%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.06),transparent_40%)] pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left items-center">
                
                {/* Label Header */}
                <div className="space-y-1 col-span-1 sm:col-span-2 lg:col-span-1">
                    <h4 className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-widest">Network Blueprint</h4>
                    <p className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">Supply Footprint Benchmarks</p>
                </div>

                {/* Metric Column 1 */}
                <div className="space-y-1 border-l border-slate-200 dark:border-slate-800 pl-6">
                    <span className="block text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">25+</span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Districts Reached</span>
                </div>

                {/* Metric Column 2 */}
                <div className="space-y-1 sm:border-l border-slate-200 dark:border-slate-800 pl-0 sm:pl-6">
                    <span className="block text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-emerald-600 dark:from-pink-400 dark:to-emerald-400">1.2L+</span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Units Distributed</span>
                </div>

                {/* Metric Column 3 */}
                <div className="space-y-1 border-l border-slate-200 dark:border-slate-800 pl-6">
                    <span className="block text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400">24Hr</span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Yard Clearance</span>
                </div>
                
            </div>
        </div>
         
      </section>
    </>
  );
};

export default Distributor;