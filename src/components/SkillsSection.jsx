import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const SkillsSection = () => {


  const skills = [
    "JavaScript (ES6+)",
    "React & Redux",
    "Node.js & Express",
    "MongoDB",
    "Tailwind CSS",
    "HTML & CSS",
    "C++ Programming",
    "Git & GitHub",
  ];

  return (
    <section className="py-16 text-center skills-section bg-gray-800 flex flex-col px-4">
      <div className="head mb-8">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
      </div>
      <div className="content">
        <div className="content-text">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="skill-item bg-emerald-600 text-white p-6 rounded-md text-lg hover:scale-105 transition-transform"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-row justify-center gap-6">
          <a
            href="https://leetcode.com/u/satyammishrakumar39/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 mx-5 hover:text-emerald-500 transform hover:scale-110 transition-transform"
          >
            <FaLaptopCode size={28} />
          </a>
          <a
            href="https://codeforces.com/profile/satyam_56_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 transform hover:scale-110 transition-transform"
          >
            <FaCode size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
