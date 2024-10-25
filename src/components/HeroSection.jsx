import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        gsap.to(".hero-text", { opacity: 1 });
      },
    });
    gsap.from(".hero-button", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        gsap.to(".hero-button", { opacity: 1 });
      },
    });
  }, []);

  return (
    <section className="flex h-screen flex-col md:flex-row justify-center items-center hero-section bg-gray-800 px-4">
      <div className="image w-full md:w-[45%] flex justify-center mb-4 md:mb-0">
        <img
          src="Images/Me.jpg"
          alt="Satyam Mishra"
          className="rounded-full w-56"
        />
      </div>
      <div className="text w-full md:w-[55%] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold hero-text">
          Hello! I'm Satyam Mishra
        </h1>
        <p className="text-xl md:text-2xl text-white hero-text mt-3">
          A MERN Stack Web Developer
        </p>
        <p className="text-md md:text-lg text-white hero-text mt-1">
          Jalpaiguri Government Engineering College, West Bengal
        </p>

        <div className="links flex flex-col mt-10">
          <div className="flex flex-row justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/satyam-mishra-53617518a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-emerald-400 hover:text-emerald-500"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/satyam-mishra-07"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-emerald-400 hover:text-emerald-500"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:satyam.30.2075@gmail.com"
              className="text-emerald-400 hover:text-emerald-500"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1PkHgp0fkt9PKKU3EtPPDL4nBi9lN4eQm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full inline-block hero-button hover:bg-emerald-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
