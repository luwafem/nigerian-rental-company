import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/servicesData';
import ServiceCard from '../components/common/ServiceCard';
import SEO from '../components/seo/SEO';
import { 
  HiOutlineAdjustmentsHorizontal, 
  HiOutlineSearch, 
  HiOutlineXMark 
} from 'react-icons/hi2';

const ServiceCategory = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  const [priceRange, setPriceRange] = useState(2000000); // Max cap
  const [activeFilters, setActiveFilters] = useState([]);

  // Safety Redirect
  useEffect(() => {
    if (!services[type]) navigate('/');
  }, [type, navigate]);

  const serviceArray = services[type] || [];
  const categoryName = type?.charAt(0).toUpperCase() + type?.slice(1);

  // Optimized filtering logic
  const filteredServices = useMemo(() => {
    return serviceArray
      .filter(service => {
        const priceNum = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             service.location?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = priceNum <= priceRange;
        const matchesFeatures = activeFilters.length === 0 || 
                               activeFilters.every(f => service.features?.[f]);

        return matchesSearch && matchesPrice && matchesFeatures;
      })
      .sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
        const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
        if (sortOrder === 'low') return priceA - priceB;
        if (sortOrder === 'high') return priceB - priceA;
        return 0; // 'featured'
      });
  }, [serviceArray, searchTerm, priceRange, activeFilters, sortOrder]);

  const toggleFilter = (feature) => {
    setActiveFilters(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO title={`${categoryName} | Elite Rentals`} />

      {/* Minimalist Header */}
      <header className="pt-32 pb-16 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-4 block">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-zinc-900 mb-6">
            {categoryName} <span className="italic font-serif">Rentals</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg font-light leading-relaxed">
            A curated selection of the most prestigious {type} available for short-term and executive lease across Nigeria.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Refined Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              
              {/* Search input - Minimal underline style */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <HiOutlineXMark className="absolute right-0 top-2 text-zinc-400" />
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-zinc-900">Price Ceiling</h4>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="50000"
                  className="w-full accent-zinc-900 mb-2"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <div className="text-sm font-light text-zinc-500">
                  Up to <span className="text-zinc-900 font-medium">₦{priceRange.toLocaleString()}</span>
                </div>
              </div>

              {/* Sort Order */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-zinc-900">Sort By</h4>
                <select 
                  className="w-full bg-transparent text-sm font-light outline-none cursor-pointer"
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>

              {/* Reset Action */}
              {(searchTerm || activeFilters.length > 0) && (
                <button 
                  onClick={() => {setSearchTerm(''); setActiveFilters([]);}}
                  className="flex items-center text-[10px] uppercase tracking-widest font-bold text-red-800 hover:opacity-70 transition-opacity"
                >
                  <HiOutlineXMark className="mr-2" /> Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-10">
              <span className="text-sm font-light text-zinc-400">
                Displaying {filteredServices.length} exceptional properties
              </span>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-16">
                {filteredServices.map(service => (
                  <div key={service.id} className="group cursor-pointer">
                    <ServiceCard service={service} type={type} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center border border-dashed border-zinc-200 rounded-lg">
                <p className="text-zinc-400 font-light italic">No results match your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceCategory;