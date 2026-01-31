import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaCar, FaShip, FaShieldAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { IoDiamondOutline } from 'react-icons/io5';

const ServiceCard = ({ service, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'apartments': return <FaBed />;
      case 'cars': return <FaCar />;
      case 'boats': return <FaShip />;
      case 'escorts': return <FaShieldAlt />;
      default: return <IoDiamondOutline />;
    }
  };

  return (
    <div className="group relative bg-white transition-all duration-500">
      <Link 
              to={`/${type}/${service.slug}`}
              className="text-zinc-400 hover:text-zinc-900 transition-colors"
             >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100">
        <img
          src={service.images?.[0] || '/images/default.jpg'}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Subtle Overlay for contrast */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold">
          {getIcon()}
          <span>{type.slice(0, -1)}</span>
        </div>

        {/* Rating Badge (if applicable) */}
        {service.rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-zinc-900">
            ★ {service.rating}
          </div>
        )}

        {/* Hover "Quick View" Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform">
          <Link
            to={`/${type}/${service.slug}`}
            className="px-8 py-3 bg-white text-zinc-900 text-[11px] uppercase tracking-widest font-bold shadow-2xl hover:bg-zinc-900 hover:text-white transition-colors duration-300"
          >
            Discover
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-5 pb-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {service.title}
          </h3>
          <span className="text-sm font-medium text-zinc-900 whitespace-nowrap ml-4">
            {service.price}
          </span>
        </div>

        <div className="flex items-center text-zinc-400 text-[11px] uppercase tracking-wider mb-4">
          <HiOutlineLocationMarker className="mr-1 text-zinc-300" />
          {service.location || 'Lagos, NG'}
        </div>

        {/* Dynamic Specs Bar */}
        <div className="flex items-center gap-4 border-t border-zinc-100 pt-4">
          {service.bedrooms && (
            <div className="text-[10px] text-zinc-500 uppercase tracking-tighter italic">
               <span className="text-zinc-900 font-bold not-italic">{service.bedrooms}</span> Beds
            </div>
          )}
          {service.capacity && (
            <div className="text-[10px] text-zinc-500 uppercase tracking-tighter italic">
               Cap. <span className="text-zinc-900 font-bold not-italic">{service.capacity}</span>
            </div>
          )}
          {service.seats && (
            <div className="text-[10px] text-zinc-500 uppercase tracking-tighter italic">
               <span className="text-zinc-900 font-bold not-italic">{service.seats}</span> Seats
            </div>
          )}
          
          <div className="ml-auto">
             <Link 
              to={`/${type}/${service.slug}`}
              className="text-zinc-400 hover:text-zinc-900 transition-colors"
             >
                <HiOutlineArrowNarrowRight size={20} />
             </Link>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ServiceCard;