// UPDATE to Portfolio.tsx

import React, { useState } from 'react';
import { Plus, X, Eye } from 'lucide-react';
import { Project } from '../types/project';

interface PortfolioProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => void;
  onRemoveProject: (id: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects, onAddProject, onRemoveProject }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: 'Web Development'
  });

  const categories = ['Web Development', 'Web Design', 'Mobile Apps', 'Photography', 'UI/UX Design'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.image) {
      onAddProject(formData);
      setFormData({ name: '', description: '', image: '', category: 'Web Development' });
      setShowAddForm(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
        {/* <button
          onClick={() => setShowAddForm(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button> */}
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-gray-600/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              {/* <h3 className="text-xl font-bold text-white">Add New Project</h3> */}
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* form fields unchanged */}
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden hover:transform hover:scale-105 hover:border-orange-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/10">
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                </button>
               
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-orange-500 font-medium">{project.category}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
              <h3 className="text-l font-semibold text-white mb-3">{project.appname}</h3>
              <p className="text-gray-400">{project.description}</p>
              {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-colors shadow hover:shadow-md"
                    >
                      Visit
                    </a>
                  )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-xl p-6 max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-xl max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;