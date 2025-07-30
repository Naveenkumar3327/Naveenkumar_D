import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Switching & Routing & Wireless Essentials',
      issuer: 'Cisco',
      date: '2024',
      icon: '🌐',
      category: 'Networking'
    },
    {
      title: 'Enterprise Network Security',
      issuer: 'Cisco',
      date: '2024',
      icon: '🔒',
      category: 'Security'
    },
    {
      title: 'Introduction to Networks',
      issuer: 'Cisco',
      date: '2023',
      icon: '📡',
      category: 'Networking'
    },
    {
      title: 'MERN Stack Development',
      issuer: 'Simplilearn',
      date: '2023',
      icon: '⚛️',
      category: 'Development'
    },
    {
      title: 'Java Programming',
      issuer: 'Udemy',
      date: '2023',
      icon: '☕',
      category: 'Programming'
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS',
      date: '2023',
      icon: '☁️',
      category: 'Cloud'
    }
  ];

  const categories = ['All', 'Networking', 'Development', 'Security', 'Programming', 'Cloud'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise across various technologies and domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building size={14} />
                  <span className="text-sm">{cert.issuer}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                    {cert.category}
                  </span>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300 group-hover:bg-cyan-100">
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-cyan-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Certification Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {certifications.length}
              </div>
              <div className="text-gray-600 text-sm">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4
              </div>
              <div className="text-gray-600 text-sm">Tech Domains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                3
              </div>
              <div className="text-gray-600 text-sm">Industry Leaders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                2024
              </div>
              <div className="text-gray-600 text-sm">Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;