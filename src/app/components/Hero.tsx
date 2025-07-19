'use client';

import React from 'react';
import Image from 'next/image';
import { useRevealAnimation } from '../hooks/useRevealAnimation';

const Hero: React.FC = () => {
  const isVisible = useRevealAnimation(100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 
      text-gray-800 dark:text-white"
    >
      {/* Optional Background Image - can be commented out if not using */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/images/technology-background.jpg"
          alt="Technology background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Animated Circle */}
        <div className={`
          w-32 h-32 mx-auto mb-8 rounded-full border-4 border-indigo-500 
          animate-pulse transition-all duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}></div>

        <h1 className={`
          text-5xl font-bold mb-4 
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          Hello, I'm <span className="text-indigo-600">Cosmas Cheruiyot</span>
        </h1>

        <p className={`
          text-xl mb-8 text-gray-600 dark:text-gray-300
          transition-all duration-1000 delay-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          A passionate Software Engineer crafting exceptional digital experiences with modern web technologies.
        </p>

        <div className={`
          flex justify-center space-x-4
          transition-all duration-1000 delay-400
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition-colors"
          >
            Get In Touch
          </button>
          <a
            href="/Cosmas_Cheruiyot_CV.pdf"
            download
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className={`
          mt-12 flex justify-center space-x-6 text-lg
          transition-all duration-1000 delay-600
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <a 
            href="https://github.com/your-github" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/your-linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;