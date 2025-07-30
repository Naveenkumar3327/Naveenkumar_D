import React from 'react';
import { Code, Palette, Database, Server, Smartphone, Github as Git } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-cyan-500 to-blue-500',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-blue-500 to-purple-500',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase']
    },
    {
      icon: Palette,
      title: 'Design',
      color: 'from-purple-500 to-pink-500',
      skills: ['UI/UX Design', 'Figma', 'Prototyping', 'Responsive Design']
    },
    {
      icon: Git,
      title: 'Tools',
      color: 'from-green-500 to-teal-500',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Netlify', 'Vercel']
    }
  ];

  const allSkills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Tailwind CSS', 'Next.js', 'Firebase', 'Git & GitHub',
    'Postman', 'REST APIs', 'UI/UX Design', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Skills Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Technical Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-medium hover:from-cyan-200 hover:to-blue-200 transform hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Levels Visualization */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Proficiency Levels</h3>
            <div className="space-y-4">
              {[
                { skill: 'React.js', level: 90 },
                { skill: 'JavaScript', level: 85 },
                { skill: 'Node.js', level: 80 },
                { skill: 'UI/UX Design', level: 85 },
                { skill: 'MongoDB', level: 75 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200/50">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Currently Learning</h3>
            <div className="space-y-3">
              {['TypeScript', 'GraphQL', 'Docker', 'AWS Cloud Services', 'React Native'].map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;