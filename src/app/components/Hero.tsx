'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaRocket, FaCog } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleStyles, setParticleStyles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);

    // Generate particle styles only on the client side
    const styles = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 7}s`,
    }));
    setParticleStyles(styles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Professional Tech Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        />
        
        {/* Multi-layer Gradient Overlay for Clarity */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/95 dark:from-gray-950/95 dark:via-blue-950/90 dark:to-indigo-950/95"></div>
        
        {/* Refined Animated Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/30 to-teal-400/30 dark:from-emerald-600/20 dark:to-teal-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 to-blue-400/30 dark:from-cyan-600/20 dark:to-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Refined Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && particleStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/40 dark:bg-emerald-400/30 rounded-full animate-float"
            style={style}
          />
        ))}
      </div>

      {/* Subtle Mouse Follow Effect */}
      <div
        className="absolute w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full filter blur-3xl pointer-events-none transition-all duration-500 ease-out z-0"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Minimal Decorative Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
            <FaCode className="absolute top-20 left-10 text-2xl text-emerald-600/30 dark:text-emerald-400/20 animate-float animation-delay-1000" />
            <FaRocket className="absolute top-32 right-16 text-xl text-cyan-600/30 dark:text-cyan-400/20 animate-float animation-delay-3000" />
            <FaCog className="absolute bottom-40 left-16 text-2xl text-indigo-600/30 dark:text-indigo-400/20 animate-spin-slow" />
          </div>

          {/* Professional Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg shadow-emerald-500/10 hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              Available for New Opportunities
            </span>
          </div>

          {/* Main Heading - Clean & Bold */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            <span className="inline-block">
              Software Engineer
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent font-extrabold">
                Building The Future
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-30 blur-sm"></span>
            </span>
          </h1>

          {/* Clear & Professional Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Crafting exceptional web applications with modern technologies.
            <br className="hidden sm:block" />
            Specializing in full-stack development and system integrations.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <span className="relative z-10">View My Work</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 bg-white dark:bg-gray-900 backdrop-blur-xl text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all transform hover:scale-105 shadow-xl"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>

          {/* Professional Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
              Connect With Me
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Cosmasrono"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110 shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/cosmas-cheruiyot-a95a3122b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:ccosmas001@gmail.com"
                className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110 shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 rounded-full animate-scroll transition-colors"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;