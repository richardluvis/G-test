import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project, PortfolioMode } from '../types';

interface ProjectCardProps {
  project: Project;
  mode: PortfolioMode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, mode }) => {
  const isDev = mode === PortfolioMode.DEVELOPER;
  const accentColor = isDev ? 'text-blue-400 group-hover:text-blue-300' : 'text-emerald-400 group-hover:text-emerald-300';
  const borderColor = isDev ? 'hover:border-blue-500/50' : 'hover:border-emerald-500/50';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-colors duration-300 ${borderColor}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-2 ${isDev ? 'text-blue-50' : 'text-emerald-50'}`}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-mono rounded bg-slate-700/50 text-slate-300 border border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700">
          <div className="flex gap-4">
             {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
             )}
             {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
             )}
          </div>
          <button className={`text-sm font-semibold flex items-center gap-1 ${accentColor} transition-colors`}>
            Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};