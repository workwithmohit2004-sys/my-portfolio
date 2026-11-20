import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-2">
            Academic qualifications reinforcing analytical reasoning, computer science fundamentals, and technical expertise.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Bar */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-slate-800"></div>

          <div className="space-y-8">
            {education.map((item, index) => {
              const isPursuing = item.statusType === 'pursuing';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-6 z-20">
                    <div className={`w-8 h-8 rounded-full border-4 border-[#080B14] flex items-center justify-center shadow-lg ${
                      isPursuing 
                        ? 'bg-gradient-to-tr from-indigo-600 to-cyan-500 shadow-glow-primary' 
                        : 'bg-[#101827] border-white/20'
                    }`}>
                      {isPursuing ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-200 animate-pulse"></div>
                      ) : (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border ${
                    isPursuing 
                      ? 'border-indigo-500/30 bg-[#101827]/80' 
                      : 'border-white/5 bg-[#101827]/50'
                  }`}>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      
                      {/* Degree Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.degree}
                      </h3>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        {isPursuing ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
                            <Clock className="w-3 h-3 animate-spin-slow" />
                            Pursuing
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                            <CheckCircle className="w-3 h-3" />
                            Completed
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-text-muted bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                          <Calendar className="w-3 h-3 text-indigo-400" />
                          {item.year}
                        </span>
                      </div>

                    </div>

                    {/* Institute Name */}
                    {item.institute && (
                      <p className="text-sm font-medium text-indigo-300 flex items-center gap-1.5 mb-3">
                        <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item.institute}</span>
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

