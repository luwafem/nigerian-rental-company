import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/common/ServiceCard';
import SEO from '../components/seo/SEO';
import { services, siteConfig } from '../data/servicesData';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const heroSlides = [
  { key: 'apartments', label: 'Curated Living', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80' },
  { key: 'cars', label: 'Premium Travel', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80' },
  { key: 'boats', label: 'Coastal Escape', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80' },
  { key: 'services', label: 'Professional Care', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    ...services.apartments.slice(0, 2),
    ...services.cars.slice(0, 2),
    ...services.boats.slice(0, 1),
    ...services.escorts.slice(0, 1)
  ];

  return (
    <div className="bg-white selection:bg-zinc-900 selection:text-white">
      <SEO />

      {/* Full-Screen Immersive Hero */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${
              index === currentSlide ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Soft vignette for depth and text contrast */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/80 mb-6 animate-fade-in">
              {heroSlides[currentSlide].label}
            </p>

            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
              Experience <span className="italic font-normal">Nigeria</span> <br /> 
              at its finest.
            </h1>

            {/* Ultra-Minimal Search */}
            <div className="mt-10 mx-auto max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-full flex items-center transition-all duration-500 focus-within:bg-white focus-within:shadow-2xl group">
              <div className="pl-6 text-white group-focus-within:text-zinc-400">
                <FiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Where would you like to go?"
                className="flex-1 px-4 bg-transparent outline-none text-sm md:text-base placeholder:text-white/60 group-focus-within:placeholder:text-zinc-400 group-focus-within:text-zinc-900"
              />
              <button className="hidden md:block bg-white text-zinc-900 px-8 py-3 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-colors group-focus-within:bg-zinc-900 group-focus-within:text-white">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <FiChevronDown />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-end mb-16 border-l-2 border-zinc-900 pl-8">
            <div>
              <h2 className="text-4xl font-light tracking-tight text-zinc-900">Featured Series</h2>
              <p className="text-zinc-400 mt-2">Selected for quality and comfort.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                type={service.category || 'apartments'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Subtle WhatsApp Float */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-white text-zinc-900 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <FaWhatsapp className="text-xl" />
        <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Concierge</span>
      </a>
    </div>
  );
};

export default Home;