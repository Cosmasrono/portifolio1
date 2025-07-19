// src/hooks/useRevealAnimation.ts
'use client';

import { useEffect, useState } from 'react';

export const useRevealAnimation = (delay, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    // Target the closest section with an ID
    const element = document.querySelector('[id]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  return isVisible;
};