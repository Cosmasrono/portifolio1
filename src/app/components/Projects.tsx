'use client';

import React, { useState } from 'react';
import { useRevealAnimation } from '../hooks/useRevealAnimation';

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
}

const Projects: React.FC = () => {
  const isVisible = useRevealAnimation(300);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [showDescription, setShowDescription] = useState<Record<number, boolean>>({});

  const projects: Project[] = [
    {
      title: 'EACC ESS (Employee Self-Service)',
      category: 'Web Application',
      description: 'A comprehensive web application for employee self-service, streamlining HR processes.',
      imageId: '/images/3.png',
      alt: 'EACC Employee Self-Service System interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: '',
      liveLink: '', // Add live link if available
      isPrivate: true,
    },
    {
      title: 'EACC Recruitment Portal',
      category: 'Web Application',
      description: 'A platform for managing job applications and recruitment processes.',
      imageId: '/images/5.png',
      alt: 'EACC Recruitment Portal interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: '',
      liveLink: '',
      isPrivate: true,
    },
    {
      title: 'EACC HRMS (Business Central)',
      category: 'Web Application',
      description: 'A human resource management system integrated with Business Central.',
      imageId: '/images/4.png',
      alt: 'EACC HRMS interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: '',
      liveLink: '',
      isPrivate: true,
    },
    {
      title: 'Cake Site',
      category: 'Web Application',
      description: 'An e-commerce platform for ordering and customizing cakes.',
      imageId: '/images/1.png',
      alt: 'Cake Site interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: 'https://github.com/Cosmasrono/cake-site',
      liveLink: 'https://cake-site-demo.com', // Add actual live link
      isPrivate: false,
    },
    {
      title: 'West Pokot Marketplace',
      category: 'Web Application',
      description: 'An online marketplace for local vendors in West Pokot.',
      imageId: '/images/1.png',
      alt: 'West Pokot Marketplace interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: '',
      liveLink: '',
      isPrivate: true,
    },
    {
      title: 'Iansoft Ticketing System',
      category: 'Web Application',
      description: 'A ticketing system for managing customer support requests.',
      imageId: '/images/2.png',
      alt: 'Iansoft Ticketing System interface',
      fallbackImage: '/images/fallback.jpg',
      githubLink: '',
      liveLink: '',
      isPrivate: true,
    },
  ];

  const handleImageError = (index: number) => {
    console.log(`Image failed to load for project ${index}: ${projects[index].title}`);
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    console.log(`Image loaded for project ${index}: ${projects[index].title}`);
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const toggleDescription = (index: number) => {
    setShowDescription((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleGitHubClick = (project: Project) => {
    if (project.isPrivate) {
      alert(`The repository for ${project.title} is private.`);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm text-indigo-600 dark:text-indigo-400 tracking-widest font-medium mb-2">
              PORTFOLIO
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my recent projects showcasing my skills in full-stack development. See more details in my{' '}
              <a
                href="/Cosmas_Cheruiyot_CV.pdf"
                download
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                aria-label="Download my CV"
              >
                CV
              </a>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                role="listitem"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={imageErrors[index] ? project.fallbackImage : project.imageId}
                    alt={project.alt}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{project.category}</p>
                  {showDescription[index] && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  )}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => toggleDescription(index)}
                      className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-transform duration-300"
                      aria-label={showDescription[index] ? `Hide ${project.title} description` : `View ${project.title} description`}
                    >
                      {showDescription[index] ? 'Hide' : 'View'}
                    </button>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-transform duration-300"
                        aria-label={`View ${project.title} live demo`}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-transform duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        GitHub
                      </a>
                    ) : (
                      <button
                        onClick={() => handleGitHubClick(project)}
                        className="bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
                        aria-label={`Repository for ${project.title} is private`}
                      >
                        Private Repo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;