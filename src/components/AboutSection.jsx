import { useRef, useEffect } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          if (imgRef.current) {
            imgRef.current.classList.add('animate-slideInRight');
          }
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-green-500">{'<'}</span>
            About Me
            <span className="text-green-500">{'/>'}</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div 
          ref={sectionRef} 
          className="grid md:grid-cols-2 gap-12 items-center opacity-0 duration-1000 ease-in-out"
        >
          <div className="space-y-6">
            <div className="font-mono text-sm text-green-500 mb-2">// about-me.js</div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Hello! I'm Raaghav, a Computer Science student at the University of Illinois at Urbana Champaign 
              with a passion for innovative technology and problem-solving. I'm set to graduate in May 2027 with 
              a strong academic foundation (GPA: 3.73/4.0).
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              My academic journey includes coursework in Computer Science, Calculus, Statistics, and Linear Algebra. 
              I've also expanded my knowledge through Harvard University's CS50p Introduction to Computer Science using Python.
              I'm proficient in JavaScript, Python, C, and have experience with technologies like YOLOv5, TensorFlow Lite, 
              Google Firebase, Raspberry Pi, and more.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Currently, I serve as an Internal Project Manager at the Office of Technical Consulting Resources (OTCR), 
              where I lead tech initiatives and research projects. I'm also a Lead Consultant working with education technology 
              companies and online veterinary platforms to enhance their AI capabilities and business performance.
            </p>
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-green-500 shadow-md">
              <div className="font-mono text-sm text-green-500 mb-2">// fun-fact.js</div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "I've contributed to several open-source projects and enjoy solving 
                complex problems with elegant solutions."
              </p>
            </div>
          </div>

          <div className="flex justify-center" ref={imgRef}>
            <div className="scale-75 relative bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg transform rotate-3 transition-all duration-300 hover:rotate-0">
              <div className="absolute top-0 left-0 m-2 flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 rounded overflow-hidden mt-5">
                <img 
                  src="/assets/images/developer.jpg"
                  alt="Developer"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="p-3 text-center font-mono text-xs text-gray-600 dark:text-gray-300">
                  developer.jpg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;