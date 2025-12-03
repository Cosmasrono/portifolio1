'use client';

import React, { useState } from 'react';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  category: string;
  description: string;
  imageId: string;
  alt: string;
  fallbackImage: string;
  githubLink?: string;
  liveLink?: string;
  isPrivate: boolean;
  technologies: string[];
  featured?: boolean;
}

const Projects: React.FC = () => {
  const isVisible = useRevealAnimation(300);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  const projects: Project[] = [
    {
      title: 'EACC Employee Self-Service Portal',
      category: 'Enterprise Application',
      description: 'Comprehensive web portal for employee self-service, streamlining HR processes with Business Central integration, leave management, and document processing.',
      imageId: '/images/3.png',
      alt: 'EACC ESS Portal',
      fallbackImage: '/images/fallback.jpg',
      isPrivate: true,
      technologies: ['Laravel', 'Vue.js', 'Business Central', 'PostgreSQL'],
      featured: true,
    },
    {
      title: 'EACC Recruitment System',
      category: 'Enterprise Application',
      description: 'Advanced recruitment platform with applicant tracking, interview scheduling, automated scoring, and comprehensive reporting features.',
      imageId: '/images/5.png',
      alt: 'EACC Recruitment Portal',
      fallbackImage: '/images/fallback.jpg',
      isPrivate: true,
      technologies: ['Laravel', 'Next.js', 'PostgreSQL'],
      featured: true,
    },
    {
      title: 'Business Central Integration',
      category: 'ERP Integration',
      description: 'Custom integration layer connecting Microsoft Dynamics 365 Business Central with web portals using OData and SOAP APIs.',
      imageId: '/images/4.png',
      alt: 'BC Integration',
      fallbackImage: '/images/fallback.jpg',
      isPrivate: true,
      technologies: ['Yii 2', 'Business Central', 'MSSQL'],
      featured: true,
    },
    {
      title: 'Bolt food Integration',
      category: 'Web Application',
      description: 'Integration of Bolt food with cake site to automate the food delivery process.',
      imageId: '/images/9.png',
      alt: 'Bolt food Integration',
      fallbackImage: '/images/fallback.jpg',
      githubLink: 'https://github.com/Cosmasrono/bolt-food-integration',
      isPrivate: false,
      technologies: ['Laravel', 'Business Central', 'MSSQL'],
    },
    {
      // nzoberi schools integration
      title: 'Nzoberi Schools Integration',
      category: 'Web Application',
      description: 'Integration of Nzoberi Schools with the school management system ',
      imageId: '/images/10.png',
      alt: 'Nzoberi Schools Integration',
      fallbackImage: '/images/fallback.jpg',
      githubLink: 'https://github.com/Cosmasrono/nzoberi-schools-integration',
      isPrivate: false,
        technologies: ['Laravel', 'Business Central', 'MSSQL'],
      }
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-sm text-blue-600 dark:text-blue-500 font-semibold mb-4 uppercase tracking-wide">
              Portfolio
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of enterprise applications and web solutions I've built,
              showcasing full-stack development and system integration expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/10 ${project.featured ? 'lg:col-span-1' : ''
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Image - 3:2 aspect ratio */}
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl">
                  <img
                    src={imageErrors[index] ? project.fallbackImage : project.imageId}
                    alt={project.alt}
                    className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                    {project.githubLink && !project.isPrivate ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        <FaGithub className="text-lg" /> View Code
                      </a>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-600 text-sm italic">
                        Private Repository
                      </span>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="/images/assets/COSMAS CHERUIYOT TIONGIK.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Full Resume
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;