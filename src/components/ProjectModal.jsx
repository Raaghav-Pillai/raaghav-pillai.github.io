import React, { useState, useEffect } from 'react';

const ProjectModal = ({ modalData, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { project, rect } = modalData || {};

  useEffect(() => {
    if (project) {
      // Use requestAnimationFrame to ensure the initial state is rendered before animating
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [project]);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the animation to finish before calling the parent's close handler
    setTimeout(onClose, 400); // This duration should match the transition duration
  };

  if (!project || !rect) {
    return null;
  }

  const dynamicStyle = {
    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    ...(isVisible
      ? { // Final state: centered modal
          top: '50%',
          left: '50%',
          width: 'min(90vw, 42rem)',
          height: 'auto',
          maxHeight: '90vh',
          transform: 'translate(-50%, -50%)',
        }
      : { // Initial state: matches the project card
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          transform: 'none',
        }
    ),
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-colors duration-300 ${isVisible ? 'bg-black/70' : 'bg-black/0'}`}
      onClick={handleClose}
    >
      <div
        style={dynamicStyle}
        className="fixed bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className={`w-full h-full overflow-y-auto transition-opacity duration-300 ${isVisible ? 'opacity-100 delay-200' : 'opacity-0'}`}>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-mono text-xs text-green-500 mb-2">
                  {project.period}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
              </div>
              <button 
                onClick={handleClose} 
                className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Key Details:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href={project.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 