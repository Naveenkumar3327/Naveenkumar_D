import React from 'react';
import { Heart, Github, Linkedin, Code, ArrowUp, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Naveenkumar3327',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/naveen30122005',
      label: 'LinkedIn'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/Naveenkumar__07',
      label: 'LeetCode'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/_naveen_offl_30/',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Naveenkumar D</h3>
            <p className="text-gray-600 text-sm">Full Stack Developer & UI/UX Designer</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 text-gray-600 hover:text-white transform hover:-translate-y-1 hover:shadow-lg group"
                  title={social.label}
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                </a>
              );
            })}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg text-gray-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom - Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center space-x-1">
            <span>© 2025 Naveenkumar D </span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            All rights reserved. Built with modern web technologies.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;