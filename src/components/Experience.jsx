import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experience</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-2">
            Hands-on self-directed frontend development, real-world project builds, and technical growth.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Modern Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical glowing timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-900 -translate-x-1/2 hidden sm:block"></div>
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-900 block sm:hidden"></div>

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-center"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 sm:left-1/2 top-8 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-[#080B14] shadow-glow-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping"></div>
                </div>
              </div>

              {/* Left/Date Side (Desktop) */}
              <div className="hidden sm:block text-right pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
                <h4 className="text-base font-bold text-white mt-2">
                  {exp.organization}
                </h4>
                <p className="text-xs text-text-muted flex items-center justify-end gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{exp.location}</span>
                </p>
              </div>

              {/* Right Side: Main Experience Content Card */}
              <div className="sm:pl-8">
                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/5 relative group">
                  
                  {/* Mobile Date Header */}
                  <div className="sm:hidden flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="text-xs text-text-muted">{exp.location}</span>
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-xs font-medium text-indigo-400 mt-0.5">
                        {exp.organization} • <span className="text-text-muted">{exp.type}</span>
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-mono mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

