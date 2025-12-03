'use client';

import React from 'react';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { FaCode, FaServer, FaDatabase, FaCogs, FaCheckCircle } from 'react-icons/fa';

const About: React.FC = () => {
  const isVisible = useRevealAnimation(200);

  const expertise = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive, interactive interfaces with Next.js, React, Vue.js, and modern CSS frameworks.',
      icon: <FaCode className="text-emerald-600 dark:text-emerald-500 text-4xl" />,
    },
    {
      title: 'Backend Architecture',
      description: 'Building scalable server-side applications with Laravel, Yii 2, Node.js, and Nest.js.',
      icon: <FaServer className="text-emerald-600 dark:text-emerald-500 text-4xl" />,
    },
    {
      title: 'Database Management',
      description: 'Designing and optimizing databases with PostgreSQL, MySQL, MongoDB, and MSSQL.',
      icon: <FaDatabase className="text-emerald-600 dark:text-emerald-500 text-4xl" />,
    },
    {
      title: 'System Integration',
      description: 'Integrating ERP systems like Microsoft Dynamics 365 BC with custom web portals.',
      icon: <FaCogs className="text-emerald-600 dark:text-emerald-500 text-4xl" />,
    },
  ];

  const highlights = [
    'Full-stack development expertise',
    'Enterprise system integration',
    'Modern web technologies',
    'Scalable architecture design',
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-sm text-emerald-600 dark:text-emerald-500 font-semibold mb-4 uppercase tracking-wide">
              Expertise
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              What I Do Best
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specialized in building modern, scalable web applications and integrating
              complex business systems.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Section */}
          <div className="bg-white dark:bg-gray-950 rounded-2xl p-12 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Work With Me
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  I bring a unique combination of technical expertise, business understanding,
                  and a passion for creating exceptional digital experiences.
                </p>
                <a
                  href="/Cosmas_Cheruiyot_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-semibold hover:gap-3 transition-all group"
                >
                  Download Resume
                  <FaCheckCircle className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all"
                  >
                    <FaCheckCircle className="text-emerald-600 dark:text-emerald-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;