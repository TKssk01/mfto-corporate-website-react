document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible
  
    images.forEach(image => {
      observer.observe(image);
    });
  });