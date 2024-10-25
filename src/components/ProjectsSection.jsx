import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ProjectsSection = () => {
  useEffect(() => {
    gsap.from('.project-card', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.3,
      onComplete: () => {
        gsap.to('.project-card', { opacity: 1 });
      },
    });
  }, []);

  const projects = [
    {
      title: 'Royale | A Restaurant Web Application',
      description: 'A MERN stack application for managing restaurant orders and cart functionalities.',
      link: 'https://royale-nine.vercel.app/'
    },
    {
      title: 'Weatheria | The Weather App',
      description: 'A Weather app that fetches real-time weather of different locations using React and OpenWeatherAPI.',
      link: 'https://weatheria-weather-app.vercel.app/'
    },
    {
      title: 'TextUtils | Smart Text Editor and Analyzer',
      description: 'An online text editor for writing, analyzing, and editing text.',
      link: 'https://text-utils-beta-wheat.vercel.app/'
    },
    {
      title: 'NotesWorld | Note Taking Website',
      description: 'A web application for saving thoughts and ideas using MongoDB for storage.',
      link: 'https://satyam-mishra-07.github.io/NotesWorld-Notes-taking-website/'
    }
  ];

  return (
    <section className="py-16 text-center projects-section flex flex-col justify-center bg-gray-800 px-4">
      <h2 className="text-4xl font-bold mb-8 text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-emerald-600 text-white p-6 rounded-md transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-white mt-2">{project.description}</p>
            <a 
              href={project.link} 
              className="text-emerald-300 hover:text-emerald-400 mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
