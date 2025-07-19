'use client';

import React, { useState } from 'react';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ResumeSection {
  title: string;
  items: { role: string; company: string; period: string; description: string }[];
}

const Resume: React.FC = () => {
  const isVisible = useRevealAnimation(300);
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const trackDownload = () => {
    console.log('CV downloaded from Resume section'); // Replace with analytics
  };

  const resumeData: ResumeSection[] = [
    {
      title: 'Professional Experience',
      items: [
        {
          role: 'Software Engineer',
          company: 'EACC',
          period: 'Jan 2023 - Present',
          description: 'Developed scalable web applications like the EACC ESS and Recruitment Portal, improving HR efficiency.',
        },
        {
          role: 'Full-Stack Developer',
          company: 'Iansoft',
          period: 'Jun 2020 - Dec 2022',
          description: 'Built ticketing systems and e-commerce platforms using Laravel and Vue.js.',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          role: 'B.Sc. Computer Science',
          company: 'University of Nairobi',
          period: '2016 - 2020',
          description: 'Graduated with First-Class Honors, specializing in software engineering.',
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm text-indigo-600 dark:text-indigo-400 tracking-widest font-medium mb-2">
              MY RESUME
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Professional Journey
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my skills, experience, and education. Download my CV for a detailed overview.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="/Cosmas_Cheruiyot_CV.pdf"
              download
              onClick={trackDownload}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              aria-label="Download my CV"
            >
              Download CV
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">CV Preview</h3>
              <div className="overflow-auto max-h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg">
                <Document
                  file="/Cosmas_Cheruiyot_CV.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="w-full"
                >
                  {Array.from(new Array(numPages || 0), (_, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} />
                  ))}
                </Document>
              </div>
            </div>

            <div>
              {resumeData.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
                  {section.items.map((item, idx) => (
                    <div key={idx} className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.role}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;