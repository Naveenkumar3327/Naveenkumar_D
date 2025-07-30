import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* My Story */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a passionate Full Stack Developer and UI/UX Designer, I combine technical expertise with creative vision
                to build exceptional digital experiences. My journey in web development started with curiosity and has evolved
                into a deep commitment to crafting solutions that make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in the MERN stack and have hands-on experience in creating responsive, user-centric applications.
                My approach focuses on clean code, intuitive design, and seamless functionality that serves both users and business objectives.
              </p>
            </div>

            {/* 🎓 Education Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-600">Sri Eshwar College of Engineering</h4>
                  <p className="text-sm text-gray-700">2024 - 2027</p>
                  <p className="text-sm text-gray-600">Bachelor of Engineering (CSE)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-600">Sri Ramakrishna Mission Vidyalaya Polytechnic College</h4>
                  <p className="text-sm text-gray-700">2021 - 2024</p>
                  <p className="text-sm text-gray-600">Diploma in Information Technology</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-600">Sri Ramakrishna Matriculation Higher Secondary School</h4>
                  <p className="text-sm text-gray-700">SSLC - 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* What I Value */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">What I Value</h3>
              <div className="space-y-4">
                {[
                  { title: 'Clean Code', desc: 'Writing maintainable, scalable, and efficient code' },
                  { title: 'User Experience', desc: 'Creating intuitive and delightful user interfaces' },
                  { title: 'Continuous Learning', desc: 'Staying updated with latest technologies and trends' },
                  { title: 'Collaboration', desc: 'Working effectively with teams to achieve common goals' },
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200/50">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">500+</div>
                  <div className="text-sm text-gray-600">Commits This Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Learning Mode</div>
                </div>
              </div>
            </div>

            {/* 📬 Contact Info - moved under Fun Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu - 641031' },
                { icon: Phone, label: 'Phone', value: '+91 9944073151' },
                { icon: Mail, label: 'Email', value: 'naveen1127kumar@gmail.com' },
                { icon: Calendar, label: 'Experience', value: '2+ Years' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-100 rounded-lg">
                        <Icon size={16} className="text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-sm font-medium text-gray-800">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
