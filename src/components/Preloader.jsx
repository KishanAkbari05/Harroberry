import React from 'react';

const Preloader = () => {
  return (
    <div id="preloader" class="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-brand-darkBg transition-opacity duration-500">
        <div class="relative flex flex-col items-center">
            <div class="w-16 h-16 border-4 border-brand-pink/20 border-t-brand-pink rounded-full animate-spin"></div>
            <span class="mt-4 text-sm font-medium tracking-widest text-brand-pink animate-pulse">HARROBERRY</span>
        </div>
    </div>
  );
};

export default Preloader;