import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Globe, Briefcase, User, FileText, ChevronDown, Server } from 'lucide-react';
import { ToggleButton } from './components/ToggleButton';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ContactModal } from './components/ContactModal';
import { 
  PortfolioMode, 
} from './types';
import { 
  DEV_PROJECTS, 
  SYS_PROJECTS, 
  DEV_SKILLS, 
  SYS_SKILLS, 
  DEV_EXPERIENCE, 
  SYS_EXPERIENCE 
} from './constants';

const App: React.FC = () => {
  const [mode, setMode] = useState<PortfolioMode>(PortfolioMode.DEVELOPER);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Derived state based on mode
  const isDev = mode === PortfolioMode.DEVELOPER;
  const currentProjects = isDev ? DEV_PROJECTS : SYS_PROJECTS;
  const currentSkills = isDev ? DEV_SKILLS : SYS_SKILLS;
  const currentExperience = isDev ? DEV_EXPERIENCE : SYS_EXPERIENCE;

  // Colors based on mode
  const accentText = isDev ? 'text-blue-500' : 'text-emerald-500';
  const accentBorder = isDev ? 'border-blue-500' : 'border-emerald-500';
  const glowColor = isDev ? 'shadow-blue-500/20' : 'shadow-emerald-500/20';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-slate-700 selection:text-white">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isDev ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
              {isDev ? <Terminal size={24} /> : <Cpu size={24} />}
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              Richard<span className={accentText}>Dev</span>
            </span>
          </div>

          <ToggleButton mode={mode} setMode={setMode} />

          <button 
            onClick={() => setIsContactOpen(true)}
            className={`hidden md:flex px-6 py-2 rounded-full border ${accentBorder} text-sm font-semibold hover:bg-slate-800 transition-colors`}
          >
            Contact Me
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="pt-20">
        <Section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 ${isDev ? 'bg-blue-600' : 'bg-emerald-600'}`} />

          <motion.div
            key={mode} // Triggers animation on mode switch
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm mb-6">
              <span className={`w-2 h-2 rounded-full ${isDev ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
              Available for Hire
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {isDev ? 'Building Digital' : 'Architecting Robust'} <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDev ? 'from-blue-400 to-cyan-300' : 'from-emerald-400 to-teal-300'}`}>
                {isDev ? 'Experiences' : 'Infrastructures'}
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {isDev 
                ? "Specialized in front-end development, with strong experience using modern technologies such as React, Next.js, Node.js, Vite, and a wide range of component libraries and UI frameworks. I build high-performance, responsive, and accessible web applications following best practices in software architecture, component modularity, and performance optimization. My approach focuses on creating scalable interfaces with a high level of detail, ensuring maintainability, usability, and long-term product growth for businesses. "
                : "Expert in Linux systems, Cloud architectures (AWS/Azure), and automated DevOps pipelines. I ensure 99.99% reliability and security."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-3 rounded-full font-semibold text-white shadow-lg shadow-${isDev ? 'blue' : 'emerald'}-500/20 transition-transform hover:scale-105 ${isDev ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
              >
                View {isDev ? 'Portfolio' : 'Projects'}
              </button>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3 rounded-full font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </Section>

        {/* --- SKILLS SECTION --- */}
        <Section id="skills" className="bg-slate-900/50">
          <div className="flex items-center gap-3 mb-12">
            <Database className={isDev ? 'text-blue-500' : 'text-emerald-500'} />
            <h2 className="text-3xl font-bold">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='wait'>
              {currentSkills.map((skill, index) => (
                <motion.div 
                  key={`${mode}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className={`text-sm font-mono ${accentText}`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${isDev ? 'bg-blue-500' : 'bg-emerald-500'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Section>

        {/* --- EXPERIENCE SECTION --- */}
        <Section id="experience">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className={isDev ? 'text-blue-500' : 'text-emerald-500'} />
            <h2 className="text-3xl font-bold">Career Timeline</h2>
          </div>

          <div className="relative border-l border-slate-800 ml-3 space-y-12">
             {currentExperience.map((exp, index) => (
               <motion.div 
                 key={exp.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="pl-8 relative"
               >
                 {/* Dot on timeline */}
                 <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${isDev ? 'bg-blue-500' : 'bg-emerald-500'} ring-4 ring-slate-900`} />
                 
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                   <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                   <span className="text-sm font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">{exp.period}</span>
                 </div>
                 <h4 className={`text-lg mb-4 ${accentText}`}>{exp.company}</h4>
                 <ul className="list-disc list-inside text-slate-400 space-y-1">
                   {exp.description.map((item, i) => (
                     <li key={i}>{item}</li>
                   ))}
                 </ul>
               </motion.div>
             ))}
          </div>
        </Section>

        {/* --- PROJECTS SECTION --- */}
        <Section id="projects" className="bg-slate-800/20">
          <div className="flex items-center gap-3 mb-12">
            {isDev ? <Globe className="text-blue-500" /> : <Server className="text-emerald-500" />}
            <h2 className="text-3xl font-bold">Products & Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='wait'>
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} mode={mode} />
              ))}
            </AnimatePresence>
          </div>
        </Section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Richrard Lopez</h3>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} {isDev ? 'All rights reserved' : 'Powering the Infrastructure'}.
            </p>
          </div>
          
          <div className="flex gap-6">
             <button onClick={() => setIsContactOpen(true)} className="text-slate-400 hover:text-white transition-colors text-sm">Contact</button>
             <a href="https://linkedin.com/in/richadlopez" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">LinkedIn</a>
             <a href="https://github.com/richardluvis" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </footer>

      {/* --- MODALS --- */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        mode={mode}
      />
    </div>
  );
};

export default App;