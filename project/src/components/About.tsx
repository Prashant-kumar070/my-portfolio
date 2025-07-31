import React from 'react';
import { Code, Smartphone, Camera, Server,  Globe } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Working closely with frontend teams to integrate modern, responsive UIs using HTML, CSS, and JavaScript.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps (Backend)',
      description: 'Developing backend architectures for Android/iOS apps including features like subscriptions, authentication, and real-time data with tools like RevenueCat and Supabase.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'AI-Powered Tools',
      description: 'Building tools that use AI models to deliver intelligent, prompt-based user experiences—such as chatbots, image generators, and apps (based on AI).'

    },
    {
      icon: <Server className="w-8 h-8" />,
      title: '🛠️ Server Management',
      description: 'Managing and deploying web applications using Apache and Nginx servers with focus on performance, security, and uptime.'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-gray-700/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/30">
          <p className="text-gray-300 leading-relaxed mb-6">
          I'm a Backend Developer with having 3 years of hands-on experience in PHP, Laravel and Wordpress.
           I specialize in building robust, scalable, and efficient web applications, managing servers, and integrating third-party APIs.
          </p>
          <p className="text-gray-300 leading-relaxed">
          My goal is to deliver high-performance solutions that are not only functional but also intuitive and user-friendly. I'm passionate about learning new technologies and love working on personal projects that enhance my skillset. 
          I’ve contributed to AI-powered learning platforms, AI-image generators and bot agents, and healthcare systems—all built to solve real-world problems creatively and efficiently.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="text-orange-500 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;