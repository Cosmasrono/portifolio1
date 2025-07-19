"use client";

import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    Languages: ['JavaScript', 'TypeScript', 'Python'],
    Frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    Backend: ['Node.js', 'Express.js', 'Django', 'Flask'],
    Databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    Tools: ['Git', 'Docker', 'Webpack', 'Babel'],
    Cloud: ['AWS', 'Azure', 'Heroku', 'Vercel']
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const allSkills = Object.values(skillCategories).flat();
          
          allSkills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, skill]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className={`
          text-3xl font-bold mb-12 text-gray-800 dark:text-white
          transform transition-all duration-1000
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          Skills & Technologies
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className={`
                bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl
                transform transition-all duration-700 ease-in-out
                ${isInView 
                  ? 'opacity-100 translate-y-0 hover:scale-105' 
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{
                transitionDelay: `${categoryIndex * 300}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className={`
                      skill-tag 
                      bg-indigo-100 dark:bg-indigo-700 
                      text-indigo-800 dark:text-indigo-200 
                      px-3 py-1 rounded-full 
                      text-sm font-medium
                      cursor-default
                      opacity-0 transform translate-x-[-20px]
                      transition-all duration-500 ease-out
                      ${visibleSkills.includes(skill) ? 'opacity-100 translate-x-0' : ''}
                      hover:bg-indigo-200 dark:hover:bg-indigo-600
                      hover:scale-110 hover:shadow-md
                    `}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 