import React from 'react';
import { Calendar, MapPin, Download } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      location: 'New York, USA',
      period: '2018 - 2022',
      description: 'Relevant coursework in software engineering, web development, and database management.'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'Coding Bootcamp',
      location: 'Online',
      period: '2022',
      description: 'Intensive program covering modern web technologies including React, Node.js, and MongoDB.'
    }
  ];

  const experience = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, USA',
      period: '2023 - Present',
      description: 'Lead development of complex web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.'
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'New York, USA',
      period: '2022 - 2023',
      description: 'Developed responsive web applications and collaborated with designers to create engaging user experiences. Worked with React, TypeScript, and modern CSS frameworks.'
    }
  ];

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 }
  ];

  return (
    <div className="space-y-8">
      {/* Download Resume Button */}
      <div className="mb-4">
        <a
          href="/Prashant's_Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </div>
      <h2 className="text-4xl font-bold text-white mb-8">Resume</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="flex items-center gap-2 text-orange-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.period}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.degree}</h4>
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{item.school}, {item.location}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div key={index} className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="flex items-center gap-2 text-orange-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.period}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.position}</h4>
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{item.company}, {item.location}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-600/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 shadow-sm shadow-orange-500/30"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;