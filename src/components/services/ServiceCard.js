import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaBed, FaCar, FaShip, FaShieldAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ServiceCard = ({ service, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'apartments': return <FaBed className="text-xl" />;
      case 'cars': return <FaCar className="text-xl" />;
      case 'boats': return <FaShip className="text-xl" />;
      case 'escorts': return <FaShieldAlt className="text-xl" />;
      default: return null;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.images[0] || '/images/default.jpg'}
          alt={service.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
          {service.price}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-lg">
          {getIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-premium-blue transition-colors">
            {service.title}
          </h3>
          {service.rating && (
            <div className="flex items-center space-x-1">
              <FaStar className="text-luxury-gold" />
              <span className="font-semibold">{service.rating}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

        {/* Features */}
        {service.location && (
          <div className="flex items-center text-gray-500 mb-3">
            <MdLocationOn className="mr-2" />
            <span>{service.location}</span>
          </div>
        )}

        {/* Specifications */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.bedrooms && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {service.bedrooms} Beds
            </span>
          )}
          {service.bathrooms && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {service.bathrooms} Baths
            </span>
          )}
          {service.capacity && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              Capacity: {service.capacity}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link
            to={`/${type}/${service.slug}`}
            className="text-premium-blue font-semibold hover:text-african-gold transition-colors flex items-center group"
          >
            View Details
            <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
          </Link>
          <a
            href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=Interested in ${service.title} - ${service.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nigeria-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;