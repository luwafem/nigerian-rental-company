export const services = {
  apartments: [
    {
      id: 'apt-001',
      title: 'Luxury Victoria Island Penthouse',
      slug: 'luxury-victoria-island-penthouse',
      description: 'Premium 5-bedroom penthouse with ocean view',
      detailedDescription: 'Experience luxury living in this fully furnished penthouse with 24/7 security, gym, pool, and concierge services.',
      price: '₦500,000/night',
      location: 'Victoria Island, Lagos',
      bedrooms: 5,
      bathrooms: 4,
      size: '4500 sq ft',
      amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Concierge', 'Smart Home'],
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w-800',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800'
      ],
      features: {
        furnished: true,
        airConditioning: true,
        wifi: true,
        parking: 3,
        balcony: true,
        seaView: true
      },
      rating: 4.9,
      reviews: 127,
      metaTitle: 'Luxury Penthouse Rental in Victoria Island | Premium Lagos Apartments',
      metaDescription: 'Rent a luxury penthouse in Victoria Island Lagos. Premium apartments with ocean views, 5 bedrooms, and exclusive amenities.',
      ogImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'
    },
    {
      id: 'apt-002',
      title: 'Lekki Phase 1 Luxury Villa',
      slug: 'lekki-phase-1-luxury-villa',
      description: '4-bedroom villa with private garden',
      detailedDescription: 'Spacious villa in Lekki with modern amenities and private outdoor space.',
      price: '₦350,000/night',
      location: 'Lekki Phase 1, Lagos',
      bedrooms: 4,
      bathrooms: 3,
      size: '3500 sq ft',
      amenities: ['Garden', 'Parking', 'Security', 'Generator'],
      images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'],
      features: {
        furnished: true,
        airConditioning: true,
        wifi: true,
        parking: 2,
        garden: true
      },
      rating: 4.7,
      reviews: 89,
      metaTitle: 'Lekki Villa Rental | Luxury Accommodation Lagos',
      metaDescription: 'Rent a luxury villa in Lekki Phase 1 with modern amenities and private garden.',
      ogImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'
    }
  ],
  
  cars: [
    {
      id: 'car-001',
      title: '2024 Mercedes-Benz S-Class',
      slug: '2024-mercedes-benz-s-class',
      description: 'Luxury sedan with chauffeur service',
      detailedDescription: 'Travel in ultimate comfort with our chauffeur-driven Mercedes S-Class. Perfect for business meetings and special occasions.',
      price: '₦150,000/day',
      category: 'Luxury Sedan',
      transmission: 'Automatic',
      seats: 4,
      fuel: 'Petrol',
      features: ['Leather Seats', 'Sunroof', 'Entertainment System', 'WiFi', 'Chauffeur'],
      images: ['https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800'],
      rating: 4.8,
      reviews: 56,
      metaTitle: 'Luxury Car Rental Lagos | Mercedes S-Class with Chauffeur',
      metaDescription: 'Rent a Mercedes-Benz S-Class with professional chauffeur in Lagos. Premium car rental service for business and events.',
      location: 'Lagos, Nigeria'
    },
    {
      id: 'car-002',
      title: 'Toyota Land Cruiser 2023',
      slug: 'toyota-land-cruiser-2023',
      description: 'SUV for family and business trips',
      detailedDescription: 'Reliable and comfortable SUV perfect for family trips or business travel across Nigeria.',
      price: '₦120,000/day',
      category: 'SUV',
      transmission: 'Automatic',
      seats: 7,
      fuel: 'Diesel',
      features: ['4WD', 'Leather Seats', 'Navigation', 'Bluetooth'],
      images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800'],
      rating: 4.6,
      reviews: 42,
      metaTitle: 'Toyota Land Cruiser Rental Nigeria | SUV Car Hire',
      metaDescription: 'Rent a Toyota Land Cruiser in Nigeria. Perfect for family trips and business travel.',
      location: 'Abuja, Nigeria'
    }
  ],
  
  boats: [
    {
      id: 'boat-001',
      title: 'Premium Yacht Charter',
      slug: 'premium-yacht-charter-lagos',
      description: 'Luxury yacht for private events and cruises',
      detailedDescription: 'Host unforgettable events on our premium yacht. Perfect for corporate events, weddings, and private parties.',
      price: '₦800,000/day',
      capacity: 30,
      crew: 5,
      features: ['Bar', 'Kitchen', 'Sound System', 'Water Sports', 'Air Conditioning'],
      images: ['https://unsplash.com/photos/86wR5GZJZdQ/download?force=true&w=2400'],
      rating: 4.9,
      reviews: 34,
      metaTitle: 'Luxury Yacht Charter Lagos | Private Boat Rental Nigeria',
      metaDescription: 'Charter a luxury yacht in Lagos for events and cruises. Premium boat rental with full crew and amenities.',
      location: 'Lagos Marina, Nigeria'
    }
  ],
  
  escorts: [
    {
      id: 'escort-001',
      title: 'Executive Security Detail',
      slug: 'executive-security-detail-lagos',
      description: 'Professional security personnel for VIP protection',
      detailedDescription: 'Our trained security professionals provide discreet and effective protection for executives, celebrities, and high-profile individuals.',
      price: '₦150,000/day',
      services: ['Personal Protection', 'Event Security', 'Residential Security', 'Corporate Security'],
      qualifications: ['Trained Professionals', 'Licensed', 'First Aid Certified', 'Discreet'],
      images: ['https://unsplash.com/photos/gBqXnj8VR3o/download?force=true&w=2400'],
      rating: 4.7,
      reviews: 78,
      metaTitle: 'Executive Security Services Lagos | VIP Protection Nigeria',
      metaDescription: 'Professional executive security and VIP protection services in Lagos. Licensed and trained security personnel.',
      location: 'Nationwide, Nigeria'
    }
  ]
};

export const siteConfig = {
  companyName: 'Elite Naija Rentals',
  phone: '+2348012345678',
  whatsapp: '+2348012345678',
  email: 'bookings@elitenaijarentals.com',
  address: 'Victoria Island, Lagos, Nigeria',
  social: {
    facebook: 'https://facebook.com/elitenaijarentals',
    instagram: 'https://instagram.com/elitenaijarentals',
    twitter: 'https://twitter.com/elitenaijarentals'
  },
  seo: {
    defaultTitle: 'Elite Naija Rentals | Premium Rental Services in Nigeria',
    defaultDescription: 'Luxury apartment, car, boat, and executive services rental in Nigeria. Premium quality, professional service.',
    keywords: 'Nigeria rental, Lagos apartments, luxury cars Nigeria, yacht charter Lagos, executive security Nigeria',
    siteUrl: 'https://elitenaijarentals.com'
  }
};