import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Agro Nanba',
      type: 'Full-time',
      period: 'Current',
      location: 'Remote',
      description: 'Leading agriculture web application development with focus on responsive UI design and user experience optimization.',
      achievements: [
        'Developed responsive agriculture management platform',
        'Implemented modern UI/UX design principles',
        'Optimized application performance and accessibility'
      ],
      current: true
    },
    {
      role: 'Freelance Web Developer',
      company: 'SRKV PTC',
      type: 'Part-time',
      period: '2024 - Present',
      location: 'Freelance',
      description: 'Delivering fully responsive client websites with modern design and functionality.',
      achievements: [
        'Completed multiple client projects successfully',
        'Maintained 100% client satisfaction rate',
        'Delivered projects on time and within budget'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Shadow Fox',
      type: 'Internship',
      period: 'Dec 2024 - Jan 2025',
      location: 'Remote',
      description: 'Focused on UI enhancements and accessibility improvements for web applications.',
      achievements: [
        'Enhanced user interface components',
        'Improved web accessibility standards',
        'Collaborated with design team on UX improvements'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Appin Technologies',
      type: 'Internship',
      period: 'Jun 2023 - Aug 2023',
      location: 'Coimbatore',
      description: 'Frontend development using React and Tailwind CSS with focus on bug fixing and feature implementation.',
      achievements: [
        'Developed responsive frontend components',
        'Fixed critical bugs and improved code quality',
        'Learned industry best practices and workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Work <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey showcasing growth, learning, and contributions across various organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-cyan-500 rounded-full shadow-lg z-10">
                  <div className={`w-full h-full rounded-full ${exp.current ? 'bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse' : 'bg-cyan-100'}`}></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                        <div className="flex items-center space-x-2 text-cyan-600 font-medium">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <ArrowRight size={12} className="text-cyan-500 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200/50">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Career Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">2+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-gray-600 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;