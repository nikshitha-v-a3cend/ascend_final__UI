import { useEffect } from 'react';

/**
 * Custom hook to automatically observe all elements with class `.a3-scroll-reveal`
 * and add `.is-visible` when they enter the viewport.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.a3-scroll-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
