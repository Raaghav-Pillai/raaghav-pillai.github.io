import React from 'react';
import { FaJs, FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTensorflow, SiFirebase, SiC, SiGnubash, SiPytorch } from 'react-icons/si';

const iconMap = {
  JavaScript: { icon: FaJs, color: '#F7DF1E' },
  Python: { icon: FaPython, color: '#3776AB' },
  C: { icon: SiC, color: '#A8B9CC' },
  'HTML/CSS': { icon: FaHtml5, color: '#E34F26' },
  React: { icon: FaReact, color: '#61DAFB' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'TensorFlow Lite': { icon: SiTensorflow, color: '#FF6F00' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  Docker: { icon: FaDocker, color: '#2496ED' },
  MongoDB: { icon: FaDatabase, color: '#47A248' },
  YOLOv5: {icon: SiPytorch, color: '#EE4C2C'}
};

const SkillItem = ({ skill }) => {
  const { icon: Icon, color } = iconMap[skill] || { icon: SiGnubash, color: '#4EAA25' };
  return (
    <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-md">
      <Icon style={{ color }} />
      <span className="text-sky-300">'{skill}'</span>,
    </div>
  );
};

const SkillsSection = () => {
  const skills = {
    languages: ["JavaScript", "Python", "C", "HTML/CSS"],
    frameworks: ["React", "Node.js", "TensorFlow Lite"],
    tools: ["Git", "Docker", "YOLOv5", "Firebase"],
    databases: ["MongoDB"],
    practices: ["Project Management", "Technical Consulting", "Research & Analysis"],
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
            A look inside my digital toolbox and the technologies I use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#282c34] rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-[#21252b] px-4 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-sm text-gray-400 font-mono">skills.js</div>
          </div>
          <div className="p-4 md:p-6 font-mono text-sm text-gray-300 overflow-x-auto">
            <div>
              <span className="text-purple-400">const</span> <span className="text-blue-400">developerSkills</span> = {'{'}{' '}
              <div className="pl-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="mb-2">
                    <span className="text-green-400">{category}</span>: {'['}
                    <div className="pl-4 flex flex-wrap gap-2 mt-1">
                      {skillList.map((skill) => <SkillItem key={skill} skill={skill} />)}
                    </div>
                    {']'},
                  </div>
                ))}
                
                <div className="mt-4">
                  <span className="text-green-400">continuousLearning</span>: <span className="text-orange-400">true</span>,
                </div>
                <div>
                  <span className="text-green-400">problemSolver</span>: <span className="text-orange-400">true</span>,
                </div>
                <div>
                  <span className="text-green-400">passionateAboutCode</span>: <span className="text-orange-400">true</span>,
                </div>
              </div>
              {'}'};
              <div className="mt-4 text-gray-500">
                {'// Always improving and adding new skills!'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;