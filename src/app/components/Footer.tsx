"use client";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/your-github-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/your-linkedin-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:your-email@example.com"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            aria-label="Email"
          >
            Email
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {currentYear} Cosmas Cheruiyot. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;