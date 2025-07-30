import React from 'react';
import { Trophy, Award, Star, Calendar, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '2nd Place - Paper Presentation',
      event: 'Sankara Inter Polytechnic Competition',
      year: '2023',
      position: '2nd',
      icon: '🥈',
      color: 'from-gray-400 to-gray-600',
      participants: '50+ Teams',
      description: 'Presented innovative web development concepts and secured second position among top engineering colleges.'
    },
    {
      title: '3rd Place - Project Expo',
      event: 'SRMV College Project Exhibition',
      year: '2024',
      position: '3rd',
      icon: '🥉',
      color: 'from-orange-400 to-orange-600',
      participants: '40+ Projects',
      description: 'Showcased MERN stack project with excellent UI/UX design and functionality.'
    },
    {
      title: '4th Place - Paper Presentation',
      event: 'KPR State-Level Competition',
      year: '2024',
      position: '4th',
      icon: '🏅',
      color: 'from-blue-400 to-blue-600',
      participants: '100+ Participants',
      description: 'Demonstrated advanced full-stack development techniques at state level competition.'
    },
    {
      title: 'Participant - ZeroDay Ideathon',
      event: 'SECE Innovation Challenge',
      year: '2025',
      position: 'Participant',
      icon: '🎉',
      color: 'from-purple-400 to-purple-600',
      participants: '200+ Innovators',
      description: 'Participated in innovative ideathon focusing on emerging technologies and solutions.'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments that highlight my dedication to excellence in technology and innovation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="text-right">
                  <div className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm rounded-full font-medium`}>
                    {achievement.position}
                  </div>
                  <div className="flex items-center justify-end space-x-1 text-gray-500 text-xs mt-1">
                    <Calendar size={12} />
                    <span>{achievement.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                  {achievement.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-cyan-600 font-medium">
                  <Award size={16} />
                  <span className="text-sm">{achievement.event}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                  <Users size={12} />
                  <span>{achievement.participants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
              <Trophy className="text-yellow-500" size={24} />
              <span>Competition Stats</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">4</div>
                <div className="text-gray-600 text-sm">Total Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">3</div>
                <div className="text-gray-600 text-sm">Top 5 Finishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">2</div>
                <div className="text-gray-600 text-sm">State Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">100%</div>
                <div className="text-gray-600 text-sm">Participation Rate</div>
              </div>
            </div>
          </div>

          {/* Recognition Card */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
              <Star className="text-yellow-500" size={24} />
              <span>Recognition</span>
            </h3>
            <div className="space-y-4">
              {[
                'Consistent Top Performer in Technical Competitions',
                'Recognized for Innovation in Web Development',
                'Active Participant in Tech Community Events',
                'Mentor and Guide for Junior Developers'
              ].map((recognition, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{recognition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivation Quote */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 max-w-2xl mx-auto">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Success is not just about winning, but about continuous learning, growth, and the impact we make through our work."
            </blockquote>
            <div className="text-cyan-600 font-semibold">- Naveenkumar D</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;