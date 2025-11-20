import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-secondary w-full max-w-4xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
             {project.image ? (
               <img 
                 src={project.image} 
                 alt={project.title} 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover object-top"
               />
             ) : (
               <h2 className="text-3xl font-bold text-white/20">{project.title}</h2>
             )}
          </div>

          <div 
            className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar"
            data-lenis-prevent
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-primary text-lg">{project.type}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-bold text-white mb-3">Problem Statement</h3>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-3">Approach & Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{project.approach}</p>
                </section>

                {project.features && project.features.length > 0 && (
                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Details</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">Role</span>
                      <span className="text-white">{project.role}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">Tools</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {project.uxLaws && project.uxLaws.length > 0 && (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">UX Laws Applied</h4>
                    <ul className="space-y-3">
                      {project.uxLaws.map((law, idx) => (
                        <li key={idx}>
                          <span className="block text-primary font-medium text-sm">{law.name}</span>
                          <span className="text-xs text-gray-400">{law.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Outcome</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{project.outcome}</p>
              
              {project.prototypeDesc && (
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h4 className="text-primary font-bold mb-2">Interactive Prototype</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.prototypeDesc}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
                    >
                      View Prototype
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
