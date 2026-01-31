// Image optimization helper
export const optimizeImage = (src, width = 800) => {
  if (src.includes('cloudinary')) {
    return src.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
  }
  return src;
};

// Lazy loading helper
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }
};