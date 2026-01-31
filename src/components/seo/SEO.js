import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/servicesData';

const SEO = ({ 
  title, 
  description, 
  image, 
  type = 'website',
  slug 
}) => {
  const siteTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.seo.defaultTitle;
  const siteDescription = description || siteConfig.seo.defaultDescription;
  const siteImage = image || '/images/og/default.jpg';
  const siteUrl = slug ? `${siteConfig.seo.siteUrl}/${slug}` : siteConfig.seo.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={siteConfig.companyName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data for Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": siteTitle,
          "description": siteDescription,
          "provider": {
            "@type": "Organization",
            "name": siteConfig.companyName,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;