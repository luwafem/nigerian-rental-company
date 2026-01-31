import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../../data/servicesData';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}`;

  useEffect(() => {
    // Show tooltip after 3 seconds to grab attention subtly
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      {/* Premium Tooltip */}
      <div className={`
        bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100
        text-sm font-bold transition-all duration-500 transform
        ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          How can we help?
        </span>
        {/* Triangle Pointer */}
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
      </div>

      {/* Main Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-all duration-300 active:scale-90"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Inner Glow/Ripple */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"></div>
        
        <FaWhatsapp className="text-3xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* "1" Notification Badge - cleaner than "Live Chat" */}
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white shadow-sm">
          1
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;