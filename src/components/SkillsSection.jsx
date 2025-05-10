import { useState } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Programming',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'C', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Statistics & Probability', level: 85 },
        { name: 'Linear Algebra', level: 80 },
      ],
    },
    technologies: {
      title: 'Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      skills: [
        { name: 'YOLOv5', level: 85 },
        { name: 'TensorFlow Lite', level: 80 },
        { name: 'Google Firebase', level: 75 },
        { name: 'Raspberry Pi', level: 90 },
        { name: 'IR Sensors', level: 80 },
        { name: 'NodeMCU', level: 75 },
      ],
    },
    professional: {
      title: 'Professional',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'Project Management', level: 90 },
        { name: 'Technical Consulting', level: 85 },
        { name: 'Research & Analysis', level: 90 },
        { name: 'Tutoring & Mentoring', level: 85 },
        { name: 'Data Analysis', level: 80 },
        { name: 'Public Speaking', level: 75 },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-green-500">{'<'}</span>
            Skills
            <span className="text-green-500">{'/>'}</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some technologies I've been working with recently:
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 border-b dark:border-gray-700">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors duration-300 ${
                  activeTab === category
                    ? 'text-green-500 border-b-2 border-green-500'
                    : 'text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400'
                }`}
              >
                {skillCategories[category].icon}
                <span>{skillCategories[category].title}</span>
              </button>
            ))}
          </div>

          {/* Skills content */}
          <div className="space-y-8">
            {Object.keys(skillCategories).map((category) => (
              <div
                key={category}
                className={`transition-all duration-500 ${
                  activeTab === category ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[category].skills.map((skill) => (
                    <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm text-green-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code editor-like display */}
        <div className="mt-16 max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-sm text-gray-400 font-mono">skills.js</div>
          </div>
          <div className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
            <pre>
              {`const developerSkills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  frameworks: ['React', 'Vue', 'Node.js', 'Express', 'Django'],
  tools: ['Git', 'Docker', 'Jest', 'Webpack', 'AWS'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  practices: ['Responsive Design', 'CI/CD', 'Agile', 'TDD'],
  
  continuousLearning: true,
  problemSolver: true,
  passionateAboutCode: true
};

// Always improving and adding new skills!`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;