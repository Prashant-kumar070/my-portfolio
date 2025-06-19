import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Gitlab, Twitter } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="w-72 bg-gray-900/95 backdrop-blur-sm min-h-screen p-6 fixed left-0 top-0 z-20 border-r border-gray-700/50">
    <div className="mb-8">
      <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg shadow-orange-500/30 mx-auto mb-4">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />

        </div>
        <h1 className="text-xl font-bold text-white mb-2">Prashant Kumar</h1>
        <p className="text-gray-400 text-sm">Backend Developer</p>
        <p className="text-gray-400 text-sm">PHP | Laravel | Wordpress</p>
      </div>

      <div className="mb-8 space-y-3">
        <div className="flex items-center text-gray-300">
          <Mail className="w-4 h-4 mr-3 text-orange-500" />
          <span className="text-xs">prashantkumarr9837@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Phone className="w-4 h-4 mr-3 text-orange-500" />
          <span className="text-xs">+91-7037729841</span>
        </div>
        <div className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-3 text-orange-500" />
          <span className="text-xs">Ghaziabad , Uttar Pradesh</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex space-x-3">
          <a href="https://github.com/Prashant-kumar070" target="_blank" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:shadow-lg hover:shadow-orange-500/20">
            <Github className="w-4 h-4 text-gray-400 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/prashant-kumar-740568224/" target="_blank" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:shadow-lg hover:shadow-orange-500/20">
            <Linkedin className="w-4 h-4 text-gray-400 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://gitlab.com/prashant_kumar0" target="_blank" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover:shadow-lg hover:shadow-orange-500/20">
            <Gitlab className="w-4 h-4 text-gray-400 hover:text-orange-500 transition-colors" />
          </a>
        </div>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm ${
                  activeSection === item.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-orange-500/10'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;