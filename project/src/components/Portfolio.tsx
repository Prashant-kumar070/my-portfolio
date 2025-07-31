import React, { useState, useRef, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import { Project } from '../types/project';

// --- Responsive Utility Hook: Detects mobile based on window.width < 768 ---
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

interface PortfolioProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => void;
  onRemoveProject: (id: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects, onAddProject, onRemoveProject }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: 'Web Development'
  });

  const isMobile = useIsMobile();

  // Keeps only one preview open (by ID, only one at a time is possible).
  // Scroll into view when preview opens on mobile.
  useEffect(() => {
    if (isMobile && imageRef.current && activePreviewId) {
      imageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activePreviewId, isMobile]);

  // Prevent background scroll when modal is open (desktop only)
  useEffect(() => {
    if (!isMobile && activePreviewId) {
      document.body.style.overflow = 'hidden';
      // Scroll to top to ensure consistent positioning
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePreviewId, isMobile]);

  // Find project for modal image
  const selectedProject = projects.find(p => p.id === activePreviewId);

  // --- Form stuff (unchanged) ---
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.image) {
      onAddProject(formData);
      setFormData({ name: '', description: '', image: '', category: 'Web Development' });
      setShowAddForm(false);
    }
  };

  // --- MAIN RENDER ---
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
        {/* Optional Add Project Button */}
      </div>

      {/* Modal overlay preview for desktop/tablet (md+) - FULLY FIXED VERSION */}
      {activePreviewId && selectedProject && !isMobile && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50">
          <div 
            className="absolute inset-0 flex items-center justify-center p-4"
            style={{ 
              position: 'fixed',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="relative bg-gray-900 rounded-xl p-4 sm:p-6 max-w-xl w-full mx-4">
              <button
                onClick={() => setActivePreviewId(null)}
                className="absolute top-4 right-4 text-white hover:text-red-500 z-10 bg-black/30 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.image}
                alt="Preview"
                className="w-full max-w-full h-auto rounded-xl max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add Project Modal (unchanged, you can fill it in) */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-gray-600/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ...add form fields here as needed... */}
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            {/* Inline preview for mobile only, above the card */}
            {activePreviewId === project.id && isMobile && (
              <div
                ref={imageRef}
                className="w-full flex justify-center py-3 col-span-1"
              >
                <div className="relative bg-gray-900 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md">
                  <button
                    className="absolute top-2 right-2 text-white hover:text-red-500 bg-black/30 rounded-full p-1"
                    onClick={() => setActivePreviewId(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img
                    src={project.image}
                    alt="Preview"
                    className="w-full max-w-full h-auto rounded-lg max-h-96 object-contain"
                  />
                </div>
              </div>
            )}

            {/* Project Card */}
            <div className="bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden hover:transform hover:scale-105 hover:border-orange-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/10">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Desktop hover overlay */}
                {!isMobile && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActivePreviewId(project.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Mobile always-visible eye icon */}
                {isMobile && (
                  <button
                    onClick={() => setActivePreviewId(project.id)}
                    className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                <h3 className="text-l font-semibold text-white mb-3">{project.appname}</h3>
                <p className="text-gray-400">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-colors shadow hover:shadow-md mt-2"
                  >
                    Visit
                  </a>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;