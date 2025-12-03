"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled
      ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-xl font-bold transition-colors ${scrolled
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-900 dark:text-white'
              }`}
          >
            Cosmas.dev
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 ${scrolled
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 ${scrolled
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 ${scrolled
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-medium px-6 py-2 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/50"
              >
                Contact
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="text-xl text-gray-400" />
              ) : (
                <FaMoon className="text-xl text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;