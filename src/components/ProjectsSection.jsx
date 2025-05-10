import React, { useState, useRef } from 'react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 'netr',
      title: 'NETR - Smart Glasses for the Visually Impaired',
      period: 'May 2023 - Present',
      description: 'Smart glasses using Raspberry Pi & YOLOv5, enabling visually impaired users to navigate environments with 90% object detection accuracy.',
      details: [
        'Developed smart glasses using Raspberry Pi & YOLOv5, achieving 90% object detection accuracy',
        'Engineered a mobile app with TensorFlow Lite, securing 500+ downloads and positive user feedback'
      ],
      technologies: ['JavaScript', 'Python', 'C', 'YOLOv5', 'TensorFlow Lite', 'Android Studio'],
      image: '/assets/images/project-netr.jpg',
      link: '#'
    },
    {
      id: 'misinformation',
      title: 'Beyond Fact-Checking: Assessing the Social Impact of Misinformation',
      period: 'January 2025 - Present',
      description: 'Research publication focused on classifying social media misinformation during hurricanes and analyzing its social impact.',
      details: [
        'Collaborated with four PhD students to classify social media comments as misinformation',
        'Developed a framework to analyze misinformation\'s influence on public perception and emergency response'
      ],
      technologies: ['Data Analysis', 'Social Media Mining', 'Classification Algorithms'],
      image: '/assets/images/project-misinformation.jpg',
      link: '#'
    },
    {
      id: 'ai-perception',
      title: 'People\'s Perception of AI and its Effects on the Job Market',
      period: 'May 2023 - August 2023',
      description: 'Independent research exploring public perception of AI and its anticipated impacts on employment and job markets.',
      details: [
        'Conducted independent research on AI\'s impact on job markets',
        'Surveyed 150+ participants and analyzed industry trends',
        'Presented findings to faculty and peers, highlighting key economic and workforce implications'
      ],
      technologies: ['Survey Design', 'Data Analysis', 'Research Methodology'],
      image: '/assets/images/project-ai.jpg',
      link: '#'
    },
  ];

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-green-500">{'<'}</span>
            Projects
            <span className="text-green-500">{'/>'}</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some notable projects and research I've worked on:
          </p>
        </div>

        <div ref={projectsRef} className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-5xl text-green-500">{`{ ${project.title.charAt(0)} }`}</div>
              </div>
              <div className="p-6">
                <div className="font-mono text-xs text-green-500 mb-2">
                  {project.period}
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="text-green-500 hover:text-green-700 dark:hover:text-green-300 text-sm flex items-center gap-1 transition-colors font-medium"
                >
                  {activeProject === project.id ? 'View Less' : 'View More'} 
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeProject === project.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Details:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;