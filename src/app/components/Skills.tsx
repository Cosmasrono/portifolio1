"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  SiJavascript, SiTypescript, SiPhp, SiPython,
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiLaravel, SiNodedotjs, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiDocker, SiNpm
} from 'react-icons/si';
import { FaCogs, FaDatabase } from 'react-icons/fa';

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    Languages: [
      { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
      { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-400' },
      { name: 'Python', icon: <SiPython />, color: 'text-green-400' },
    ],
    Frontend: [
      { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900 dark:text-white' },
      { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
      { name: 'Nuxt.js', icon: <SiVuedotjs />, color: 'text-green-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
      { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
    ],
    Backend: [
      { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500' },
      { name: 'Yii 2', icon: <FaCogs />, color: 'text-purple-500' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
      { name: 'Nest.js', icon: <SiNestjs />, color: 'text-red-600' },
    ],
    Databases: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'MSSQL', icon: <FaDatabase />, color: 'text-red-500' },
    ],
    'Integration & Tools': [
      { name: 'Dynamics 365 BC', icon: <FaCogs />, color: 'text-cyan-400' },
      { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
      { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
      { name: 'npm/pnpm', icon: <SiNpm />, color: 'text-red-600' },
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const allSkills = Object.values(skillCategories).flatMap(cat => cat.map(s => s.name));

          allSkills.forEach((skillName, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, skillName]);
            }, index * 100);
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
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`
          text-sm text-purple-600 dark:text-purple-400 tracking-widest font-semibold mb-3 uppercase
          transform transition-all duration-1000
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          Technical Skills
        </h2>
        <h1 className={`
          text-4xl md:text-5xl font-bold gradient-text mb-12
          transform transition-all duration-1000
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          Technologies & Tools
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className={`
                glass-strong p-6 rounded-2xl
                transform transition-all duration-700 ease-in-out
                ${isInView
                  ? 'opacity-100 translate-y-0 hover:scale-105'
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{
                transitionDelay: `${categoryIndex * 200}ms`
              }}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill.name}
                    className={`
                      glass
                      px-4 py-2 rounded-full 
                      text-sm font-medium
                      cursor-default
                      opacity-0 transform translate-y-4
                      transition-all duration-500 ease-out
                      ${visibleSkills.includes(skill.name) ? 'opacity-100 translate-y-0' : ''}
                      hover:scale-110 hover:shadow-glow
                      flex items-center gap-2
                    `}
                    style={{
                      transitionDelay: `${(categoryIndex * skills.length + index) * 50}ms`
                    }}
                  >
                    <span className={`${skill.color} text-lg`}>{skill.icon}</span>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
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