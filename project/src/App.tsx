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
      name: 'E-Commerce Platform',
      appname: 'Actively Black',
      description: 'Modern e-commerce solution with APIs in Laravel and third-party APIS',
      image: '/images/ab-app.jpg',
      category: 'Mobile Development'
    },
    {
      id: '2',
      name: 'Learning Platform',
      appname: 'Manasprint',
      description: 'An learning platform for UPSC aspirents , they can practice for their exams using so many activites in APP. Bulit in Laravel',
      image: '/images/manas.jpg',
      category: 'Mobile Development'
    },
    {
      id: '3',
      name: 'AI Learning Platform',
      appname: 'AI Study Buddy',
      description: 'A platform for students (from standard 1st to 12th) to practice their subjects using AI activities',
      image: '/images/ai-study-buddy.png',
      category: 'AI Based Apps',
      // link:"https://ai-study-buddyy.netlify.app/"
    },
    {
      id: '4',
      name: 'AI Image Generator ',
      appname: 'Magic AI',
      description: 'Magic AI is an AI-powered image generation tool built with Core PHP. Users can input text prompts to generate unique images.',
      image: '/images/ai-chat.png',
      category: 'AI Based Apps'
    },
    {
      id: '5',
      name: 'News Update',
      appname: 'News Aggrigate',
      description: 'News Aggregate is a dynamic web application that fetches and displays the latest news from various sources on a daily basis. Built with Laravel.',
      image: '/images/newsapp.png',
      category: 'Web Development'
    },
    {
      id: '6',
      name: 'Hospital platform',
      appname: 'Health Wealth',
      description: 'Health Wealth is a hospital management platform developed using Laravel, HTML, CSS, and JavaScript. It allows patients to book appointments, view doctor profiles, and access health services online.',
      image: '/images/healthwealth.png',
      category: 'Web Development'
    },
    {
      id: '7',
      name: 'E-Commerce Platform',
      appname: 'Buy Books',
      description: 'Modern e-commerce solution with Laravel and vite.js',
      image: '/images/book-ecommerce.png',
      category: 'Web Development'
    },
    {
      id: '8',
      name: 'Chat Application',
      appname: 'Chat App',
      description: 'A real-time chat application built with Laravel and Vue.js that enables users to send instant messages.',
      image: '/images/chatapp.png',
      category: 'Web Development'
    },
    {
      id: '9',
      name: 'Service-Based Platform',
      appname: 'Copyartwork',
      description: 'Copyartwork is a custom service platform where users can upload images and request professional editing services with Core PHP',
      image: '/images/copyartwork.png',
      category: 'Web Development'
    },
    
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