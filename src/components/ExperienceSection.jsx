import { useRef, useEffect } from 'react';

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            <span className="text-green-500">{'<'}</span>
            Experience
            <span className="text-green-500">{'/>'}</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div 
          ref={sectionRef} 
          className="space-y-12 opacity-0 duration-1000 ease-in-out"
        >
          <div className="relative border-l-2 border-green-500 pl-8">
            <div className="absolute -left-2 top-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            <div className="font-mono text-sm text-green-500 mb-2">// May 2025 – Present</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">SWE Intern & Project Manager</h3>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-4">Thin Edge Consulting</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Engineered and migrated 3 production websites, streamlining deployment pipelines and resolving 20+ pre-launch issues across frontend and backend systems.</li>
              <li>Led technical coordination across developers and client teams, ensuring seamless go-live transitions and scalable infrastructure.</li>
              <li>Spearheaded bug tracking and resolution initiatives, reducing deployment delays by 40%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 