import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "I build things for the web.";
  const typingSpeed = 100;
  
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <section id="home" className="flex min-h-screen items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background code patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 select-none pointer-events-none">
        <pre className="text-xs md:text-sm font-mono text-gray-700 dark:text-gray-400 p-4 overflow-hidden h-full">
          {`
function Portfolio() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const skillsData = await fetchSkills();
        const projectsData = await fetchProjects();
        
        setSkills(skillsData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="portfolio">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  );
}
          `}
        </pre>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-start max-w-3xl mx-auto">
          <span className="text-green-500 font-mono mb-2">Hi, my name is</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3">
            Raaghav Pillai
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-5">
            <span className="text-green-500">{'<'}</span>
            {text}
            <span className="animate-blink">|</span>
            <span className="text-green-500">{'/>'}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            I'm a Computer Science student at the University of Illinois at Urbana Champaign.
            I'm passionate about developing innovative tech solutions, from AI projects to
            smart devices for the visually impaired. Currently, I'm focused on research and
            technical consulting projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium rounded-lg transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-green-500 dark:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;