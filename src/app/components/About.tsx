'use client';

import React from 'react';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { FaCode, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';

const About: React.FC = () => {
  const isVisible = useRevealAnimation(200);

  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building interactive and responsive user interfaces with Next.js, Nuxt.js (Vue), and modern web technologies.',
      icon: <FaCode className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side applications using Laravel, Yii 2, Nest.js, Node.js, and various databases.',
      icon: <FaServer className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Applying data science principles and machine learning techniques to solve complex problems.',
      icon: <FaDatabase className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
    },
    {
      title: 'ERP & Web Integrations',
      description: 'Integrating business systems like Microsoft Dynamics 365 Business Central with custom web portals.',
      icon: <FaCogs className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm text-indigo-600 dark:text-indigo-400 tracking-widest font-medium mb-2">
              ABOUT ME
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm a passionate developer with expertise in modern web technologies and a keen eye for design.{' '}
              <a
                href="/Cosmas_Cheruiyot_CV.pdf"
                download
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                aria-label="Download my CV"
              >
                Download my CV
              </a>{' '}
              for a detailed overview.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                role="listitem"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;