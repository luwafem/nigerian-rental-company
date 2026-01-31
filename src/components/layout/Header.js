import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6'; // Updated to Fa6 for the new X icon
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { siteConfig } from '../../data/servicesData';

const navItems = [
  { name: 'Apartments', path: '/apartments' },
  { name: 'Cars', path: '/cars' },
  { name: 'Boats', path: '/boats' },
  { name: 'Concierge', path: '/escorts' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-lg border-b border-zinc-200/50 shadow-sm' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-[110]">
          <div className={`transition-colors duration-500 font-bold text-2xl tracking-tighter ${
            open || (scrolled || !isHome) ? 'text-zinc-900' : 'text-white'
          }`}>
            N<span className="font-light italic">R</span>
          </div>
          <div className={`h-4 w-px transition-colors duration-500 ${
            open || (scrolled || !isHome) ? 'bg-zinc-200' : 'bg-white/30'
          }`} />
          <span className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-500 ${
            open || (scrolled || !isHome) ? 'text-zinc-500' : 'text-white/80'
          }`}>
            Lagos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                relative text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300
                ${!scrolled && isHome ? 'text-white/90 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
                after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px 
                after:bg-current after:transition-transform after:duration-500
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Toggle */}
        <div className="flex items-center gap-6 z-[110]">
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
            className={`hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full transition-all duration-500 ${
              !scrolled && isHome && !open
                ? 'bg-white text-zinc-900 hover:bg-zinc-100' 
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            <FaWhatsapp className="text-sm" />
            Book Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden text-2xl transition-colors duration-500 ${
              open || (scrolled || !isHome) ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        open ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="h-full flex flex-col justify-between px-10 py-20">
          
          <div className="space-y-8 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">Explore</p>
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-5xl font-light tracking-tighter text-zinc-900 transition-all duration-700 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className={`transition-all duration-700 delay-500 ${open ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-100">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4">Connect</p>
                <div className="flex gap-6">
                  <a href="https://x.com/yourhandle" target="_blank" rel="noreferrer" className="text-zinc-900 hover:text-zinc-500 transition-colors">
                    <FaXTwitter size={20} />
                  </a>
                  <a href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`} className="text-zinc-900 hover:text-zinc-500 transition-colors">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4">Inquiries</p>
                <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-zinc-900 block">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;