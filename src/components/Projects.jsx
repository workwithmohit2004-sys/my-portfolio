import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Eye, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Newspaper, 
  CloudSun, 
  Gamepad2,
  X,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Visual preview illustration for each project to serve as polished screenshot placeholder
const ProjectMockup = ({ projectId }) => {
  switch (projectId) {
    case 'ecommerce-platform':
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0B0F19] to-[#121B2E] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
              shop-store.mohit.dev
            </span>
            <ShoppingBag className="w-3.5 h-3.5 text-indigo-400" />
          </div>

          {/* Mock UI Showcase */}
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="bg-[#182338] p-2.5 rounded-lg border border-white/5 flex flex-col items-center">
              <div className="w-10 h-10 rounded-md bg-indigo-500/20 mb-2 flex items-center justify-center text-indigo-400 font-bold text-xs">
                ITEM
              </div>
              <div className="w-12 h-2 bg-slate-600 rounded mb-1"></div>
              <div className="w-8 h-2 bg-cyan-400/70 rounded"></div>
            </div>
            <div className="bg-[#182338] p-2.5 rounded-lg border border-indigo-500/30 flex flex-col items-center shadow-lg shadow-indigo-500/10 scale-105">
              <div className="w-10 h-10 rounded-md bg-cyan-500/20 mb-2 flex items-center justify-center text-cyan-400 font-bold text-xs">
                HOT
              </div>
              <div className="w-12 h-2 bg-slate-500 rounded mb-1"></div>
              <div className="w-8 h-2 bg-indigo-400 rounded"></div>
            </div>
            <div className="bg-[#182338] p-2.5 rounded-lg border border-white/5 flex flex-col items-center">
              <div className="w-10 h-10 rounded-md bg-blue-500/20 mb-2 flex items-center justify-center text-blue-400 font-bold text-xs">
                PROMO
              </div>
              <div className="w-12 h-2 bg-slate-600 rounded mb-1"></div>
              <div className="w-8 h-2 bg-emerald-400/70 rounded"></div>
            </div>
          </div>

          {/* Bottom mock bar */}
          <div className="flex items-center justify-between text-[10px] text-text-muted font-mono bg-[#0d1424] px-2 py-1 rounded">
            <span>🛒 React Cart Engine (Stateful)</span>
            <span className="text-cyan-400">Mobile Responsive</span>
          </div>
        </div>
      );

    case 'news-platform':
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0B131A] to-[#0F202B] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
              news-pulse.mohit.dev
            </span>
            <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex gap-2">
              <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">Tech</span>
              <span className="text-[9px] bg-white/5 text-slate-400 px-2 py-0.5 rounded font-mono">Business</span>
              <span className="text-[9px] bg-white/5 text-slate-400 px-2 py-0.5 rounded font-mono">Science</span>
            </div>
            <div className="bg-[#152735] p-2.5 rounded-lg border border-cyan-500/20">
              <div className="w-3/4 h-2.5 bg-cyan-200/90 rounded mb-1.5"></div>
              <div className="w-full h-2 bg-slate-500/60 rounded mb-1"></div>
              <div className="w-4/5 h-2 bg-slate-500/40 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-muted font-mono bg-[#0b1720] px-2 py-1 rounded">
            <span>⚡ REST API Dynamic Fetch</span>
            <span className="text-cyan-400">Live Articles</span>
          </div>
        </div>
      );

    case 'weather-platform':
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0c1224] to-[#141b36] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
              sky-cast.mohit.dev
            </span>
            <CloudSun className="w-3.5 h-3.5 text-sky-400" />
          </div>

          <div className="flex items-center justify-between my-auto px-2">
            <div>
              <p className="text-2xl font-bold text-white font-mono">28°C</p>
              <p className="text-xs text-sky-300">Clear Sky • Meerut</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20 animate-pulse">
              <CloudSun className="w-8 h-8" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-muted font-mono bg-[#0e162d] px-2 py-1 rounded">
            <span>💧 Humidity: 42%</span>
            <span>💨 Wind: 14 km/h</span>
          </div>
        </div>
      );

    case 'rps-game':
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#130d24] to-[#1c1236] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
              rps-arena.mohit.dev
            </span>
            <Gamepad2 className="w-3.5 h-3.5 text-violet-400" />
          </div>

          <div className="flex items-center justify-around my-auto">
            <div className="text-center">
              <span className="text-2xl">✊</span>
              <p className="text-[10px] text-slate-300 font-mono mt-1">Player: 3</p>
            </div>
            <span className="text-xs font-bold text-violet-400 font-mono">VS</span>
            <div className="text-center">
              <span className="text-2xl">🖐️</span>
              <p className="text-[10px] text-slate-300 font-mono mt-1">CPU: 2</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-muted font-mono bg-[#160f2b] px-2 py-1 rounded">
            <span>🏆 Game Score Tracker</span>
            <span className="text-violet-400">Pure JS Logic</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDemo = (project) => {
    // Check if the URL is an example placeholder or real
    if (project.demoUrl.includes("example.com")) {
      setSelectedProject(project);
    } else {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenGithub = (project) => {
    if (project.githubUrl.includes("example.com") || project.githubUrl.includes("mohitsharma-dev/")) {
      setSelectedProject(project);
    } else {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-2">
            Selected frontend applications demonstrating responsive layout design, API handling, and interactive user experiences.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-glow-card"
            >
              <div>
                {/* Project Visual Screenshot Area */}
                <div className="relative border-b border-white/5 overflow-hidden">
                  <ProjectMockup projectId={project.id} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#080B14]/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo and GitHub */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                <button
                  onClick={() => handleOpenDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 shadow-sm shadow-indigo-600/20 transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </button>

                <button
                  onClick={() => handleOpenGithub(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#101827] hover:bg-[#1e293b] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  title="View Details"
                  className="p-2.5 rounded-xl text-text-muted hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Informative placeholder helper notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted font-mono">
            ℹ️ All GitHub repositories and Live Demo links are easily editable in <code className="text-cyan-400">src/data/portfolioData.js</code>.
          </p>
        </div>

      </div>

      {/* Interactive Project Details & Placeholder Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-lg w-full rounded-2xl border border-white/10 p-6 sm:p-7 relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {selectedProject.category}
              </span>
              <span className="text-xs text-text-muted font-mono">{selectedProject.stats}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400">Key Features:</h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#080B14] p-3.5 rounded-xl border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-1">
                <Code className="w-3.5 h-3.5 text-indigo-400" />
                <span>Links Placeholder Configuration:</span>
              </div>
              <p className="text-[11px] text-text-muted font-mono truncate">
                Live URL: <span className="text-cyan-300">{selectedProject.demoUrl}</span>
              </p>
              <p className="text-[11px] text-text-muted font-mono truncate mt-0.5">
                GitHub: <span className="text-indigo-300">{selectedProject.githubUrl}</span>
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Visit Demo Link
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Visit Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

