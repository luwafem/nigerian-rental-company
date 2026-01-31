import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { siteConfig } from '../../data/servicesData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="text-3xl font-bold tracking-tighter mb-6">
              BLUE<span className="font-light italic">RENTAL</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-zinc-500 ml-4 border-l border-zinc-800 pl-4">
                
              </span>
            </div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Curating the finest lifestyle experiences across Nigeria. From skyline penthouses to private coastal escapes.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">The Inner Circle</p>
            <form className="relative flex border-b border-zinc-800 focus-within:border-white transition-colors duration-500 pb-2">
              <input
                type="email"
                placeholder="Join for exclusive member access"
                className="bg-transparent w-full text-xl font-light py-2 outline-none placeholder:text-zinc-700"
              />
              <button className="text-zinc-400 hover:text-white transition-colors">
                <HiOutlineArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Navigation & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Collections</h4>
            <ul className="space-y-4">
              {['apartments', 'cars', 'boats', 'concierge'].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} className="text-sm font-light text-zinc-300 hover:text-white transition-colors capitalize">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Company</h4>
            <ul className="space-y-4">
              {['About', 'Membership', 'Privacy', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm font-light text-zinc-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Lagos Office</h4>
            <p className="text-sm font-light text-zinc-300 leading-relaxed mb-6">
              {siteConfig.address || 'Victoria Island, Lagos, Nigeria'}
            </p>
            <div className="flex flex-col space-y-2">
              <a href={`tel:${siteConfig.phone}`} className="text-lg font-medium hover:text-zinc-400 transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-light text-zinc-500 hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials & Legal */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex space-x-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-all duration-300"><FaInstagram size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-all duration-300"><FaXTwitter size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-all duration-300"><FaLinkedinIn size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-all duration-300"><FaWhatsapp size={18} /></a>
          </div>

          <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
            <span>&copy; {currentYear} BLUE RENTAL SERVICES</span>
            <span className="hidden md:block h-px w-8 bg-zinc-800"></span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;