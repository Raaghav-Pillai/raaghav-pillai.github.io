import { useRef, useEffect } from 'react';

const ExperienceItem = ({ date, title, company, details }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-item-animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="relative pl-8 opacity-0" style={{ transition: 'opacity 0.5s' }}>
      <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
      <div className="font-mono text-sm text-green-500 mb-2">{`// ${date}`}</div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-md text-gray-600 dark:text-gray-400 mb-4">{company}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      date: 'June 2025 – Present',
      title: 'Fullstack Developer',
      company: 'FlowDeca',
      details: [
        'Architect, develop, and scale mission-critical features for a market-leading SaaS platform within a high-performing engineering team.',
        'Drive the end-to-end software development lifecycle, from conceptualization and architectural design to deployment, employing a modern full-stack technology portfolio.',
        'Innovate and optimize application performance and user experience by collaborating with cross-functional teams to translate complex requirements into robust technical solutions.',
      ],
    },
    {
      date: 'May 2025 – Present',
      title: 'SWE Intern & Project Manager',
      company: 'Thin Edge Consulting',
      details: [
        'Engineered and migrated 3 production websites, streamlining deployment pipelines and resolving 20+ pre-launch issues across frontend and backend systems.',
        'Led technical coordination across developers and client teams, ensuring seamless go-live transitions and scalable infrastructure.',
        'Spearheaded bug tracking and resolution initiatives, reducing deployment delays by 40%',
      ],
    },
  ];

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

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-2 top-0 h-full w-px bg-green-500"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                details={exp.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 