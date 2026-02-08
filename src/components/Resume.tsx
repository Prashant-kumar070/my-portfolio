import React from 'react';
import { Calendar, MapPin, Download } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (Computer Science)',
      school: 'Sanskar Educational Group',
      location: 'Ghaziabad, Uttar Pradesh, India',
      period: '2019 - 2023',
      description: 'Completed B.Tech in Computer Science with hands-on experience in academic projects and coursework.',
    },
    {
      degree: 'Intermediate',
      school: 'Vip Inter College',
      location: 'Pilkhuwa, Uttar Pradesh, India',
      period: '2017 - 2019',
      description: 'Completed Intermediate with a strong foundation in science and mathematics. Focused on Mathematics, Physics, and Chemistry, which built the analytical and logical thinking required for engineering.',
    }
  ];

  const experience = [
    {
      position: 'PHP / Laravel Developer',
      company: 'Webnyxa Technologies',
      location: 'Noida',
      period: 'Sep 2023 – Present',
      description: 'Built and deployed interactive web applications using Laravel. Integrated third-party APIs and optimized performance. Collaborated with frontend teams for smooth UI/UX integration.'
    },
    {
      position: 'Associate Software Engineer ',
      company: 'Knocial India Limited',
      location: 'Gurgaon',
      period: 'Oct 2022 – Aug 2023',
      description: 'Completed in-depth training in Laravel and backend development and joined as full-time later. Worked on internal tools to improve team productivity. Contributed to multiple company projects under guidance.'
    }
  ];

const skills = [
  { name: 'PHP', level: 95 },
  { name: 'Laravel', level: 95 },
  { name: 'Wordpress', level: 95 },
  { name: 'Node.Js', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'MySQL', level: 85 },
  { name: 'MongoDB', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Supabase', level: 75 },
  { name: 'Docker', level: 85 },
  { name: 'Git ', level: 95 },
  { name: 'BitBucket / GitHub / GitLab', level: 90 },
  { name: 'Apache / Nginx', level: 80 }
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