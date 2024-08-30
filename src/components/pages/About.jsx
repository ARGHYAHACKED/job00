// AboutUs.jsx
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation for fade-in and slide-in effects
  const useSlideIn = (delay, side) => useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: `translateX(${side === 'left' ? '-100%' : '100%'})` },
    config: { duration: 800, easing: (t) => t * (2 - t) }, // ease-in effect
    delay,
  });

  // Animation for hover effects
  const useHoverEffect = () => {
    const [hoverProps, setHoverProps] = useSpring(() => ({
      scale: 1,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      config: { tension: 300, friction: 15 },
    }));

    return {
      hoverProps,
      onMouseEnter: () => setHoverProps({ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }),
      onMouseLeave: () => setHoverProps({ scale: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }),
    };
  };

  // Background colors for each section
  const backgrounds = [
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-pink-100',
    'bg-red-100',
    'bg-purple-100',
    'bg-teal-100',
    'bg-indigo-100',
    'bg-gray-100',
    'bg-orange-100',
    'bg-cyan-100',
    'bg-lime-100',
  ];

  // Define summaries for flash divs
  const summaries = [
    'Overview of the challenges faced by graduates in today’s job market.',
    'Holistic approach to job searching and career development.',
    'Solutions to enhance connectivity between job seekers and employers.',
    'Expanding access to job opportunities across various sectors.',
    'Providing counseling services and career guidance resources.',
    'Supporting internships and industrial training opportunities.',
    'Mentorship programs for career development.',
    'Global opportunities for international employment.',
    'AI-driven matchmaking for suitable job opportunities.',
    'Tools and resources for resume building and job applications.',
    'Additional support for students in early career stages.',
  ];

  return (
    <div className="relative p-6 max-w-4xl mx-auto">
      {/* Custom cursor */}
      <div
        className="absolute w-6 h-6 rounded-full bg-zinc-400 opacity-80 pointer-events-none transition-transform duration-150 ease-in-out z-50"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />

      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
      </div>

      {/* Content sections */}
      {[
        {
          title: 'Background',
          content: `In today's competitive job market, graduates are encountering enormous challenges during their transition from education to employment. Most existing platforms lack comprehensive access to a wide array of job opportunities, spanning both private and government sectors, as well as international avenues. Furthermore, there is a critical shortage of essential resources such as counseling and guidance facilities, along with insufficient support for internships and industrial training.`,
        },
        {
          title: 'Detailed Description',
          content: `This platform offers a holistic approach to job searching and career development, focusing on:
            1. Advanced algorithms and AI-driven matchmaking connecting job seekers with employers.
            2. Extensive access to job opportunities across private, government, and international sectors.
            3. Comprehensive counseling services and guidance resources.
            4. Support for securing internships and industrial training opportunities.
            5. Mentorship programs pairing students with industry professionals for guidance.`,
        },
        {
          title: 'Expected Solution',
          content: `To address the challenges faced by graduates, our solution includes:
            1. Enhance Job Market Connectivity: Establish a robust platform bridging the gap between job seekers and employers with advanced algorithms and AI for optimal matchmaking.
            2. Expand Access to Opportunities: Provide a centralized portal with exhaustive job listings across various sectors and ensure regular updates to maximize job opportunities.
            3. Offer Comprehensive Resources: Integrate professional counseling, career guidance, and tools for resume building, interview preparation, and job application processes.
            4. Improve Student Support: Implement sections for internships and training, offering mentoring and support to help students gain practical experience and navigate early career challenges.`,
        },
        {
          title: 'Job Opportunities',
          content: `Offer a broad range of job opportunities, including private, government, and international sectors, ensuring updated and diverse listings.`,
        },
        {
          title: 'Counseling Services',
          content: `Provide professional counseling services to help job seekers with career advice, resume building, and interview preparation.`,
        },
        {
          title: 'Internships and Training',
          content: `Create dedicated sections for internships and industrial training, assisting students in gaining practical experience.`,
        },
        {
          title: 'Mentorship Programs',
          content: `Pair students with industry professionals for mentorship, offering guidance and support in career development.`,
        },
        {
          title: 'Global Opportunities',
          content: `Expand access to international job opportunities and provide resources for job seekers looking for overseas employment.`,
        },
        {
          title: 'AI-Driven Matchmaking',
          content: `Utilize advanced algorithms and AI to match job seekers with suitable opportunities based on their skills and preferences.`,
        },
        {
          title: 'Resume and Application Tools',
          content: `Provide tools and resources for resume building and job application processes to streamline the job search.`,
        },
        {
          title: 'Student Support',
          content: `Offer additional support to students, including career advice and resources for early career challenges.`,
        },
      ].map((section, index) => {
        const isLeft = index % 2 === 0;
        const side = isLeft ? 'left' : 'right';
        const { hoverProps, onMouseEnter, onMouseLeave } = useHoverEffect();

        return (
          <div key={index} className="relative flex items-center mb-6">
            {/* Main Content Div */}
            <animated.div
              style={useSlideIn(index * 300, side)}
              className={`flex-1 p-6 rounded-lg border border-gray-300 ${backgrounds[index % backgrounds.length]} relative`}
            >
              <animated.div
                style={hoverProps}
                className="transition-transform duration-300 transform"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h2 className="text-2xl font-bold text-gray-700 mb-4">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </animated.div>
            </animated.div>

            {/* Flash Div */}
            <animated.div
              className={`absolute top-0 ${side}-0 h-full w-1/4 bg-gray-800 text-white p-4 flex items-center justify-center transition-opacity duration-300 ${side === 'left' ? '-translate-x-full' : 'translate-x-full'} transform`}
              style={{
                opacity: hoverProps.scale.to(s => s > 1 ? 1 : 0),
                transform: hoverProps.scale.to(s => s > 1 ? 'translateX(0)' : `translateX(${side === 'left' ? '-100%' : '100%'})`),
              }}
            >
              {summaries[index % summaries.length]}
            </animated.div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;
