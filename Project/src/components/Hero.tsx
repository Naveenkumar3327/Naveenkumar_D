'use client';
import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1zXTwt6rzBeG_S7SdC3mJUQWZQbSs5QB1';
    link.setAttribute('download', 'Naveenkumar_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <img
        src="https://pbs.twimg.com/media/GqQFT0UbAAIXgP_?format=jpg&name=large"
        alt="Naveenkumar D"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* ✅ Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-sm z-10" />

      {/* ✅ Decorative Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Naveenkumar D
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating seamless digital experiences through clean code and thoughtful design.
            Specializing in MERN stack development with a keen eye for user interface aesthetics.
          </p>
        </div>

        {/* ✅ Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button
            onClick={handleDownload}
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
          >
            <span className="flex items-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </span>
          </button>
        </div>

        {/* ✅ Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { number: '10+', label: 'Projects' },
            { number: '6+', label: 'Certifications' },
            { number: '2+', label: 'Years Experience' },
            { number: '4+', label: 'Achievements' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-600">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
