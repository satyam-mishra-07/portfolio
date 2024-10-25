import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import './index.css';

function App() {
  return (
    <div className="bg-gray-800 text-white">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
