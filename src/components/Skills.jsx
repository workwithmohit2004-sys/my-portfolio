import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Terminal, 
  Wrench, 
  Users, 
  FileCode, 
  Palette, 
  FileJson, 
  Atom, 
  Wind, 
  Server, 
  Laptop, 
  GitBranch,
  Brain,
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'technical', label: 'Tech Stack & Frameworks' },
    { id: 'learning', label: 'Currently Learning' },
    { id: 'tools', label: 'Tools & Workflow' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-2">
            Practical skills honed through hands-on project development and dedicated continuous study.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/25 border border-transparent'
                  : 'bg-[#101827]/70 text-text-muted hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Grids based on Active Tab or All */}
        <div className="space-y-12">
          
          {/* 1. Programming Languages & Frameworks */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Languages & Frameworks
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* HTML5 */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <span className="font-mono font-bold text-sm">HTML5</span>
                    </div>
                    <span className="text-[11px] font-mono text-orange-400/80 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                      Markup
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">HTML5</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">Semantic HTML, accessible structures, modern web standards.</p>
                </div>

                {/* CSS3 */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <span className="font-mono font-bold text-sm">CSS3</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400/80 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                      Styling
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">CSS3</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">Flexbox, CSS Grid, responsive design, transitions & keyframes.</p>
                </div>

                {/* JavaScript */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <span className="font-mono font-bold text-sm">JS</span>
                    </div>
                    <span className="text-[11px] font-mono text-yellow-400/80 bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">
                      Language
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">JavaScript (ES6+)</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">DOM manipulation, promises, async/await, fetch API, array methods.</p>
                </div>

                {/* React.js */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-cyan-500/20 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Atom className="w-6 h-6 animate-spin-slow" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                      Core Specialization
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">React.js</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">Functional components, React Hooks (useState, useEffect), state, JSX, modular structure.</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. Currently Learning / Roadmap */}
          {(activeTab === 'all' || activeTab === 'learning') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Currently Learning & Exploring
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Node.js Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 border border-emerald-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Server className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          Node.js
                        </h4>
                        <p className="text-xs text-text-muted">Backend Runtime Environment</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Actively studying server-side JavaScript, asynchronous operations, event-driven architecture, and building foundational server logic to bridge towards Full-Stack development.
                  </p>
                </div>

                {/* Full-Stack Road Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                          Backend & API Foundations
                        </h4>
                        <p className="text-xs text-text-muted">REST APIs & Server Concepts</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                      Next Milestone
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Learning API creation, JSON data pipelines, backend route handling, and database integration fundamentals to complement frontend mastery.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. Developer Tools & Workflow */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Wrench className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Tools & Development Environment
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* VS Code */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        Visual Studio Code
                      </h4>
                      <p className="text-[11px] text-text-muted">Primary Code Editor</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Proficient with debugging tools, snippets, ESLint, Prettier, and essential frontend extension ecosystems.
                  </p>
                </div>

                {/* Git & GitHub */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        Git & GitHub
                      </h4>
                      <p className="text-[11px] text-text-muted">Version Control</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Source code versioning, repository management, commit best practices, and code collaboration.
                  </p>
                </div>

                {/* Responsive Design & DevTools */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Chrome DevTools
                      </h4>
                      <p className="text-[11px] text-text-muted">Testing & Inspecting</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    DOM inspection, console debugging, network tab monitoring, and multi-device viewport testing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Soft Skills */}
          {(activeTab === 'all' || activeTab === 'soft') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Users className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Professional & Soft Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {skills.softSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="glass-card glass-card-hover rounded-xl p-4 border border-white/5 text-center flex flex-col items-center justify-center group"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] text-text-muted mt-1 leading-snug">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

