"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            <a
              href="https://github.com/Cosmasrono"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/cosmas-cheruiyot-a95a3122b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:ccosmas001@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            © {currentYear} Cosmas Cheruiyot. All Rights Reserved.
          </p>

          {/* Made with love */}
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500" /> by @cossi
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;