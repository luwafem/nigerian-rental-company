import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/servicesData';
import SEO from '../components/seo/SEO';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { 
  FaBed, FaBath, FaWifi, FaCar, FaShip, FaShieldAlt,
  FaStar, FaChevronLeft, FaCheckCircle, FaMapMarkerAlt,
  FaRulerCombined, FaUserFriends, FaCogs, FaGasPump,
  FaCouch, FaSnowflake, FaUmbrellaBeach, FaAnchor, FaUserShield, FaMedkit
} from 'react-icons/fa';
import { MdMeetingRoom, MdDirectionsBoat, MdSecurity } from 'react-icons/md';

const ServiceDetails = () => {
  const { type, slug } = useParams();
  const navigate = useNavigate();
  
  const [bookingDetails, setBookingDetails] = useState({ 
    checkIn: '', 
    checkOut: '',
    guests: 1
  });

  const service = services[type]?.find(s => s.slug === slug);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-medium">Service not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-gray-600 hover:text-black">Return Home</button>
      </div>
    </div>
  );

  const getDynamicLabel = (isEnd = false) => {
    const labels = {
      apartments: ['Check-in Date', 'Check-out Date'],
      cars: ['Pick-up Date', 'Return Date'],
      boats: ['Charter Date', 'End Date'],
      escorts: ['Start Date', 'End Date']
    };
    return labels[type]?.[isEnd ? 1 : 0] || (isEnd ? 'End Date' : 'Start Date');
  };

  const handleBooking = () => {
    if (!bookingDetails.checkIn || !bookingDetails.checkOut) {
      alert("Please select dates first");
      return;
    }
    const baseMessage = `*Booking Inquiry: ${service.title}*\n`;
    const details = `• ${getDynamicLabel()}: ${bookingDetails.checkIn}\n• ${getDynamicLabel(true)}: ${bookingDetails.checkOut}`;
    const url = `https://wa.me/2348012345678?text=${encodeURIComponent(baseMessage + details)}`;
    window.open(url, '_blank');
  };

  // --- Specialized Renderers ---

  const renderApartmentDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
          <FaBed className="text-blue-600" />
          <span><b className="block leading-none">{service.bedrooms}</b> <small className="text-gray-500">Beds</small></span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
          <FaBath className="text-blue-600" />
          <span><b className="block leading-none">{service.bathrooms}</b> <small className="text-gray-500">Baths</small></span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
          <FaRulerCombined className="text-blue-600" />
          <span><b className="block leading-none">{service.size}</b> <small className="text-gray-500">Area</small></span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
          <FaCar className="text-blue-600" />
          <span><b className="block leading-none">{service.features?.parking || 0}</b> <small className="text-gray-500">Parking</small></span>
        </div>
      </div>
    </div>
  );

  const renderCarDetails = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <MdMeetingRoom className="text-blue-600" />
        <span><b className="block leading-none">{service.category}</b> <small className="text-gray-500">Class</small></span>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <FaCogs className="text-blue-600" />
        <span><b className="block leading-none">{service.transmission}</b> <small className="text-gray-500">Gear</small></span>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <FaUserFriends className="text-blue-600" />
        <span><b className="block leading-none">{service.seats}</b> <small className="text-gray-500">Seats</small></span>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <FaGasPump className="text-blue-600" />
        <span><b className="block leading-none">{service.fuel}</b> <small className="text-gray-500">Fuel</small></span>
      </div>
    </div>
  );

  const renderBoatDetails = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <FaUserFriends className="text-blue-600" />
        <span><b className="block leading-none">{service.capacity}</b> <small className="text-gray-500">Capacity</small></span>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <FaAnchor className="text-blue-600" />
        <span><b className="block leading-none">{service.crew}</b> <small className="text-gray-500">Crew Members</small></span>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
        <MdDirectionsBoat className="text-blue-600" />
        <span><b className="block leading-none">Luxury</b> <small className="text-gray-500">Vessel</small></span>
      </div>
    </div>
  );

  const renderEscortDetails = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {service.qualifications?.map((q, i) => (
         <div key={i} className="flex items-center gap-3 p-3 border border-blue-50 rounded-xl bg-blue-50/30">
           <FaCheckCircle className="text-blue-500" />
           <span className="text-sm font-medium">{q}</span>
         </div>
       ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO title={service.metaTitle} description={service.metaDescription} />

      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-medium text-gray-600">
            <FaChevronLeft /> Back to Search
          </button>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-bold text-lg">{service.rating}</span>
            <span className="text-gray-400">({service.reviews} reviews)</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] mb-12">
          <div className="md:col-span-2"><img src={service.images[0]} className="w-full h-full object-cover rounded-3xl" alt="Main" /></div>
          <div className="hidden md:grid grid-rows-2 gap-4">
            <img src={service.images[1] || service.images[0]} className="w-full h-full object-cover rounded-3xl" alt="Sub" />
            <img src={service.images[2] || service.images[0]} className="w-full h-full object-cover rounded-3xl" alt="Sub" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-black text-slate-900 mb-2">{service.title}</h1>
            <p className="flex items-center gap-2 text-gray-500 text-lg mb-8"><FaMapMarkerAlt className="text-red-500" /> {service.location}</p>

            {/* Dynamic Details Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              {type === 'apartments' && renderApartmentDetails()}
              {type === 'cars' && renderCarDetails()}
              {type === 'boats' && renderBoatDetails()}
              {type === 'escorts' && renderEscortDetails()}
            </div>

            {/* Features/Amenities */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Included Features</h3>
              <div className="flex flex-wrap gap-2">
                {(service.amenities || service.features || service.services)?.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">
                    {typeof item === 'string' ? item : JSON.stringify(item)}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Full Description</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.detailedDescription}</p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-8 border border-gray-100 rounded-[2.5rem] shadow-2xl bg-white">
              <div className="mb-6">
                <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-1">Price per {type === 'apartments' ? 'night' : 'day'}</p>
                <h2 className="text-3xl font-black text-slate-900">{service.price}</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">{getDynamicLabel()}</label>
                  <input type="date" className="w-full p-4 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-200" onChange={e => setBookingDetails({...bookingDetails, checkIn: e.target.value})} />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">{getDynamicLabel(true)}</label>
                  <input type="date" className="w-full p-4 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-200" onChange={e => setBookingDetails({...bookingDetails, checkOut: e.target.value})} />
                </div>
              </div>

              <button onClick={handleBooking} className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-transform hover:-translate-y-1">
                Check Availability
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">Secure booking via WhatsApp concierge</p>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetails;