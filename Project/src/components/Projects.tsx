import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive MERN stack application for managing student records, courses, and academic information with intuitive dashboard and real-time updates.',
      image: 'https://images.pexels.com/photos/5427654/pexels-photo-5427654.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://fancy-selkie-7d8b06.netlify.app/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      featured: true
    },
    {
      title: 'Notes Taking App',
      description: 'A modern note-taking application with rich text editing, categorization, search functionality, and cloud synchronization using MERN stack.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://luxury-puppy-aa38eb.netlify.app/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Student Career Guidance System',
      description: 'An intelligent platform providing personalized career guidance, skill assessments, and job recommendations for students.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://boisterous-tulumba-84b57f.netlify.app/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Medical Appointment Booking',
      description: 'A healthcare management system enabling patients to book appointments, view medical records, and manage healthcare services online.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://vermillion-centaur-e0cfbe.netlify.app/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Campus Connect',
      description: 'A social platform connecting students and faculty with features like messaging, event management, academic resources sharing, and community building.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://campus-link-weld.vercel.app/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my expertise in full-stack development and user experience design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200/50 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 text-sm font-medium group"
                  >
                    <span>View Project</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;