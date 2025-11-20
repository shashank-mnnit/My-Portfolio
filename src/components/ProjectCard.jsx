import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-secondary rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(project)}
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            <span className="text-gray-500 font-medium text-lg z-10">{project.title}</span>
          </>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
          </div>
          <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
          {project.overview}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
