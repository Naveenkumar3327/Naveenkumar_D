import React, { useState } from 'react';
import {
  Home,
  User,
  Brain,
  FolderOpen,
  Award,
  Briefcase,
  Trophy,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Code,
  Instagram
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/80 backdrop-blur-md rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src="https://pbs.twimg.com/media/GqQFT0UbAAIXgP_?format=jpg&name=small"
                alt="Naveenkumar D"
                className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg ring-4 ring-cyan-100"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Naveenkumar D</h2>
            <p className="text-sm text-gray-600">Full Stack Developer & UI/UX Designer</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 mt-4">
              <a
                href="https://github.com/Naveenkumar3327"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/naveen30122005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://leetcode.com/u/Naveenkumar__07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
              >
                <Code size={16} />
              </a>
              <a
                href="https://www.instagram.com/_naveen_offl_30/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 hover:translate-x-2 hover:shadow-md ${activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              📍 Coimbatore, Tamil Nadu
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              📧 naveen1127kumar@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;