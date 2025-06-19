import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Project } from './types/project';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'AI Study Buddy',
      description: 'A platform for students (from standard 1st to 12th) to practice their subjects using AI activities',
      image: '/images/ai-study-buddy.png',
      category: 'Web Development'
    },
    {
      id: '2',
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development'
    },
    {
      id: '3',
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development'
    },
    {
      id: '4',
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development'
    },
    {
      id: '5',
      name: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development'
    },
    {
      id: '6',
      name: 'Portfolio Website',
      description: 'Responsive portfolio design with modern aesthetics',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Design'
    },
    {
      id: '7',
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application for iOS and Android',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Apps'
    }
  ]);

  const handleAddProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString()
    };
    setProjects([...projects, newProject]);
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return (
          <Portfolio
            projects={projects}
            onAddProject={handleAddProject}
            onRemoveProject={handleRemoveProject}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="ml-72 p-6 flex justify-center">
        <div className="w-full max-w-5xl bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 relative overflow-hidden">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-3xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 rounded-3xl blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;